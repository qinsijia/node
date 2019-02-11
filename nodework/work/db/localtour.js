var localtour = require('./model/localTour'); //引入当地游模型

//渲染首页当地游信息
let draw = (req, res) => {
    localtour.findAll({
        where: {
            state: 1,
        }
    }).then(e => {
        var mes = {
            code: 1,
            mas: '查询当地游信息成功',
            data: JSON.stringify(e),
        };
        res.send(mes);
    })
}
//新增一条当地游、套餐
let meal = require('./model/meal'); //引入套餐模型
let addlocaltour = (req, res) => {
    localtour.create({
        title: req.body.title,
        content: req.body.content,
        imgs: req.body.imgs,
        place: req.body.place,
        date: req.body.date,
        state: 1,
    }).then(e => {
        //拿到创建的当地游信息，继续创建一条或多条对应的套餐数据
        let mealArr = [{
            "localtour_id": 1,
            "meal_name": '游戏',
            "price": 15
        }, {
            "localtour_id": 1,
            "meal_name": '飞车',
            "price": 35
        }];
        // console.log(typeof (mealArr));
        for (var i in mealArr) {
            mealArr[i].localtour_id = e.id;
        }
        meal.bulkCreate(mealArr).then(e => {
            var mes = {
                code: 1,
                mes: '套餐添加成功',
            };
            res.send(mes);
        })
    })
}
//删除当地游
let deltour = (req, res) => {
    localtour.destroy({
        where: {
            id: req.body.id
        }
    }).then(e => {
        var mes = {
            code: 1,
            msg: '当地游已删除',
            data: {
                id: req.body.id
            }
        }
        res.send(mes);
    })
}
//修改当地游
let changetour = (req, res) => {
    localtour.update({
        title: req.body.title,
        content: req.body.content,
        imgs: req.body.imgs,
        place: req.body.place,
        date: req.body.date,
        state: req.body.state,
    }, {
        where: {
            id: req.body.id
        }
    }).then(e => {
        var mes = {
            code: 1,
            mes: '修改当地游成功',
        };
        res.send(mes);
    });
}
//更改当地游信息状态
let state = (req, res) => {
    let state_ = '';
    if (req.body.state == 0) {
        state_ = 1;
    }
    if (req.body.state == 1) {
        state_ = 0;
    }
    localtour.update({
        state: state_
    }, {
        where: {
            id: req.body.id
        }
    }).then(e => {
        var mes = {
            code: 1,
            msg: '当地游状态已修改',
            data: {
                state: state_
            }
        }
        res.send(mes);
    })
}
//删除套餐
let deletes = (req, res) => {
    meal.destroy({
        where: {
            id: req.body.id
        }
    }).then(e => {
        var mes = {
            code: 1,
            msg: '套餐已删除',
            data: {
                id: req.body.id
            }
        }
        res.send(mes);
    })
}
//修改套餐
let changemeal = (req, res) => {
    meal.update({
        meal_name: req.body.meal_name,
        price: req.body.price,
    }, {
        where: {
            id: req.body.id
        }
    }).then(e => {
        var mes = {
            code: 1,
            mes: '修改套餐成功',
        };
        res.send(mes);
    });
}
//继续给某个当地游添加套餐
let readdmeal = (req, res) => {
    meal.create({
        localtour_id: req.body.localtour_id,
        meal_name: req.body.meal_name,
        price: req.body.price
    }).then(e => {
        var mes = {
            code: 1,
            mes: '继续添加套餐成功',
        };
        res.send(mes);
    })
}
//查询某个当地游的所有套餐
let allmeal = (req, res) => {
    meal.findAll({
        where: {
            localtour_id: req.body.localtour_id
        }
    }).then(e => {
        var mes = {
            code: 1,
            mes: '查询所有套餐成功',
            data: JSON.stringify(e),
        };
        res.send(mes);
    })
}
module.exports = {
    draw,
    addlocaltour,
    deltour,
    changetour,
    state,
    deletes,
    changemeal,
    readdmeal,
    allmeal
}