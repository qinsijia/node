// 游记表
let config = require('./config');
let Sequelize = require('sequelize');

const travel = config.define('travel', {
    user_id: {
        type: Sequelize.STRING
    },
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.STRING
    },
    place: {
        type: Sequelize.STRING
    },
    imgurl: {
        type: Sequelize.STRING
    },
    zanNum: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = travel;