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
//报修
router.post('/repairsApply',function(req,res,next) {
  var userName = req.body.username;
  var repair = req.body.place;
  var sql = `INSERT INTO repair(username,repair) VALUES(?,?)`;
  var sqlParams = [userName, repair];
  connection.query(sql,sqlParams,function(err,result) {
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
        msg: '已成功通知管理员',
        data: ''
      });
    }
  })
});
//投诉
router.post('/propertyComplain',function(req,res,next) {
  var userName = req.body.username;
  var advice = req.body.advice;
  var sql = `INSERT INTO advice(advice,username) VALUES(?,?)`;
  var sqlParams = [advice, userName];
  connection.query(sql,sqlParams,function(err,result) {
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
        msg: '已成功通知管理员',
        data: ''
      });
    }
  })
});
//家政
router.post('/houseManager',function(req,res,next) {
  var userName = req.body.username;
  var value = req.body.value;
  var time = req.body.time;
  var sql = `INSERT INTO homemaking(username,value,time) VALUES(?,?,?)`;
  var sqlParams = [userName, value, time];
  connection.query(sql,sqlParams,function(err,result) {
    if (err) {
      res.json({
        status: 500,
        msg: err,
        data: ''
      });
      return;
    }else if(result){
      res.json({
        status: 200,
        msg: '已成功通知管理员',
        data: ''
      });
    }
  })
});
//公告
router.get('/Notice',function(req,res,next){
  var sql = 'SELECT * FROM notice';
  connection.query(sql,function(err,result) {
    if (err) {
      res.json({
        status: 500,
        msg: err,
        data: ''
      });
      return;
    }else if(result){
      res.json({
        status: 200,
        msg: 'success',
        data: result
      });
    }
  })
});
//公告详情
router.post('/noticeDetail',function(req,res,next) {
  var title = req.body.title;
  var sql = 'SELECT * FROM notice WHERE title=?';
  var sqlParams = [title];
  connection.query(sql,sqlParams,function(err,result) {
    if (err) {
      res.json({
        status: 500,
        msg: err,
        data: ''
      });
      return;
    }else if(result){
      res.json({
        status: 200,
        msg: '',
        data: result
      });
    }
  })
});
//活动
router.get('/Activity',function(req,res,next){
  var sql = 'SELECT * FROM activity';
  connection.query(sql,function(err,result) {
    if (err) {
      res.json({
        status: 500,
        msg: err,
        data: ''
      });
      return;
    }else if(result){
      res.json({
        status: 200,
        msg: 'success',
        data: result
      });
    }
  })
});
//活动详情
router.post('/activityDetail',function(req,res,next) {
  var title = req.body.title;
  var sql = 'SELECT * FROM activity WHERE title=?';
  var sqlParams = [title];
  connection.query(sql,sqlParams,function(err,result) {
    if (err) {
      res.json({
        status: 500,
        msg: err,
        data: ''
      });
      return;
    }else if(result){
      res.json({
        status: 200,
        msg: '',
        data: result
      });
    }
  })
});
//报名
router.post('/sendName',function(req,res,next) {
  let title = req.body.title;
  let name = req.body.username;
  var people = req.body.people;
  var params = [];
  params = people.split(",");
  params.push(name);
  let param = params.toString();
  var sql = `UPDATE activity SET people=?  WHERE title=?`;
  var sqlParams = [param,title];
  connection.query(sql,sqlParams,function(err,result) {
    if (err) {
      res.json({
        status: 500,
        msg: err,
        data: ''
      });
      return;
    }else if(result){
      res.json({
        status: 200,
        msg: '报名成功',
        data: params
      });
    }
  })
});
//查看银行卡
router.post('/bindCard',function(req,res,next) {
  var username = req.body.username;
  var sql = 'SELECT * FROM card WHERE username=?';
  var sqlParams = [username];
  connection.query(sql,sqlParams,function(err,result) {
    if (err) {
      res.json({
        status: 500,
        msg: err,
        data: ''
      });
      return;
    }else if(result){
      res.json({
        status: 200,
        msg: '',
        data: result
      });
    }
  })
});
//增加银行卡
router.post('/addCard',function(req,res,next) {
  let name = req.body.username;
  let card1 = req.body.card1;
  let card2 = req.body.card2;
  let card3 = req.body.card3;
  if(card1&&!card2&&!card3) {
    var sql = `UPDATE card SET card1=?  WHERE username=?`;
    var sqlParams = [card1,name];
  }else if(card1&&card2&&!card3) {
    var sql = `UPDATE card SET card1=?,card2=?  WHERE username=?`;
    var sqlParams = [card1,card2,name];
  }else if(card1&&card2&&card3) {
    var sql = `UPDATE card SET card1=?,card2=?,card3=?  WHERE username=?`;
    var sqlParams = [card1,card2,card3,name];
  }else if(card1&&!card2&&card3) {
    var sql = `UPDATE card SET card1=?,card3=?  WHERE username=?`;
    var sqlParams = [card1,card3,name];
  }
  connection.query(sql,sqlParams,function(err,result) {
    if (err) {
      res.json({
        status: 500,
        msg: err,
        data: ''
      });
      return;
    }else if(result){
      res.json({
        status: 200,
        msg: '添加成功',
        data: ''
      });
    }
  })
});
//删除银行卡
router.post('/deleteCard',function(req,res,next) {
  let name = req.body.username;
  let index = req.body.index;
  if(index == '1') {
    var sql = `UPDATE card SET card1=?  WHERE username=?`;
    var sqlParams = [null,name];
  }else if(index == '2') {
    var sql = `UPDATE card SET card2=?  WHERE username=?`;
    var sqlParams = [null,name];
  }else if(index == '3') {
    var sql = `UPDATE card SET card3=?  WHERE username=?`;
    var sqlParams = [null,name];
  }
  connection.query(sql,sqlParams,function(err,result) {
    if (err) {
      res.json({
        status: 500,
        msg: err,
        data: ''
      });
      return;
    }else if(result){
      res.json({
        status: 200,
        msg: '删除成功',
        data: ''
      });
    }
  })
});
//增加银行卡
router.post('/addCard',function(req,res,next) {
  let name = req.body.username;
  let card1 = req.body.card1;
  let card2 = req.body.card2;
  let card3 = req.body.card3;
  if(card1&&!card2&&!card3) {
    var sql = `UPDATE card SET card1=?  WHERE username=?`;
    var sqlParams = [card1,name];
  }else if(card1&&card2&&!card3) {
    var sql = `UPDATE card SET card1=?,card2=?  WHERE username=?`;
    var sqlParams = [card1,card2,name];
  }else if(card1&&card2&&card3) {
    var sql = `UPDATE card SET card1=?,card2=?,card3=?  WHERE username=?`;
    var sqlParams = [card1,card2,card3,name];
  }else if(card1&&!card2&&card3) {
    var sql = `UPDATE card SET card1=?,card3=?  WHERE username=?`;
    var sqlParams = [card1,card3,name];
  }
  connection.query(sql,sqlParams,function(err,result) {
    if (err) {
      res.json({
        status: 500,
        msg: err,
        data: ''
      });
      return;
    }else if(result){
      res.json({
        status: 200,
        msg: '添加成功',
        data: ''
      });
    }
  })
});
//查看支付密码
router.post('/paypwdDetail',function(req,res,next) {
  let name = req.body.username;
  var sql = 'SELECT * FROM card WHERE username=?';
  var sqlParams = [name];
  connection.query(sql,sqlParams,function(err,result) {
    if (err) {
      res.json({
        status: 500,
        msg: err,
        data: ''
      });
      return;
    }else if(result){
      res.json({
        status: 200,
        msg: '',
        data: result
      });
    }
  })
});
//设置支付密码
router.post('/paypwd',function(req,res,next) {
  let name = req.body.username;
  let pwd = req.body.pwd;
  var sql = `UPDATE card SET pwd=?  WHERE username=?`;
  var sqlParams = [pwd,name];
  connection.query(sql,sqlParams,function(err,result) {
    if (err) {
      res.json({
        status: 500,
        msg: err,
        data: ''
      });
      return;
    }else if(result){
      res.json({
        status: 200,
        msg: '设置支付密码成功',
        data: ''
      });
    }
  })
});
//查看报名活动
router.post('/seeActivity',function(req,res,next) {
  let name = req.body.username;
  var sql = 'SELECT * FROM activity WHERE people REGEXP ?';
  var sqlParams = [name];
  connection.query(sql,sqlParams,function(err,result) {
    if (err) {
      res.json({
        status: 500,
        msg: err,
        data: ''
      });
      return;
    }else if(result){
      res.json({
        status: 200,
        msg: '',
        data: result
      });
    }
  })
});
module.exports = router;
