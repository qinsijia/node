// 中间表
let config = require('./config');
let Sequelize = require('sequelize');

const middle = config.define('middle', {
    tour_title: {
        type: Sequelize.STRING
    },
    img: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.STRING
    },
    meal: {
        type: Sequelize.STRING
    },
    meal_num: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = middle;