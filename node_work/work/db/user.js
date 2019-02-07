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

module.exports = {
    register,
    changeInformation,
}