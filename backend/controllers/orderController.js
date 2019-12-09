var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
//var session = require('express-session');
//var cookieParser = require('cookie-parser');
//var cors = require('cors');
// app.set('view engine', 'ejs');
var mysql = require('mysql');
//var crypt = require('./crypt.js');
var connection = require('./config')
var kafka = require('../kafka/client');


exports.getOldOrders1 = (req,res) => {
    console.log("inside past orders");

    var rName = "ABC";
    var status = "delivered";
    var status1 = "cancelled";
    var sql = "SELECT * FROM grubhub.orders WHERE rName = "+mysql.escape(rName)+" AND status = "+mysql.escape(status)+" OR status = "+mysql.escape(status1)+";"
    console.log("backend")
    console.log(sql);


    connection.query(sql, function(err, results, fields){
    
        console.log("inside query")
        console.log(results)
        //var items = results.items.split(",");
        //console.log(results.items)
          if(results.length != 0){
              console.log("inside if success")
              
              res.status(200, {'Content-Type' : 'application/json'
          });
          res.send(results);
          }
          else{
              console.log("error")
              res.status(204,{'Content-Type' : 'application/json'});
              res.send("Error!!");
          }
    })
}

exports.getOldOrders = (req, res) => {
    console.log("inside old orders");

    // var rName = "ABC";
    // var status = "delivered";
    // var status1 = "cancelled";

    // var sql = "SELECT * FROM grubhub.orders WHERE rName = "+mysql.escape(rName)+" AND status = "+mysql.escape(status)+" OR status = "+mysql.escape(status1)+";"
    // console.log(sql)
    console.log(req.body.email)

    var orders = [
        {   orderID: '1b7cb500-0076-11ea-9837-4b955a478d4b',
            item: 'pizza',
            price: '5',
            bName: 'yesha',
            status: 'new',
            bEmail: 'y@a.com',
            rName: 'Italian Place',
            __v: 0 },
        {   orderID: '1b7cb500-0076-11ea-9837-4b955a478d4b',
            item: 'pizza',
            price: '10',
            bName: 'yesha',
            status: 'new',
            bEmail: 'y@a.com',
            rName: 'Italian Place',
            __v: 0 },
        {   orderID: '1b7cb500-0076-11ea-9837-4b955a478d4b',
            item: 'pizza',
            price: '5',
            bName: 'yesha',
            status: 'new',
            bEmail: 'y@a.com',
            rName: 'Italian Place',
            __v: 0 }
        
    ]

    kafka.make_request('get_old_orders',req.body, function(err,results){
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

    // connection.query(sql, function (err, results, fields) {
    //     //console.log(results)
    //     // console.log(results[1].section)
    //     // console.log("length",results.length)
    //     if (results.length != 0) {
    //         var obj = {};
    //         for (let l = 0; l < results.length; l++) {
    //             console.log("index",l)
    //             var key = results[l].orderID;
    //             var itemArr = [];
    //             //console.log("key",key)
    //             //console.log("results.section",results[l].section)
                
    //             if (Object.keys(obj).includes(key)) {
    //                 //itemArr.push(obj)
    //                 itemArr = obj[key]
    //                 itemArr.push(results[l])
    //                // console.log("item array",itemArr)
    //             }else{
    //                 console.log("in else")
    //                 obj[key] = [results[l]]
    //                 //console.log(Object.keys(obj))
    //             }
    //         }
    //         console.log("cart sent")
    //         res.status(200, {
    //             'Content-Type': 'application/json'
    //         });
    //         res.send(obj);
    //     }
    //     else {
    //         console.log("error")
    //         res.status(204, { 'Content-Type': 'application/json' });
    //         res.send("Error!!");
    //     }
    // })
}





exports.changeStatus = (req, res) => {

    var orderID = req.body.key;
    var status = req.body.status

    var sql = "UPDATE grubhub.orders SET status = "+mysql.escape(status)+" WHERE id = "+mysql.escape(orderID)+";"
    console.log(orderID)
    console.log(status)
    console.log(sql)
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


exports.getUpcomingOrders = (req,res) => {
    console.log("inside get upcoming orders");

    var rName = "ABC";
    var status = "delivered";
    var status1 = "cancelled";
    var sql = "SELECT * FROM grubhub.orders WHERE rName = "+mysql.escape(rName)+" AND status != "+mysql.escape(status)+" OR status = "+mysql.escape(status1)+";"
    console.log("backend")
    console.log(sql);


    connection.query(sql, function(err, results, fields){
    
        console.log("inside query")
        console.log(results)
        //var items = results.items.split(",");
        //console.log(results.items)
          if(results.length != 0){
              console.log("inside if success")
              
              res.status(200, {'Content-Type' : 'application/json'
          });
          res.send(results);
          }
          else{
              console.log("error")
              res.status(204,{'Content-Type' : 'application/json'});
              res.send("Error!!");
          }
    })
}




exports.getBuyerUpcomingOrders = (req, res) => {
    console.log("inside get CART");

    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")

    var rName = req.body.rName;

    //var sql = "SELECT * FROM grubhub.orders WHERE rName = " + mysql.escape(rName) + ";"
    //console.log(sql)

    var orders = [
        {   orderID: '1b7cb500-0076-11ea-9837-4b955a478d4b',
            item: 'pizza',
            price: '5',
            bName: 'yesha',
            status: 'new',
            bEmail: 'y@a.com',
            rName: 'Italian Place',
            __v: 0 },
        {   orderID: '1b7cb500-0076-11ea-9837-4b955a478d4b',
            item: 'pizza',
            price: '10',
            bName: 'yesha',
            status: 'new',
            bEmail: 'y@a.com',
            rName: 'Italian Place',
            __v: 0 },
        {   orderID: '1b7cb500-0076-11ea-9837-4b955a478d4b',
            item: 'pizza',
            price: '5',
            bName: 'yesha',
            status: 'new',
            bEmail: 'y@a.com',
            rName: 'Italian Place',
            __v: 0 }
        
    ]


    kafka.make_request('get_cart',req.body, function(err,results){
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

    }

exports.getCart1 = (req, res) => {
    console.log("inside get CART");

    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")

    var rName = req.body.rName;

    //var sql = "SELECT * FROM grubhub.orders WHERE rName = " + mysql.escape(rName) + ";"
    //console.log(sql)

    kafka.make_request('get_cart1',req.body, function(err,results){
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


    // connection.query(sql, function (err, results, fields) {
    //     //console.log(results)
    //     // console.log(results[1].section)
    //     // console.log("length",results.length)
    //     if (results.length != 0) {
    //         var obj = {};
    //         for (let l = 0; l < results.length; l++) {
    //             console.log("index",l)
    //             var key = results[l].orderID;
    //             var itemArr = [];
    //             //console.log("key",key)
    //             //console.log("results.section",results[l].section)
                
    //             if (Object.keys(obj).includes(key)) {
    //                 //itemArr.push(obj)
    //                 itemArr = obj[key]
    //                 itemArr.push(results[l])
    //                // console.log("item array",itemArr)
    //             }else{
    //                 console.log("in else")
    //                 obj[key] = [results[l]]
    //                 //console.log(Object.keys(obj))
    //             }
    //         }
    //         console.log("cart sent")
    //         res.status(200, {
    //             'Content-Type': 'application/json'
    //         });
    //         res.send(obj);
    //     }
    //     else {
    //         console.log("error")
    //         res.status(204, { 'Content-Type': 'application/json' });
    //         res.send("Error!!");
    //     }
    // })
}





exports.changeStatus = (req, res) => {

    var orderID = req.body.key;
    var status = req.body.status

    // var sql = "UPDATE grubhub.orders SET status = "+mysql.escape(status)+" WHERE id = "+mysql.escape(orderID)+";"
    // console.log(orderID)
    // console.log(status)
    // console.log(sql)


    kafka.make_request('update_status',req.body, function(err,results){
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

    // connection.query(sql, function(err,results, fields){
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


  exports.deleteOrder = (req, res) => {

    var orderID = req.body.orderID;
    var status = "cancelled"

    var sql = "UPDATE grubhub.orders SET status = "+mysql.escape(status)+" WHERE orderID = "+mysql.escape(orderID)+";"
    console.log(sql)
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