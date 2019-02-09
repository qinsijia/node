//用户的操作
var router = require('express').Router();
var server = require('./../server/user');

//注册用户
router.post('/register', function (req, res) {
    server.register(req, res);
})
//用户修改自己的信息
router.post('/changeInformation', function (req, res) {
    server.changeInformation(req, res);
})
//用户查询
router.post('/search', function (req, res) {
    server.search(req, res);
})
//用户更新头像
router.post('/userphoto', function (req, res) {
    server.userphoto(req, res);
});
//验证用户名是否被注册过
router.post('/repeat', function (req, res) {
    server.repeat(req, res);
});
//用户登录时信息对比
router.post('/login', function (req, res) {
    server.login(req, res);
})
//修改密码
router.post('/changepassword', function (req, res) {
    server.changepassword(req, res);
})
//更改用户状态
router.post('/userstate', function (req, res) {
    server.userstate(req, res);
})
//用户点赞
router.post('/addzan', function (req, res) {
    server.addzan(req, res);
})
module.exports = router;