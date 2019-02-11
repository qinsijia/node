//操作当地游
let db = require('./../db/localtour');

module.exports = {
    //渲染首页当地游信息
    draw(req, res) {
        db.draw(req, res);
    },
    //新增一条当地游、套餐
    addlocaltour(req, res) {
        db.addlocaltour(req, res);
    },
    //删除当地游
    deltour(req, res) {
        db.deltour(req, res);
    },
    //修改当地游
    changetour(req, res) {
        db.changetour(req, res);
    },
    //更改当地游信息状态
    state(req, res) {
        db.state(req, res);
    },
    //删除套餐
    deletes(req, res) {
        db.deletes(req, res);
    },
    //修改套餐
    changemeal(req, res) {
        db.changemeal(req, res);
    },
    //继续给某个当地游添加套餐
    readdmeal(req, res) {
        db.readdmeal(req, res);
    },
    //查询某个当地游的所有套餐
    allmeal(req, res) {
        db.allmeal(req, res);
    },
}