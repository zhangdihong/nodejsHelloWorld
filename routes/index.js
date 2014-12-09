var express = require('express');
var router = express.Router();
var sys = require('util');
var MYSQL_USERNAME = 'root';
var MYSQL_PASSWORD = '123456';
var mysql = require('mysql');
var http = require('http');
var sqlHelper = require('../utill/db_helper');
/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});
router.get('/index', function (req, res) {
    var options={
        sqlScript:'select * from person',
        handler:function(response){
            res.json(response);
        }
    };
    sqlHelper.execScript(options);


});
router.get('/test', function (req, res) {
    res.render('mytest.html', { title: 'hellworld哈哈嘿嘿' });
});
module.exports = router;
//    var server=http.createServer(function(request,response){
//        response.writeHead(200,{"Content-Type":"text/html;charset:utf-8"});
//        response.write("<!doctype html><html><meta charset='utf-8'/>");
//        console.log("连接前")
//        var client=mysql.createConnection({'host':'localhost','port':3306,'user':'root','password':'123','database':'mysql'});
//        console.log(client);
//        console.log('正在连接数据库连接成功');
//        clientConnectionReady=function(client){
//            client.query('use cjtrade', function (err,result){
//                if(err){
//                    console.log('连接失败'+err.message);
//                    client.end();
//                    return;
//                }else{
//                    console.log('服务启动');
//                    console.log('mysql 数据库连接成功');
//                }
//                clientReady(client);
//            });
//        }
//        clientReady= function (client) {
//            client.query('select * from person', function selectCb(error,results,fields) {
//                if(error){
//                    console.log(error.message);
//                    client.end();
//                    return;
//                }
//                var data='';
//                for(var i=0;i<results.length;i++){
//                    var   firstResult=results[i];
//                    data+='personid'+firstResult['personid']+'  name'+firstResult['persontime'];
//                }
//                response.write(data);
//                response.write('关闭mysql连接');
//                response.write("</html>");
//                response.end();
//            });
//            client.end();
//        };
//        clientConnectionReady(client);
//    });
//    server.listen(3001,"127.0.0.1/index");
//    var sys=require("util");
//    sys.puts("Server running at http://localhost:3001/");