// 当地游表
let config = require('./config');
let Sequelize = require('sequelize');

const localtour = config.define('localtour', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.STRING
    },
    imgs: {
        type: Sequelize.STRING
    },
    place: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.STRING
    },
    state: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = localtour;