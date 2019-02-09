//操作游记
var db = require('./../db/travel');

module.exports = {
    //按照点赞数从高到低
    zanUp(req, res) {
        db.zanUp(req, res);
    },
    //按照点赞数从低到高
    zanDown(req, res) {
        db.zanDown(req, res);
    },
    //模糊搜索目的地，默认按照时间从新到旧
    search(req, res) {
        db.search(req, res);
    },
    //按照时间从旧到新
    timeJiu(req, res) {
        db.timeJiu(req, res);
    },
    //更改游记状态
    state(req, res) {
        db.state(req, res);
    },
    //删除游记
    deletes(req, res) {
        db.deletes(req, res);
    },
    //新增游记
    add(req, res) {
        db.add(req, res);
    },
    //用户写游记评论
    writecomment(req, res) {
        db.writecomment(req, res);
    },
    //查询单条游记详情
    travelItemInfor(req, res) {
        db.travelItemInfor(req, res);
    },
    //渲染一条游记的所有评论（按照时间从新到旧）
    commentAll(req, res) {
        db.commentAll(req, res);
    },
}