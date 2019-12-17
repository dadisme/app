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
  var userAddress = req.body.userAddress;
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
    sql = 'INSERT INTO users(username,userpwd,useremail,usertele,userAddress) VALUES(?,?,?,?,?)';
    sqlParams = [userName, password,userEmail,userTele,userAddress];
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
//修改
router.post('/Reset', function(req, res, next) {
  var userName = req.body.userName;
  var password = req.body.password;
  var userTel = req.body.userTel;
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
    if (result.length) {
      sql = `UPDATE users SET userpwd=?,usertele=?  WHERE username=?`;
      sqlParams = [password, userTel, userName];
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
    }
  });
});
//关于业主
router.post('/aboutUser',function(req,res,next){
  var userName = req.body.userName;
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
    if(result.length){
      res.json({
        status: 200,
        data: result
      })
    }
  })
});
//关于房屋
router.post('/aboutHouse',function(req,res,next){
  var userName = req.body.userName;
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
    if(result.length){
      res.json({
        status: 200,
        data: result
      })
    }
  })
});
//关于管理员
router.post('/aboutManager',function(req,res,next){
  var userName = req.body.userName;
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
    if(result.length){
      res.json({
        status: 200,
        data: result
      })
    }
  })
});

//水费
router.post('/waterRate',function(req,res,next) {
  var userName = req.body.username;
  var value = req.body.value;
  var sql1 = 'SELECT * FROM users WHERE username=?';
  var sqlParams = [userName];
  connection.query(sql1,sqlParams,function(err,result) {
    if (err) {
      res.json({
        status: 500,
        msg: err,
        data: ''
      });
      return;
    }
    if(result.length) {
      var address = result[0].useraddress;
      var sql2 = 'SELECT * FROM water WHERE username=?';
      connection.query(sql2,sqlParams,function(err,result){
        if (err) {
          res.json({
            status: 500,
            msg: err,
            data: ''
          });
          return;
        }
        if(result.length) {
          var money = result[0].money;
          res.json({
            status: 200,
            address: address,
            result: result,
          })
          if(value) {
            var money = money + value;
            var sqlv = `UPDATE water SET money=?  WHERE username=?`;
            var sqlParamsv = [money, userName];
            connection.query(sqlv,sqlParamsv,function(err,result) {
              if (err) {
                res.json({
                  status: 500,
                  msg: err,
                  data: ''
                });
                return;
              }
              if(result) {
                res.json({
                  status: 200,
                  msg: 'success',
                  data: ''
                });
              }
            })
          }
        }
      })
    }
  })
});
module.exports = router;
