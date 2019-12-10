var express = require('express');
var router = express.Router();
var connection = require('../db/connect');


/* GET home page. */
router.get('/',function(req,res,next){
  res.send('express');
});
//登陆
router.post('/Login', function(req, res, next) {
  var userName = req.body.userName;
  var password = req.body.password;
  var sql = 'SELECT * FROM users WHERE username=?';
  var sqlParams = [userName];
  connection.query(sql, sqlParams, function(err, result) {
    if (err) {
      res.json({
        status: 500,
        msg: err,
        data: ''
      });
      return;
    }
    if (result.length === 0) {
      res.json({
        status: 0,
        msg: '用户名不存在',
        data: ''
      });
      return;
    }
    if (password === result[0].userpwd) {
      res.cookie('username', result[0].username, {
        path: '/',
        maxAge: 1000 * 60 * 60 * 365
      });
      res.json({
        status: 200,
        msg: 'success',
        data: ''
      });
    } else {
      res.json({
        status: 0,
        msg: '密码错误',
        data: ''
      });
    }
  });
});
//注册
router.post('/Reg', function(req, res, next) {
  var userName = req.body.userName;
  var userEmail = req.body.userEmail;
  var userTele = req.body.userTele;
  var password = req.body.password;
  var sql = 'SELECT * FROM users WHERE username=?';
  var sqlParams = [userName];
  connection.query(sql, sqlParams, function(err, result) {
    if (err) {
      res.json({
        status: 500,
        msg: err,
        data: ''
      });
      return;
    }
    if (result.length !== 0) {
      res.json({
        status: 0,
        msg: '用户已存在！',
        data: ''
      });
      return;
    }
    sql = 'INSERT INTO users(username,userpwd,useremail,usertele) VALUES(?,?,?,?)';
    sqlParams = [userName, password,userEmail,userTele];
    connection.query(sql, sqlParams, function(err, result) {
      if (err) {
        res.json({
          status: 500,
          msg: err,
          data: ''
        });
        return;
      }
      res.json({
        status: 200,
        msg: 'success',
        data: ''
      });
    });
  });
});

module.exports = router;
