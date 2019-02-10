var travel = require('./model/travel'); //引入游记模型

//查询轮播图所需数据
let swiper = (req, res) => {
    travel.findAll({
        where: {
            swiper: '1',
            state: 1
        }
    }).then(e => {
        var mes = {
            code: 1,
            msg: '轮播图数据查询成功',
            data: JSON.stringify(e),
        }
        res.send(mes);
    });
}
//游记按点赞数从高到低
let zan = (req, res) => {
    travel.findAndCountAll({ //查找数据同时计算数量
        where: {
            state: 1
        },
        // offset: Number(req.body.limit),
        // limit: Number(req.body.curr),
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

//查出所有游记并且按照时间从新到旧
let time = (req, res) => {
    travel.findAndCountAll({
        where: {
            state: 1
        },
        // offset: Number(req.body.limit),
        // limit: Number(req.body.curr),
        order: [
            ['date', 'DESC']
        ],
    }).then(e => {
        res.send(JSON.stringify(e));
    });
}

module.exports = {
    swiper,
    zan,
    time
}