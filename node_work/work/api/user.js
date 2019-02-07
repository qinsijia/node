var router=require('express').Router();
var server=require('./../server/user');

//注册用户
router.post('/register',function(req,res){
    server.register(req,res);
})
//用户修改自己的信息
router.post('/changeInformation',function(req,res){
    server.changeInformation(req,res);
});
module.exports=router;