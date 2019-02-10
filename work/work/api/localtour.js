//当地游的操作
let router = require('express').Router();
let server = require('./../server/localtour');

//渲染首页当地游信息
router.post('/draw', function (req, res) {
    server.draw(req, res);
})
//新增一条当地游、套餐
router.post('/addlocaltour', function (req, res) {
    server.addlocaltour(req, res);
})
//删除当地游
router.post('/deltour', function (req, res) {
    server.deltour(req, res);
})
//修改当地游
router.post('/changetour', function (req, res) {
    server.changetour(req, res);
})
//更改当地游信息状态
router.post('/state', function (req, res) {
    server.state(req, res);
})
//删除套餐
router.post('/deletes', function (req, res) {
    server.deletes(req, res);
})
//修改套餐
router.post('/changemeal', function (req, res) {
    server.changemeal(req, res);
})
//继续给某个当地游添加套餐
router.post('/readdmeal', function (req, res) {
    server.readdmeal(req, res);
})
//查询某个当地游的所有套餐
router.post('/allmeal', function (req, res) {
    server.allmeal(req, res);
})
module.exports = router;