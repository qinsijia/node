// 游记评论表
let config = require('./config');
let Sequelize = require('sequelize');

const comment = config.define('comment', {
    user_id: {
        type: Sequelize.STRING
    },
    travel_id: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = comment;