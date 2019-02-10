// 订单详情表
let config = require('./config');
let Sequelize = require('sequelize');

const orderinfor = config.define('orderinfor', {
    order_id: {
        type: Sequelize.STRING
    },
    meal: {
        type: Sequelize.STRING
    },
    meal_num: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.STRING
    },
    img: {
        type: Sequelize.STRING
    },
    tour_title: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = orderinfor;