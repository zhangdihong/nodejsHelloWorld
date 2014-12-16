/**
 * Created by zhangdihong on 2014/12/15.
 */
var dbUrl=require('../config').db;
var mongoose=require('mongoose');
exports.connect= function (callback) {
    mongoose.connect(dbUrl);
}
exports.mongoObj= function () {
    return mongoose;
}