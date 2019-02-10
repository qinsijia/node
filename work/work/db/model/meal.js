// 套餐表
let config = require('./config');
let Sequelize = require('sequelize');

const meal = config.define('meal', {
    localtour_id: {
        type: Sequelize.STRING
    },
    meal_name: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = meal;