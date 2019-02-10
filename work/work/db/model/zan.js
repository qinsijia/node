// 用户点赞表
let config = require('./config');
let Sequelize = require('sequelize');

const zan = config.define('zan', {
    user_id: {
        type: Sequelize.STRING
    },
    travel_id: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = zan;