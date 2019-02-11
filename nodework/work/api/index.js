//api的总入口
let user = require('./user');
let travel = require('./travel');
let localtour = require('./localtour');
let home = require('./home');
let order = require('./order');

module.exports = {
    '/user': user,
    '/travel': travel,
    '/localtour': localtour,
    '/home': home,
    '/order': order
}