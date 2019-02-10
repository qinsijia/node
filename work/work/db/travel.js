var travel = require('./model/travel'); //引入游记模型

//按照点赞数从高到低
let zanUp = (req, res) => {
    travel.findAndCountAll({ //查找数据同时计算数量
        where: {
            place: {
                $like: req.query.mes,
            },
            state: 1
        },
        // offset: req.query.limit,
        // limit: req.query.curr,
        order: [
            ['zanNum', 'DESC']
        ]
    }).then(e => {
        var mes = {
            code: 1,
            mes: '按照点赞数从高到低',
            data: JSON.stringify(e)
        };
        res.send(mes);
    })
}

//按照点赞数从低到高
let zanDown = (req, res) => {
    travel.findAndCountAll({ //查找数据同时计算数量
        where: {
            place: {
                $like: req.query.mes,
            },
            state: 1
        },
        // offset: req.query.limit,
        // limit: req.query.curr,
        order: [
            ['zanNum']
        ]
    }).then(e => {
        var mes = {
            code: 1,
            mes: '按照点赞数从低到高',
            data: JSON.stringify(e)
        };
        res.send(mes);
    })
}

//游记页面一刷新调用，默认按照时间从新到旧
let search = (req, res) => {
    travel.findAndCountAll({
        where: {
            place: {
                $like: req.query.mes,
            },
            state: 1
        },
        // offset: Number(req.query.limit),
        // limit: Number(req.query.curr),
        order: [
            ['date', 'DESC']
        ]
    }).then(e => {
        var mes = {
            code: 1,
            mes: '按照时间从新到旧',
            data: JSON.stringify(e)
        };
        res.send(mes);
    })
}

//按照时间从旧到新
let timeJiu = (req, res) => {
    travel.findAndCountAll({
        where: {
            place: {
                $like: req.query.mes,
            },
            state: 1
        },
        // offset: Number(req.query.limit),
        // limit: Number(req.query.curr),
        order: [
            ['date']
        ]
    }).then(e => {
        var mes = {
            code: 1,
            mes: '按照时间从旧到新',
            data: JSON.stringify(e)
        };
        res.send(mes);
    })
}

//更改游记状态
let state = (req, res) => {
    let state_ = '';
    if (req.body.state == 0) {
        state_ = 1;
    }
    if (req.body.state == 1) {
        state_ = 0;
    }
    travel.update({
        state: state_
    }, {
        where: {
            id: req.body.id
        }
    }).then(e => {
        var mes = {
            code: 1,
            msg: '游记状态已修改',
            data: {
                state: state_
            }
        }
        res.send(mes);
    })
}

//删除游记
let deletes = (req, res) => {
    travel.destroy({
        where: {
            id: req.body.id
        }
    }).then(e => {
        var mes = {
            code: 1,
            msg: '游记已删除',
            data: {
                id: req.body.id
            }
        }
        res.send(mes);
    })
}

//新增游记
let add = (req, res) => {
    travel.create({
        user_id: req.body.user_id,
        title: req.body.title,
        content: req.body.content,
        date: req.body.date,
        place: req.body.place,
        imgurl: req.body.imgurl,
        zanNum: req.body.zanNum,
        state: req.body.state,
    }).then(e => {
        var mes = {
            code: 1,
            msg: '游记新增成功',
            data: JSON.stringify(e),
        }
        res.send(mes);
    })
}

//用户写游记评论
let comment = require('./model/comment'); //引入评论模型
let writecomment = (req, res) => {
    comment.create({
        user_id: req.body.user_id,
        travel_id: req.body.travel_id,
        content: req.body.content,
        date: req.body.date,
    }).then(e => {
        var mes = {
            code: 1,
            msg: '游记评论新增成功',
            data: JSON.stringify(e),
        }
        res.send(mes);
    })
}

//查询单条游记详情
let travelItemInfor = (req, res) => {
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
    travel.findAll(obj).then(e => {
        var mes = {
            code: 1,
            mes: '查询成功',
            data: e
        };
        res.send(mes);
    });

    //只能查询单条游记
    // travel.findOne({
    //     where: {
    //         id: req.body.id
    //     }
    // }).then(e => {
    //     var mes = {
    //         code: 1,
    //         msg: '查询成功',
    //         data: e
    //     }
    //     res.send(mes);
    // })
}

//渲染一条游记的所有评论（按照时间从新到旧）
let commentAll = (req, res) => {
    comment.findAll({
        where: {
            travel_id: req.body.travel_id
        }
    }).then(e => {
        var mes = {
            code: 1,
            mes: '查询所有评论成功',
            data: e
        };
        res.send(mes);
    })
}
module.exports = {
    zanUp,
    zanDown,
    search,
    timeJiu,
    state,
    deletes,
    add,
    writecomment,
    travelItemInfor,
    commentAll
}