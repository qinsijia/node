//用户详情表
let config = require('./config');
let Sequelize = require('sequelize');

const user_detail = config.define('user_detail', {
    user_id: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    sex: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
    imgurl: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = user_detail;