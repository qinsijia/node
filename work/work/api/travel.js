//游记的操作
var router = require('express').Router();
var server = require('./../server/travel');

//按照点赞数从高到低
router.get('/zanUp', function (req, res) {
    server.zanUp(req, res);
})

//按照点赞从低到高
router.get('/zanDown', function (req, res) {
    server.zanDown(req, res);
})

//模糊搜索目的地，默认按照时间从新到旧
router.get('/search', function (req, res) {
    server.search(req, res);
})

//按照时间从旧到新
router.get('/timeJiu', function (req, res) {
    server.timeJiu(req, res);
})

//更改游记状态
router.post('/state', function (req, res) {
    server.state(req, res);
})

//删除游记
router.post('/deletes', function (req, res) {
    server.deletes(req, res);
})

//新增游记
router.post('/add', function (req, res) {
    server.add(req, res);
})

//用户写游记评论
router.post('/writecomment', function (req, res) {
    server.writecomment(req, res);
})

//查询单条游记详情
router.post('/travelItemInfor', function (req, res) {
    server.travelItemInfor(req, res);
})

//渲染一条游记的所有评论（按照时间从新到旧）
router.post('/commentAll', function (req, res) {
    server.commentAll(req, res);
})
module.exports = router;