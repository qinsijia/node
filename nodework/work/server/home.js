//操作首页
let db = require('./../db/home');

module.exports = {
    //首页轮播图所需数据
    swiper(req, res) {
        db.swiper(req, res);
    },
    //游记按点赞数从高到低
    zan(req, res) {
        db.zan(req, res);
    },
    //按时间从新到旧排列
    time(req, res) {
        db.time(req, res);
    }
}