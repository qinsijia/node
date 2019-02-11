//首页的操作
let router = require('express').Router();
let server = require('./../server/home');

//首页轮播图所需数据
router.post('/swiper',function(req,res){
    server.swiper(req,res);
});
//游记按点赞数从高到低
router.post('/zan', function (req, res) {
    server.zan(req, res);
})
//游记按时间从新到旧
router.post('/time',function(req,res){
    server.time(req,res);
});

module.exports = router;