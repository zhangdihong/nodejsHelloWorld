/**
 * Created by zhangdihong on 2014/12/8.
 */

var mysql = require('mysql');
var config=require('../config');
var MYSQL_CONFIG = {
    user:config.root,
    password:config.password,
    database:config.db,
    host:config.host
};

exports.execScript = function (options) {
    var sqlScript=options['sqlScript'];
    var args=options['args'];
    var handler=options['handler'];
    var connection = mysql.createConnection(MYSQL_CONFIG);
    connection.connect();
    var result;
    if (!args) {
         connection.query(sqlScript, function (err, response, fields) {
            if (err) {
                throw err
            }
           handler(response);
        });

    } else {
        connection.query(sqlScript, args, function (err, response) {
            if (err) {
                throw err;
            }
            handler(response);
        });

    }
}
exports.release=function(err){
    if(err){throw err;}
    console.log('数据库连接关闭')
}
