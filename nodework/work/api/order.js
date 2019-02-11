//订单操作
var router = require('express').Router();
var server = require('./../server/order');

//先将用户选的东西存到中间表
router.post('/middleTable', function (req, res) {
    server.middleTable(req, res);
});
//修改订单状态
router.post('/state', function (req, res) {
    server.state(req, res);
})
module.exports = router;