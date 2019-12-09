var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
//var session = require('express-session');
//var cookieParser = require('cookie-parser');
//var cors = require('cors');
// app.set('view engine', 'ejs');
var mysql = require('mysql');
var crypt = require('./crypt1');
//var connection = require('./config')
// var mongo = require('mongodb').MongoClient;
// var url = "mongodb://52.53.224.192:27017/grubhub";
// var mongoose = require('mongoose');
var mongoose = require('./connection');
// mongoose.Promise = global.Promise;

// mongoose.connect('mongodb://admin:admin@52.53.224.192:27017/grubhub', function(err, db) { 
//     if (err) throw err;
//     console.log("Database created!");
// });

// mongo.connect(url, function(err, db) {
//     if (err) throw err;
//     console.log("Database created!");
//     db.close();
//   });



exports.buyerSignup = (req,res)=>{

    console.log("Inside signup post");
    

    var buyer={
        "fName":req.body.fName,
        "lName":req.body.lName,
        "email":req.body.email,
        "password":req.body.password,
        "phone":req.body.phone,
      }
    console.log(buyer);

    var sql1 = "SELECT * FROM buyer WHERE email = "+mysql.escape(buyer.email)+";"

    connection.query(sql1, function(err, results, fields){
        if(results.length != 0){
            res.status(202,{
                'Content-Type' : 'application/json'
                });
                console.log("email exists");
                res.send("Email exists");
        }
    else{
        console.log("inside else")
        crypt.createHash(buyer.password, function (res1) {
            buyer.password = res1;
            console.log("res",res1)
            var sql = "INSERT INTO buyer SET "+mysql.escape(buyer) ;
    
    connection.query(sql, function(err,results, fields){
        if(err){
            res.writeHead(200,{
            'Content-Type' : 'application/json'
            });
            console.log(err);
            res.end("error");
        }

        else {
            res.writeHead(201,{
                'Content-Type' : 'application/json'
                });
                res.end("Success");
                
        }
    })
}
    
)}
})}


exports.ownerSignup = (req, res) => {
    console.log("Inside signup post");


    var owner={
        "name":req.body.name,
        "restaurantName":req.body.restName,
        "email":req.body.email,
        "password":req.body.password,
        "zipCode":req.body.zCode,
      }

    var sql1 = "SELECT * FROM grubhub.owner WHERE email = "+mysql.escape(owner.email)+";"
    console.log(sql1)
    connection.query(sql1, function(err, results, fields){
        if(results.length != 0){
            res.status(202,{
                'Content-Type' : 'application/json'
                });
                console.log("email exists");
                res.send("Email exists");
        }
    else{
      crypt.createHash(owner.password, function (res1) {
        owner.password = res1;
        var sql = "INSERT INTO grubhub.owner SET "+mysql.escape(owner) ;
        console.log(sql)
        connection.query(sql, function(err,results, fields){
            if(err){
                res.writeHead(200,{
                'Content-Type' : 'application/json'
                });
                console.log(err);
                res.end("error");
            }
    
            else {
                console.log("entered into table")
                res.writeHead(201,{
                    'Content-Type' : 'application/json'
                    });
                    res.end("Success");

            }
        })
    }
    )}
})}
    
    
    
