var express = require('express');
var mongoose = require('mongoose');
var mongodb=require('mongodb');
var router = express.Router();
var http = require('http');
var sqlHelper = require('../utill/db_helper');
/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});
router.get('/index', function (req, res) {
    var options = {
        sqlScript: 'select * from person',
        handler: function (response) {
            res.json(response);
        }
    };
    sqlHelper.execScript(options);


});
router.get('/add', function (req, res) {
    var options = {
        sqlScript: "insert into person (personid,memberid,won,balance,enable) values (?,?,?,?,?)",
        args: ['111', '11', '200', '1212121', '121212'],
        handler: function (response) {
            res.json(response);
        }
    }
    sqlHelper.execScript(options);
});
router.get('/update', function (req, res) {
    var options = {
        sqlScript: 'update person set memberid=?,won=?,balance=?,enable=? where personid=?',
        args: [1, 2, 3, 4, 111],
        handler: function (response) {
            res.json(response);
        }
    }
    sqlHelper.execScript(options);
});
router.get('/delete', function (req, res) {
    var options = {
        sqlScript: 'delete from person where personid=?',
        args: [111],
        handler: function (response) {
            res.json(response);
        }
    }
    sqlHelper.execScript(options);
});
//测试爬虫服务端
router.get('/test', function (req, res) {
    http.get('http://www.sina.com.cn/', function (response) {
        var size = 0;
        var chunks = [];
        response.on('data', function (chunk) {
            size += chunk.length;
            chunks.push(chunk);
        });
        response.on('end', function () {
            var data = Buffer.concat(chunks, size);
            console.log(data.toString());
        })
    }).on('error', function (e) {
        console.log(e.message);

    });
});
router.get('/mongodb', function (req, res) {
    var server=new mongodb.Server('localhost',27017,{auto_reconnect:true});
    var db=new mongodb.Db('MongoDB',server,{safe:true});
    db.open(function (err,db) {
            if(!err){
                db.createCollection('MongoDB',{safe:true}, function (err,collection) {
                    if(err){
                        console.log(err);
                    }else{
                        var tempModel={id:11,name:'safas'}
                        collection.insert(tempModel,{safe:true},function (err,result) {
                            if(err){
                                console.log(err);
                            }
                            console.log(result);
                        });
                    }
                });
            }
    });
});
router.get('/mongodb/select', function (req,res) {
    var server=new mongodb.Server('localhost',27017,{auto_reconnect:true});
    var db=new mongodb.Db('MongoDB',server,{safe:true});
    db.open(function (err,db) {
            if(!err){
                    db.createCollection('MongoDB',{safe:true}, function (err,collection) {
                        if(err){
                            console.log(err.message);
                        }else{
                            collection.find().toArray(function (err,doc) {
                                console.log(doc)
                            })
                        }
                    });
            }else{
                console.log(err);
            }
    });
});
router.get('/mongodb/update',function(req,res){
        var server=new mongodb.Server('localhost',27017,{auto_reconnect:true});
        var db=new mongodb.Db('MongoDB',server,{safe:true});
        db.open(function(err,db){
            db.createCollection('MongoDB',{safe:true}, function (err,collection) {
                    if(err){
                            console.log(err.message);
                    }else{
                            collection.update({id:11},{$set:{name:'12324545'}},{safe:true}, function (err,result) {
                                    console.log(result);
                            });
                    }
            });
        });
});
router.get('/mongodb/delete', function (req,res) {
        var server=new mongodb.Server('localhost',27017,{auto_reconnect:true});
        var db=new mongodb.Db('MongoDB',server,{safe:true});
        db.open(function(err,db){
            if(!err) {
                db.createCollection('MongoDB',{safe: true},function (err, collection) {
                    if(err){
                        console.log(err);
                    }
                    collection.remove({id: 13}, {safe: true}, function (err, result) {
                        if(err){
                            console.log(err);
                        }
                        console.log(result);
                    });
                });
            }else{
                console.log(err.message);
            }
        });
});
module.exports = router;
