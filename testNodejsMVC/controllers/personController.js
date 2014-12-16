/**
 * Created by zhangdihong on 2014/12/12.
 */
'use strict'
var config = require('../config');
var personDBModel = require('../models/person');
var personType = new personDBModel.Schema('personType').model;
var personDetail = new personDBModel.Schema('personDetail').model;
exports.savePersonType = function (req, res, next) {
    var personTypeEntity = new personType();
    var personDetailEntity=new personDetail();
 //    personEntity.personType = req.body.toDayPersonType;
//    personEntity.descr = req.body.toDayDescrtion;
//    personEntity.logSrc = req.body.toDayDescrition;
    personTypeEntity.personType='测试类名';
    personTypeEntity.descr='描述';
    personTypeEntity.logSrc='图片地址'
    personDetailEntity.title='测试项目一';
    personDetailEntity.address='地球上的某个卡卡';
    personDetailEntity.title='测试项目二';
    personDetailEntity.address='地球上的某个卡卡';
    personDetailEntity.persontype=personTypeEntity;
    personTypeEntity.save(function (err, _row) {
        if (err) {
            return next(err);
        }
        personDetailEntity.save(function (err,row) {

        });
//        res.redirect('person/personType');
   });
    res.json(personDetailEntity);
}

exports.index = function (req, res, next) {
//    db.allContent(function (err,indexContent) {
//        res.render('index.html',{indexContent:indexContent});
//    });
    var personEntity = new personType();

    personEntity.personType ='fsafsdaf';
    personEntity.descr ='fdsfasfas';
    personEntity.logSrc ='fdsafasdfsdafa';
    personEntity.save(function (err, row) {
        if (err) {
            return next(err);
        }
        res.send(row);
    });
}
exports.findAll = function (req, res, next) {
    personType.find({}, function (err, result) {
        res.send(result);
    });
};
