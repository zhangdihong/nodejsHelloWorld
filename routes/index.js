var express = require('express');
var router = express.Router();
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
router.get('/add', function (req, res) {
    var options={
        sqlScript:"insert into person (personid,memberid,won,balance,enable) values (?,?,?,?,?)",
        args:['111','11','200','1212121','121212'],
        handler: function (response) {
            res.json(response);
        }
    }
    sqlHelper.execScript(options);
});
router.get('/update', function (req,res) {
    var options={
        sqlScript:'update person set memberid=?,won=?,balance=?,enable=? where personid=?',
        args:[1,2,3,4,111],
        handler: function (response) {
            res.json(response);
        }
    }
    sqlHelper.execScript(options);
});
router.get('/delete', function (req,res) {
    var options={
        sqlScript:'delete from person where personid=?',
        args:[111],
        handler: function (response) {
            res.json(response);
        }
    }
    sqlHelper.execScript(options);
});
module.exports = router;
