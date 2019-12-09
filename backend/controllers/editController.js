var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
//var session = require('express-session');
//var cookieParser = require('cookie-parser');
//var cors = require('cors');
// app.set('view engine', 'ejs');
//var mysql = require('mysql');
//var connection = require('./config')
var kafka = require('../kafka/client');
var {Buyer} = require('../Models/buyer');

//var {Owner} = require('../Models/owner')

  exports.editBuyerPhone = (req, res) => {

    var phone = req.body.phone;
    var email = req.body.email

    //var sql = "UPDATE buyer SET phone = "+mysql.escape(phone)+" WHERE email = "+mysql.escape(email);

    //connection.query(sql, function(err,results, fields){
        kafka.make_request('editBuyer_phone',req.body, function(err,results){
            console.log('in result');
            console.log(results);
            if (err){
                console.log("Inside err");
                res.json({
                    status:"error",
                    msg:"System Error, Try Again."
                })
            }else{
                console.log("Inside else");
                    res.json({
                        updatedList:results
                    });
          
                    res.end();
                }
            
          });


    //     Buyer.updateOne({email : email},
    //         {$set: {phone : phone}},
    //         function(err, result){
    //     if(err){
    //         res.writeHead(200,{
    //         'Content-Type' : 'application/json'
    //         });
    //         console.log(err);
    //         res.end("error");
    //     }
    //     else{
    //         res.writeHead(201,{
    //             'Content-Type' : 'application/json'
    //             });
    //         res.end("Success");
    //     }
    // }
    // ); 
  }

//   exports.editBuyerPhone = (req, res) => {

//     var phone = req.body.phone;
//     var email = req.body.email

//     var sql = "UPDATE buyer SET phone = "+mysql.escape(phone)+" WHERE email = "+mysql.escape(email);

//     connection.query(sql, function(err,results, fields){
//         if(err){
//             res.writeHead(200,{
//             'Content-Type' : 'application/json'
//             });
//             console.log(err);
//             res.end("error");
//         }
//         else{
//             res.writeHead(201,{
//                 'Content-Type' : 'application/json'
//                 });
//             res.end("Success");
//         }
//     });

//   }




exports.editBuyerName = (req, res) => {

    var fName = req.body.firstname;
    var lName = req.body.lastname;
    var email = req.body.email
    console.log("Inside edit name")

    kafka.make_request('editBuyer_name',req.body, function(err,results){
        console.log('in result');
        console.log(results);
        if (err){
            console.log("Inside err");
            res.json({
                status:201,
                msg:"System Error, Try Again."
            })
        }else{
            console.log("Inside else");
                res.json({
                    status:200,
                    updatedList:results
                });
      
                res.end();
            }
        
      });


    // Buyer.updateOne({email : email},
    //     {$set: {fName : fName,
    //             lName : lName
    //             }}, function(err,results, fields){
    //     if(err){
    //         res.writeHead(200,{
    //         'Content-Type' : 'application/json'
    //         });
    //         console.log(err);
    //         res.end("error");
    //     }
    //     else{
    //         console.log("success!!!")
    //         res.writeHead(201,{
    //             'Content-Type' : 'application/json'
    //             });
    //         res.end("Success");
    //     }
    // });

  }


//   exports.editBuyerName = (req, res) => {

//     var fName = req.body.firstname;
//     var lName = req.body.lastname;
//     var email = req.body.email
//     // var fName = "R";
//     // var lName = "V";
//     //var password = req.body.currentPassword;
//     //var id = "2";
//     console.log("Inside edit name")

//     var sql = "UPDATE buyer SET fName = "+mysql.escape(fName)+" , lName = "+mysql.escape(lName)+" WHERE email = "+mysql.escape(email);
//     console.log(sql)
//     connection.query(sql, function(err,results, fields){
//         if(err){
//             res.writeHead(200,{
//             'Content-Type' : 'application/json'
//             });
//             console.log(err);
//             res.end("error");
//         }
//         else{
//             console.log("success!!!")
//             res.writeHead(201,{
//                 'Content-Type' : 'application/json'
//                 });
//             res.end("Success");
//         }
//     });

//   }

exports.editBuyerEmail = (req, res) => {

    var email1 = req.body.email1;
    var email2 = req.body.email2

    //var sql = "UPDATE buyer SET email = "+mysql.escape(email1)+" WHERE email = "+mysql.escape(email2);

    kafka.make_request('editBuyer_email',req.body, function(err,results){
        console.log('in result');
        console.log(results);
        if (err){
            console.log("Inside err");
            res.json({
                status:"error",
                msg:"System Error, Try Again."
            })
        }else{
            console.log("Inside else");
                res.json({
                    updatedList:results
                });
      
                res.end();
            }
        
      });

    // Buyer.updateOne({email : email1},
    //     {$set: {email : email2}},
    //     function(err,results, fields){
    //     if(err){
    //         res.writeHead(200,{
    //         'Content-Type' : 'application/json'
    //         });
    //         console.log(err);
    //         res.end("error");
    //     }
    //     else{
    //         res.writeHead(201,{
    //             'Content-Type' : 'application/json'
    //             });
    //         res.end("Success");
    //     }
    // });
  }

//   exports.editBuyerEmail = (req, res) => {

//     var email1 = req.body.email1;
//     // var fName = "R";
//     // var lName = "V";
//     //var password = req.body.currentPassword;
//     //var id = "2";
//     var email2 = req.body.email2

//     var sql = "UPDATE buyer SET email = "+mysql.escape(email1)+" WHERE email = "+mysql.escape(email2);

//     connection.query(sql, function(err,results, fields){
//         if(err){
//             res.writeHead(200,{
//             'Content-Type' : 'application/json'
//             });
//             console.log(err);
//             res.end("error");
//         }
//         else{
//             res.writeHead(201,{
//                 'Content-Type' : 'application/json'
//                 });
//             res.end("Success");
//         }
//     });

//   }
