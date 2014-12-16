/**
 * Created by zhangdihong on 2014/12/12.
 */
exports.setRequestUrl= function (app) {
    var person=require('./controllers/personController');
    app.get('/',person.index);
    app.get('/personType',person.findAll);
    app.get('/save',person.savePersonType);
}