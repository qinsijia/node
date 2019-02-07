//调用数据库的方法
let db=require('./../db/user');

module.exports={
    //注册
    register(req,res){
        db.register(req,res);
    },
     //用户修改自己的信息
     changeInformation(req,res){
        db.changeInformation(req,res);
    },
}