var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
//var session = require('express-session');
//var cookieParser = require('cookie-parser');
//var cors = require('cors');
// app.set('view engine', 'ejs');
// var mysql = require('mysql');
// var connection = require('./config')
var {Owner} = require('../Models/owner')
var kafka = require('../kafka/client');



exports.editOwnerPhone = (req, res) => {

    var phone = req.body.phone;
    var email = req.body.email
    kafka.make_request('editOwner_phone',req.body, function(err,results){
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

    //     Owner.updateOne({email : email},
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

// exports.editOwnerPhone = (req, res) => {

//     var phone = req.body.phone;
//     var email = req.body.email

//     var sql = "UPDATE owner SET phone = "+mysql.escape(phone)+" WHERE email = "+mysql.escape(email);

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

exports.editOwnerName = (req, res) => {

    var name = req.body.name;
    var email = req.body.email
    console.log("Inside edit name")

    kafka.make_request('editOwner_name',req.body, function(err,results){
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


    // Owner.updateOne({email : email},
    //     {$set: {name : name
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


//   exports.editOwnerName = (req, res) => {

//     var name = req.body.name;
   
//     var email = req.body.email
//     // var fName = "R";
//     // var lName = "V";
//     //var password = req.body.currentPassword;
//     //var id = "2";

//     var sql = "UPDATE owner SET name = "+mysql.escape(name)+" WHERE email = "+mysql.escape(email);

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


  exports.editRestName = (req, res) => {

    var rName = req.body.rest;
   
    var email = req.body.email
    // var fName = "R";
    // var lName = "V";
    //var password = req.body.currentPassword;
    //var id = "2";

    //var sql = "UPDATE owner SET restaurantName = "+mysql.escape(rName)+" WHERE email = "+mysql.escape(email);
    kafka.make_request('edit_restName',req.body, function(err,results){
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

      
    // Owner.updateOne({email : email},
    //     {$set: {restaurantName : rName
    //             }}, function(err,results, fields){
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



  exports.editOwnerEmail = (req, res) => {

    var email1 = req.body.email1;
    // var fName = "R";
    // var lName = "V";
    //var password = req.body.currentPassword;
    //var id = "2";
    var email2 = req.body.email2

    //var sql = "UPDATE owner SET email = "+mysql.escape(email1)+" WHERE email = "+mysql.escape(email2);


    kafka.make_request('editOwner_email',req.body, function(err,results){
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



    // Owner.updateOne({email : email1},
    //     {$set: {email : email2
    //             }}, function(err,results, fields){
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



  exports.editCuisine = (req, res) => {

    var cuisine = req.body.cuisine;
    // var fName = "R";
    // var lName = "V";
    //var password = req.body.currentPassword;
    //var id = "2";
    var email = req.body.email

    var sql = "UPDATE owner SET cuisine = "+mysql.escape(cuisine)+" WHERE email = "+mysql.escape(email);

    connection.query(sql, function(err,results, fields){
        if(err){
            res.writeHead(200,{
            'Content-Type' : 'application/json'
            });
            console.log(err);
            res.end("error");
        }
        else{
            res.writeHead(201,{
                'Content-Type' : 'application/json'
                });
            res.end("Success");
        }
    });

  }


  exports.editZip = (req, res) => {

    var zip = req.body.zip;
    // var fName = "R";
    // var lName = "V";
    //var password = req.body.currentPassword;
    //var id = "2";
    var email = req.body.email

    //var sql = "UPDATE owner SET zipCode = "+mysql.escape(zip)+" WHERE email = "+mysql.escape(email);


    kafka.make_request('editOwner_zip',req.body, function(err,results){
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


    // Owner.updateOne({email : email},
    //     {$set: {zipCode : zip
    //             }}, function(err,results, fields){
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