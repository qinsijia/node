//数据库对用户的操作
let user = require('./model/user');

//注册
let user_detail = require('./model/user_detail');
let register = (req, res) => {
    user.create({
        username: req.body.name,
        password: req.body.pass,
        state: 1
    }).then(e => {
        //拿到创建的用户信息，继续创建一条对应的用户信息数据
        user_detail.create({
            user_id: e.id,
        });
        var mes = {
            code: 1,
            mes: '新增数据成功',
            data: {
                username: req.body.name,
                password: req.body.pass
            }
        };
        res.send(mes);
    });
}

//用户修改信息
let changeInformation = (req, res) => {
    user_detail.update({
        name: req.body.name,
        sex: req.body.sex,
        age: req.body.age,
        phone: req.body.phone,
        city: req.body.city,
    }, {
        where: {
            user_id: req.body.user_id
        }
    }).then(e => {
        var data_ = {
            name: req.body.name,
            sex: req.body.sex,
            age: req.body.age,
            phone: req.body.phone,
            city: req.body.city,
        };
        var mes = {
            code: 1,
            mes: '修改成功',
            data: data_
        };
        res.send(mes);
    });
}

//用户查询
let search = (req, res) => {
    //传的id如果为'',则查询到的是所有用户;如果传了具体的id值,则查询到对应的用户数据
    let obj;
    if (req.body.id == '') {
        obj = {};
    } else {
        obj = {
            where: {
                id: req.body.id
            }
        }
    }
    user.findAll(obj).then(e => {
        var mes = {
            code: 1,
            mes: '查询用户',
            data: e
        };
        res.send(mes);
    });

    //只能查询所有用户
    // user.findAll({

    // }).then(e => {
    //     var mes = {
    //         code: 1,
    //         mes: '查询用户',
    //         data: e
    //     };
    //     res.send(mes);
    // })
}

//更改头像
let userphoto = (req, res) => {
    user_detail.update({
        imgurl: req.body.imgurl
    }, {
        where: {
            user_id: req.body.user_id
        }
    }).then(e => {
        var mes = {
            code: 1,
            mes: '头像修改成功',
            data: {
                imgurl: req.body.imgurl
            }
        };
        res.send(mes);
    });
}

//验证用户名是否被注册过
let repeat = (req, res) => {
    user.findAll({
        where: {
            username: req.body.username
        }
    }).then(e => {
        if (e.length > 0) {
            var mes = {
                code: 0,
                mes: '用户名已存在'
            };
            res.send(mes);
        }
        if (e.length == 0) {
            var mes = {
                code: 1,
                mes: '用户名未重复'
            };
            res.send(mes);
        }
    });
}

//用户登录时信息对比
let login = (req, res) => {
    user.findAll({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    }).then(e => {
        if (e.length > 0) {
            if (e[0].state == 0) {
                var mes = {
                    code: -1,
                    msg: '该账号已被冻结，请联系管理员'
                }
                res.send(mes);
            } else {
                var mes = {
                    code: 1,
                    msg: '登录成功',
                    data: JSON.stringify(e),
                }
                res.send(mes);
            }
        } else if (e.length == 0) {
            var mes = {
                code: 0,
                msg: '用户名或密码错误'
            }
            res.send(mes);
        }
    })
}

//修改密码
let changepassword = (req, res) => {
    user.update({
        password: req.body.password
    }, {
        where: {
            username: req.body.username
        }
    }).then(e => {
        var mes = {
            code: 1,
            msg: '修改密码成功',
            data: {
                username: req.body.username,
                password: req.body.password
            }
        }
        res.send(mes);
    })
}

//更改用户状态
let userstate = (req, res) => {
    let state_ = '';
    if (req.body.state == 0) {
        state_ = 1;
    }
    if (req.body.state == 1) {
        state_ = 0;
    }
    user.update({
        state: state_
    }, {
        where: {
            username: req.body.username
        }
    }).then(e => {
        var mes = {
            code: 1,
            msg: '用户状态已修改',
            data: {
                state: state_
            }
        }
        res.send(mes);
    })
}

//用户点赞
let zan = require('./model/zan'); //引入点赞模型
let travel = require('./model/travel'); //引入游记模型
let addzan = (req, res) => {
    zan.findAll({
        where: {
            user_id: req.body.user_id,
            travel_id: req.body.travel_id,
        }
    }).then(e => {
        if (e.length > 0) {
            var mes = {
                code: 0,
                msg: '该篇游记你已点赞过'
            }
            res.send(mes);
        } else {
            //更新游记点赞数
            travel.update({
                zanNum: parseInt(req.body.zanNum) + parseInt(1),
            }, {
                where: {
                    id: req.body.travel_id,
                }
            });
            //点赞表增加一条数据
            zan.create({
                user_id: req.body.user_id,
                travel_id: req.body.travel_id,
            }).then(e => {
                var mes = {
                    code: 1,
                    msg: '点赞操作成功'
                }
                res.send(mes);
            })
        }
    })
}
module.exports = {
    register,
    changeInformation,
    search,
    userphoto,
    repeat,
    login,
    changepassword,
    userstate,
    addzan
}