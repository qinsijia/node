//调用数据库的方法
let db = require('./../db/user');

module.exports = {
    //注册
    register(req, res) {
        db.register(req, res);
    },
    //用户修改自己的信息
    changeInformation(req, res) {
        db.changeInformation(req, res);
    },
    //用户查询
    search(req, res) {
        db.search(req, res);
    },
    //用户更改头像
    userphoto(req, res) {
        db.userphoto(req, res);
    },
    //验证用户名是否被注册过
    repeat(req, res) {
        db.repeat(req, res);
    },
    //用户登录时信息对比
    login(req, res) {
        db.login(req, res);
    },
    //修改密码
    changepassword(req, res) {
        db.changepassword(req, res);
    },
    //更改用户状态
    userstate(req, res) {
        db.userstate(req, res);
    },
    //用户点赞
    addzan(req, res) {
        db.addzan(req, res);
    }
}