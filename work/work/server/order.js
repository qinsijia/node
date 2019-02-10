//操作订单
let db = require('./../db/order');

module.exports = {
    //生成订单
    middleTable(req, res) {
        db.middleTable(req, res);
    }
}