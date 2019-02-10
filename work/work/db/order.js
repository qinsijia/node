let middle = require('./model/middle'); //
let orderall = require('./model/orderall'); //引入订单总模型
let orderinfor = require('./model/orderinfor'); //引入订单详情模型

//生成订单
let middleTable = (req, res) => {
    orderall.create({ //生成订单
        user_id: req.body.user_id,
        number: req.body.number,
        state: 0,
    }).then(e => {
        middle.findOne({ //查找中间表数据
            where: {
                id: req.body.middle_id,
            }
        }).then(a => {
            orderinfor.create({ //生成订单详情
                order_id: e.id,
                meal: a.meal,
                meal_num: a.meal_num,
                price: a.price,
                img: a.img,
                tour_title: a.tour_title,
                date: a.date,
            }).then(b => {
                var mes = {
                    code: 1,
                    msg: '生成订单成功',
                }
                res.send(mes);
            })
        })
    })
}

module.exports = {
    middleTable,
}