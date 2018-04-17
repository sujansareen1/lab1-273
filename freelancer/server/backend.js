var mysql = require('mysql');
var express = require('express');
var router = express.Router();


var connection = mysql.createConnection({
    user: 'root',
    password: 'Software&1',
    database: 'web',
    host: 'localhost',

});

connection.connect(function(e) {
    if (e) throw e;
    console.log("Connection is working");


});

//router.get('/firstTime', function(req, res){
    //res.send('GET route on backend.');

//});

router.post('/firstTime', function(req, res) {
    //res.send('POST route on backend.');
//var name = req.body.username;
  //  connection.query('SELECT * FROM user_profile WHERE username = ?',[req.body.username], function (error, results, fields) {
    //if (error) {
      //  res.json({
        //    status:false,
          //  msg:'there are some error with query'
        //})
   // }
    //else {
      //  if(name===results[0].username){
        //    res.send("username already present");
        //}

       // else {
            var users = {

                "email": req.body.email,
                "username": req.body.username,
                "pass": req.body.pass,

            }

            //res.send(users);

            connection.query('INSERT INTO user_profile SET ?', users, function (e, results, fields) {
                if (e) {
                    res.json({
                        status: false,
                        msg: 'Unsuccessful',
                        data: results
                    })
                } else {
                    res.json({
                        status: true,
                        msg: 'Welcome',
                        data: results
                    })
                }
            });
        //}
    //}
//});

});


router.post('/logIn', function(req, res){
//console.log("recieved request");
var userName=req.body.username;
var password=req.body.pass;
connection.query('SELECT * FROM users_data WHERE userName = ?',[userName], function (e, results, fields) {
    if (e) {
        res.json({
            status:false,
            msg:'Not successful'
        })
    }else{
        if(results.length >0){
            if(password==results[0].pass){
                res.status(201).json({
                    msg:'Welcome'
                })
            }else{
                res.json({
                    status:false,
                    msg:"Invalid credentials"
                });
            }

        }
        else{
            res.json({
                status:false,
                msg:"Profile does not exist"
            });
        }
    }
});
});
//export this router to use in our index.js
module.exports = router;