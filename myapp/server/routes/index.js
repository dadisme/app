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
        data: '',
        address: result[0].useraddress,
        coverarea: result[0].coverarea
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
  var sqlParams = [userName];
  var sql = 'SELECT * FROM water WHERE username=?';
  if(!value) {
    connection.query(sql,sqlParams,function(err,result){
      if (err) {
        res.json({
          status: 500,
          msg: err,
          data: ''
        });
        return;
      }
      if(result.length) {
        res.json({
          status: 200,
          result: result,
        })
      }
    })
  }
  if(value) {
    var sqlv = `UPDATE water SET money=?  WHERE username=?`;
    var sqlParamsv = [value, userName];
    connection.query(sqlv,sqlParamsv,function(err,result) {
      if (err) {
        res.json({
          status: 500,
          msg: err,
          data: ''
        });
        return;
      }else {
        res.json({
          status: 200,
          msg: '充值成功',
          data: ''
        });
      }
    })
  }
});
router.post('/waterRate',function(req,res,next) {
  var userName = req.body.username;
  var value = req.body.value;
  var sqlParams = [userName];
  var sql = 'SELECT * FROM water WHERE username=?';
  if(!value) {
    connection.query(sql,sqlParams,function(err,result){
      if (err) {
        res.json({
          status: 500,
          msg: err,
          data: ''
        });
        return;
      }
      if(result.length) {
        res.json({
          status: 200,
          result: result,
        })
      }
    })
  }
  if(value) {
    var sqlv = `UPDATE water SET money=?  WHERE username=?`;
    var sqlParamsv = [value, userName];
    connection.query(sqlv,sqlParamsv,function(err,result) {
      if (err) {
        res.json({
          status: 500,
          msg: err,
          data: ''
        });
        return;
      }else {
        res.json({
          status: 200,
          msg: '充值成功',
          data: ''
        });
      }
    })
  }
});
//水费
router.post('/waterRate',function(req,res,next) {
  var userName = req.body.username;
  var value = req.body.value;
  var sqlParams = [userName];
  var sql = 'SELECT * FROM water WHERE username=?';
  if(!value) {
    connection.query(sql,sqlParams,function(err,result){
      if (err) {
        res.json({
          status: 500,
          msg: err,
          data: ''
        });
        return;
      }
      if(result.length) {
        res.json({
          status: 200,
          result: result,
        })
      }
    })
  }
  if(value) {
    var sqlv = `UPDATE water SET money=?  WHERE username=?`;
    var sqlParamsv = [value, userName];
    connection.query(sqlv,sqlParamsv,function(err,result) {
      if (err) {
        res.json({
          status: 500,
          msg: err,
          data: ''
        });
        return;
      }else {
        res.json({
          status: 200,
          msg: '充值成功',
          data: ''
        });
      }
    })
  }
});
//电费
router.post('/electricRate',function(req,res,next) {
  var userName = req.body.username;
  var value = req.body.value;
  var sqlParams = [userName];
  var sql = 'SELECT * FROM electric WHERE username=?';
  if(!value) {
    connection.query(sql,sqlParams,function(err,result){
      if (err) {
        res.json({
          status: 500,
          msg: err,
          data: ''
        });
        return;
      }
      if(result.length) {
        res.json({
          status: 200,
          result: result,
        })
      }
    })
  }
  if(value) {
    var sqlv = `UPDATE electric SET money=?  WHERE username=?`;
    var sqlParamsv = [value, userName];
    connection.query(sqlv,sqlParamsv,function(err,result) {
      if (err) {
        res.json({
          status: 500,
          msg: err,
          data: ''
        });
        return;
      }else {
        res.json({
          status: 200,
          msg: '充值成功',
          data: ''
        });
      }
    })
  }
});
//气费
router.post('/gasRate',function(req,res,next) {
  var userName = req.body.username;
  var value = req.body.value;
  var sqlParams = [userName];
  var sql = 'SELECT * FROM gas WHERE username=?';
  if(!value) {
    connection.query(sql,sqlParams,function(err,result){
      if (err) {
        res.json({
          status: 500,
          msg: err,
          data: ''
        });
        return;
      }
      if(result.length) {
        res.json({
          status: 200,
          result: result,
        })
      }
    })
  }
  if(value) {
    var sqlv = `UPDATE gas SET money=?  WHERE username=?`;
    var sqlParamsv = [value, userName];
    connection.query(sqlv,sqlParamsv,function(err,result) {
      if (err) {
        res.json({
          status: 500,
          msg: err,
          data: ''
        });
        return;
      }else {
        res.json({
          status: 200,
          msg: '充值成功',
          data: ''
        });
      }
    })
  }
});
//物业费
router.post('/propertyRate',function(req,res,next) {
  var userName = req.body.username;
  var value = req.body.value;
  var sqlParams = [userName];
  var sql = 'SELECT * FROM property WHERE username=?';
  if(!value) {
    connection.query(sql,sqlParams,function(err,result){
      if (err) {
        res.json({
          status: 500,
          msg: err,
          data: ''
        });
        return;
      }
      if(result.length) {
        res.json({
          status: 200,
          result: result,
        })
      }
    })
  }
  if(value) {
    var sqlv = `UPDATE property SET money=?  WHERE username=?`;
    var sqlParamsv = [value, userName];
    connection.query(sqlv,sqlParamsv,function(err,result) {
      if (err) {
        res.json({
          status: 500,
          msg: err,
          data: ''
        });
        return;
      }else {
        res.json({
          status: 200,
          msg: '充值成功',
          data: ''
        });
      }
    })
  }
});
module.exports = router;
