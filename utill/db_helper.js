/**
 * Created by zhangdihong on 2014/12/8.
 */

var mysql = require('mysql');
var MYSQL_USERNAME = 'root';
var MYSQL_PASSWORD = '123456';
var MYSQL_DATABASE = 'cjtrade';
var MYSQL_HOST = 'localhost';
var MYSQL_CONFIG = {
    user: MYSQL_USERNAME,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    host: MYSQL_HOST
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
        connection.query(sqlScript, sqlParam, function (err, response) {
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
