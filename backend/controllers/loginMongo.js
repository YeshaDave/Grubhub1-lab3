var express = require('express');
var app = express();
var crypt = require('./crypt1');
var kafka = require('../kafka/client');
var mongoose = require('./connection');
var {Buyer} = require('../Models/buyer');
var {Owner} = require('../Models/owner');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var passportauth = passport.authenticate('jwt', { session: false });
app.use(passport.initialize());
// Bring in defined Passport Strategy
require('../config/passport')(passport);
var config = require('../config/settings');


exports.buyerlogin = (req, res) => {

    console.log("Inside buyer login post");

    var buyer = { 
    "email" : req.body.email,
    "password" : req.body.password
    }
    //console.log(email);
    //console.log(password);

    kafka.make_request('buyer_login', req.body, function (err, results) {
        if (err) {
            console.log("Inside err");
            res.json({
                status:201,
                msg:"System Error, Try Again."
            })
        }
        else if(results != null){
                    console.log("Results : ", results)
                    console.log("connection established");
                    var token = jwt.sign(buyer, config.secret, {
                        expiresIn: 60*60*1000 
                    });
                    console.log("TOKEN : ",token)
                    req.session.user = buyer.email;
                    console.log(req.session.user);
                            
                    res.json({
                        status: 200,
                        data: results,
                        token: 'JWT ' + token,
                        message: 'user fetched logged'
                    })
                    
            }
        else{
            console.log("no data");
            res.status(200).json({
                status: 201,
                data: "Email does not match",
                message: 'Email does not match.'
            });
             
         }
        
        });

    // kafka.make_request('buyer_login',req.body, function(err,results){
    //     console.log('in result');
    //     console.log(results);
    //     if (err){
    //         console.log("Inside err");
    //         res.json({
    //             status:"error",
    //             msg:"System Error, Try Again."
    //         })
    //     }else{
    //         console.log("Inside else");
    //             res.json({
    //                 updatedList:results
    //             });
      
    //             res.end();
    //         }    
    //   });


    // Buyer.findOne({email : email}, function(err, result){
    //     if(err){
    //         console.log("Error", +err)
    //         res.writeHead(201,{
    //           'Content-Type' : 'application/json'
    //           });
    //           res.end("error");
    //       }
    //       else if(result.length > 0 ){
    //         crypt.compareHash(password, results[0].password, function (err, isMatch) {
    //             if (isMatch && !err) {
    //                 b.email = results[0].email;
    //                 b.fName = results[0].fName;
    //                 b.lName = results[0].lName;
    //                 b.phone = results[0].phone;
    //                 console.log("logged in")
    //                 res.status(201, {
    //                     'Content-Type': 'application/json'
    //                 });
    //                 res.send(b);
    //             } else {
    //                 console.log("match not found")
    //                 // callback(null, "Email or Password does not match!");
    //                 res.writeHead(202, {
    //                     'Content-Type': 'application/json'
    //                 });
    //                 res.end("Credentials don't match");
    //             }
    //         }, function (err) {
    //             if (err) {
    //                 console.log(err)
    //             }
    //         }
    //     )} 
    //     else{
    //         console.log("user does not exist");
    //             res.writeHead(205, {
    //                 'Content-Type': 'application/json'
    //             });
    //             res.end("User does not exist");
    //     }
    // })
}




exports.ownerlogin = (req, res) => {

    console.log("Inside owner login post");

    var owner = {
    email : req.body.email,
    password : req.body.password
    }
    //console.log(email);
    //console.log(password);


    // kafka.make_request('owner_login',req.body, function(err,results){
    //     console.log('in result');
    //     console.log(results);
    //     if (err){
    //         console.log("Inside err");
    //         res.json({
    //             status:"error",
    //             msg:"System Error, Try Again."
    //         })
    //     }else{
    //         console.log("Inside else");
    //             res.json({
    //                 updatedList:results
    //             });
      
    //             res.end();
    //         }    
    //   });

      kafka.make_request('owner_login', req.body, function (err, results) {
        if (err) {
            console.log("Inside err");
            res.json({
                status:201,
                msg:"System Error, Try Again."
            })
        }
        else if(results != null){
                    console.log("Results : ", results)
                    console.log("connection established");
                    var token = jwt.sign(owner, config.secret, {
                        expiresIn: 60*60*1000 
                    });
                    console.log("TOKEN : ",token)
                    req.session.user = owner.email;
                    console.log(req.session.user);
                            
                    res.json({
                        status: 200,
                        data: results,
                        token: 'JWT ' + token,
                        message: 'logged in'
                    })
                    
            }
        else{
            console.log("no data");
            res.status(200).json({
                status: 201,
                data: "Email does not match",
                message: 'Email does not match.'
            });
             
         }
        
        });



    // Owner.findOne({email : email}, function(err, result){
    //     if(err){
    //         console.log("Error", +err)
    //         res.writeHead(201,{
    //           'Content-Type' : 'application/json'
    //           });
    //           res.end("error");
    //       }
    //       else if(result.length > 0 ){
    //         crypt.compareHash(password, results[0].password, function (err, isMatch) {
    //             if (isMatch && !err) {
    //                 b.email = results[0].email;
    //                 b.name = results[0].name;
    //                 b.restName = results[0].restaurantName;
    //                 b.phone = results[0].phone;
    //                 b.cuisine = results[0].cuisine
    //                 console.log("logged in")
    //                 res.status(201, {
    //                     'Content-Type': 'application/json'
    //                 });
    //                 res.send(b);
    //             } else {
    //                 console.log("match not found")
    //                 // callback(null, "Email or Password does not match!");
    //                 res.writeHead(202, {
    //                     'Content-Type': 'application/json'
    //                 });
    //                 res.end("Credentials don't match");
    //             }
    //         }, function (err) {
    //             if (err) {
    //                 console.log(err)
    //             }
    //         }
    //     )} 
    //     else{
    //         console.log("user does not exist");
    //             res.writeHead(205, {
    //                 'Content-Type': 'application/json'
    //             });
    //             res.end("User does not exist");
    //     }
    // })
}