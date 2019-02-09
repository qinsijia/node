//api的总入口
let user = require('./user');
let travel = require('./travel');

module.exports = {
    '/user': user,
    '/travel': travel,
}