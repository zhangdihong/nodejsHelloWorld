/**
 * Created by zhangdihong on 2014/12/12.
 */
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var personTypeSchema=new Schema({
    personType:String,
    descr:String,
    logSrc:String
});
var personDetailSchema=new Schema({
    title:String,
    address:String,
    createTime:{type:Date,default:Date.now},
    personType:[personTypeSchema]
});

mongoose.model('personType',personTypeSchema);
mongoose.model('personDetail',personDetailSchema);
module.exports.Schema=function(modelName){
        return{model:mongoose.model(modelName)};
}