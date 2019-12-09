var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
//var session = require('express-session');
//var cookieParser = require('cookie-parser');
//var cors = require('cors');
// app.set('view engine', 'ejs');
var mysql = require('mysql');
var crypt = require('./crypt1.js');
var connection = require('./config')




exports.buyerlogin = (req, res) => {

    console.log("Inside login post");

    var email = req.body.email;
    var password = req.body.password;
    console.log(email);
    console.log(password);
    // var email = "d@a.com";
    // var password = "dkd";
    //var table = req.body.table;
    
    var sql = "SELECT * FROM buyer WHERE email = " + mysql.escape(email);
    var b = {}
    connection.query(sql, function (err, results) {
        if (err) {
            console.log("user does not exist")
            callback(err, " User does not exist ... ")
        } else {
            if (results.length > 0) {
                console.log("HERE")
                //var v2 = crypt.createHash(password)
                console.log(results[0].password)
                crypt.compareHash(password, results[0].password, function (err, isMatch) {

                    //console.log(' The entered password and db : ', msg.password, ' ', results[0].password)
                    if (isMatch && !err) {
                        b.email = results[0].email;
                        b.fName = results[0].fName;
                        b.lName = results[0].lName;
                        b.phone = results[0].phone;
                        console.log("logged in")
                        res.status(201, {
                            'Content-Type': 'application/json'
                        });
                        res.send(b);
                    } else {
                        console.log("match not found")
                        // callback(null, "Email or Password does not match!");
                        res.writeHead(202, {
                            'Content-Type': 'application/json'
                        });
                        res.end("Credentials don't match");
                    }
                }, function (err) {
                    if (err) {
                        console.log(err)
                        //callback(null, []);
                    }
                })
            }
            else {
                console.log("user does not exist");
                res.writeHead(205, {
                    'Content-Type': 'application/json'
                });
                res.end("User does not exist");
            }
        }
    })
}






exports.ownerlogin = (req, res) => {

    console.log("Inside owner login post");

    var email = req.body.email;
    var password = req.body.password;
    console.log(email);
    console.log(password);
    // var email = "d@a.com";
    // var password = "dkd";
    //var table = req.body.table;
    
    var sql = "SELECT * FROM grubhub.owner WHERE email = " + mysql.escape(email);
    var b = {}
    connection.query(sql, function (err, results) {
        console.log("RESULTS",results)
        console.log(results.length)
        if (err) {
            console.log("hello user does not exist")
            callback(err, " User does not exist ... ")
        } else {
            if (results.length > 0) {
                console.log("HERE")
                //var v2 = crypt.createHash(password)
                console.log(results[0].password)
                crypt.compareHash(password, results[0].password, function (err, isMatch) {

                    //console.log(' The entered password and db : ', msg.password, ' ', results[0].password)
                    if (isMatch && !err) {
                        b.email = results[0].email;
                        b.name = results[0].name;
                        b.restName = results[0].restaurantName;
                        b.phone = results[0].phone;
                        b.cuisine = results[0].cuisine
                        console.log("logged in")
                        res.status(201, {
                            'Content-Type': 'application/json'
                        });
                        res.send(b);
                    } else {
                        console.log("match not found")
                        // callback(null, "Email or Password does not match!");
                        res.writeHead(202, {
                            'Content-Type': 'application/json'
                        });
                        res.end("Credentials don't match");
                    }
                }, function (err) {
                    if (err) {
                        console.log(err)
                        //callback(null, []);
                    }
                })
            }
            else {
                console.log("hello user does not exist");
                res.writeHead(205, {
                    'Content-Type': 'application/json'
                });
                res.end("User does not exist");
            }
        }
    })
}