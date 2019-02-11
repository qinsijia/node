// 订单总表
let config = require('./config');
let Sequelize = require('sequelize');

const orderall = config.define('orderall', {
    user_id: {
        type: Sequelize.STRING
    },
    number: {
        type: Sequelize.STRING
    },
    state: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = orderall;