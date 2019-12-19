var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
//var session = require('express-session');
//var cookieParser = require('cookie-parser');
//var cors = require('cors');
// app.set('view engine', 'ejs');
var mysql = require('mysql');
var connection = require('./config');
var {Menu} = require('../Models/menu')
var {Owner} = require('../Models/owner')
var {Orders} = require('../Models/orders')
var kafka = require('../kafka/client');


//var aws = require('aws-sdk');
// var multer = require('multer'),
//     multerS3 = require('multer-s3');

//    
    
//   var menu = [
//     {"name" : "Fries", "price" : "3.5", "image" : "Author 1"},
//     {"name" : "Quesedilla", "price" : "4", "image" : "Author 2"},
//     {"name" : "Pizza", "price" : "10", "image" : "Author 3"}
// ]
exports.getMenu = (req, res) => {
    console.log("inside get menu");

    var rid = "1";

    var sql = "SELECT * FROM menu WHERE rid = " + mysql.escape(rid) + ";"
    console.log("backend")


    connection.query(sql, function (err, results, fields) {
        //console.log(results)
        // console.log(results[1].section)
        // console.log("length",results.length)
        if (results.length != 0) {
            var obj = {};
            for (let l = 0; l < results.length; l++) {
                console.log("index",l)
                var key = results[l].section;
                var itemArr = [];
                //console.log("key",key)
                //console.log("results.section",results[l].section)
                
                if (Object.keys(obj).includes(key)) {
                    //itemArr.push(obj)
                    itemArr = obj[key]
                    itemArr.push(results[l])
                   // console.log("item array",itemArr)
                }else{
                    console.log("in else")
                    obj[key] = [results[l]]
                    //console.log(Object.keys(obj))
                }
            }
            
            res.status(200, {
                'Content-Type': 'application/json'
            });
            res.send(obj);
        }
        else {
            res.status(204, { 'Content-Type': 'application/json' });
            res.send("Error!!");
        }
    })
}




exports.getSections = (req, res) => {
    console.log("inside get sections");

    var rName = req.body.rName;

    // var sql = "SELECT * FROM sections WHERE rName = " + mysql.escape(rName) + ";"
    // console.log("backend")

    kafka.make_request('get_sections',req.body, function(err,results){
        console.log("Results of restaurants: ",results);
        if (err){
            console.log("Inside err");
            res.json({
                status:"error",
                msg:"System Error, Try Again."
            })
        }else {
            console.log("Inside else");
                res.json({
                    updatedList:results
                });
      
                res.end();
            }
        
      });

    // connection.query(sql, function (err, results, fields) {
    //     if (results.length != 0) {
    //         res.status(200, {
    //             'Content-Type': 'application/json'
    //         });
    //         res.send(results);
    //     }
    //     else {
    //         res.status(204, { 'Content-Type': 'application/json' });
    //         res.send("Error!!");
    //     }
    // })
}



exports.getRestaurants = (req, res) => {
    console.log("inside get sections");

    

    var sql = "SELECT * FROM owner;"
    console.log("backend")


    connection.query(sql, function (err, results, fields) {
        if (results.length != 0) {
            res.status(200, {
                'Content-Type': 'application/json'
            });
            res.send(results);
        }
        else {
            res.status(204, { 'Content-Type': 'application/json' });
            res.send("Error!!");
        }
    })
}


exports.getRestaurants1 = (req, res) => {
    console.log("inside get restaurants");

    var item = req.body.item

    //var sql1 = "SELECT DISTINCT rName FROM grubhub.menu WHERE name = " +mysql.escape(item) +";"
    
    console.log("backend of get restaurants")

    //console.log(sql1)
    kafka.make_request('get_restaurants',req.body, function(err,results){
        console.log("Results of restaurants: ",results);
        if (err){
            console.log("Inside err");
            res.json({
                status:"error",
                msg:"System Error, Try Again."
            })
        }else {
            console.log("Inside else");
                res.json({
                    updatedList:results
                });
      
                res.end();
            }
        
      });

    // Menu.findOne({item : item},
    //     {rName : 1},
    //     function (err, results, fields) {
    //     if (results.length != 0) {
    //         console.log("results", results)
    //         // res.status(200, {
    //         //     'Content-Type': 'application/json'
    //         // });
    //         // res.send(results);
    //         var sql2 = "SELECT * FROM grubhub.owner WHERE restaurantName =" + mysql.escape(results[0].rName)
    //         console.log(sql2)
    //         Owner.findOne({restaurantName : results[0].rName}, function (err, results1, fields){
    //             if (results1.length != 0) {
    //                 console.log("details: ",results1)
    //                 res.status(200, {
    //                     'Content-Type': 'application/json'
    //                 });
    //                 res.send(results1);
    //             }
    //             else {
    //                 res.status(204, { 'Content-Type': 'application/json' });
    //                 res.send("Error!!");
    //             }
    //         })
    //     }
    //     else {
    //         console.log("error")
    //         res.status(205, { 'Content-Type': 'application/json' });
    //         res.send("Error!!");
    //     }
    // })
}





// exports.getRestaurants1 = (req, res) => {
//     console.log("inside get restaurants");

//     var item = req.body.item

//     var sql1 = "SELECT DISTINCT rName FROM grubhub.menu WHERE name = " +mysql.escape(item) +";"
    
//     console.log("backend")

//     console.log(sql1)

//     connection.query(sql1, function (err, results, fields) {
//         if (results.length != 0) {
//             console.log("results", results)
//             // res.status(200, {
//             //     'Content-Type': 'application/json'
//             // });
//             // res.send(results);
//             var sql2 = "SELECT * FROM grubhub.owner WHERE restaurantName =" + mysql.escape(results[0].rName)
//             console.log(sql2)
//             connection.query(sql2, function (err, results1, fields){
//                 if (results1.length != 0) {
//                     console.log("details: ",results1)
//                     res.status(200, {
//                         'Content-Type': 'application/json'
//                     });
//                     res.send(results1);
//                 }
//                 else {
//                     res.status(204, { 'Content-Type': 'application/json' });
//                     res.send("Error!!");
//                 }
//             })
//         }
//         else {
//             console.log("error")
//             res.status(205, { 'Content-Type': 'application/json' });
//             res.send("Error!!");
//         }
//     })
// }




exports.getMenu1 = (req, res) => {
    console.log("inside get menu");

    console.log(req.body)
    var rName = req.body.rName

    //var sql = "SELECT * FROM menu WHERE rName = " + mysql.escape(rName) + ";"
    console.log("backend of get menu")

    kafka.make_request('get_menu',req.body, function(err,results){
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


    // Menu.find({rName : rName}, function (err, results, fields) {
    //     //console.log(results)
    //     // console.log(results[1].section)
    //     // console.log("length",results.length)
    //     console.log(results)
    //     if (results != null) {
    //         console.log(results.length)
    //         var itemL = Object.values(results)
    //         console.log(itemL)
    //         var obj = {};
    //         console.log(typeof(itemL))
    //         console.log("length: ",itemL.length)
    //         for (let l = 0; l < itemL.length; l++) {
    //             console.log("index",l)
    //             console.log("item at position :",itemL)
    //             var key = itemL[l].section;
    //             console.log("key",key)
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
    //         console.log(obj)
    //         res.status(200, {
    //             'Content-Type': 'application/json'
    //         });
    //         res.send(obj);
    //     }
    //     else {
    //         res.status(204, { 'Content-Type': 'application/json' });
    //         res.send("Error!!");
    //     }
    // })
}


exports.getMenu = (req, res) => {
    console.log("inside get menu");

    var rid = "1";

    var sql = "SELECT * FROM menu WHERE rid = " + mysql.escape(rid) + ";"
    console.log("backend")


    connection.query(sql, function (err, results, fields) {
        //console.log(results)
        // console.log(results[1].section)
        // console.log("length",results.length)
        if (results.length != 0) {
            var obj = {};
            for (let l = 0; l < results.length; l++) {
                console.log("index",l)
                var key = results[l].section;
                var itemArr = [];
                //console.log("key",key)
                //console.log("results.section",results[l].section)
                
                if (Object.keys(obj).includes(key)) {
                    //itemArr.push(obj)
                    itemArr = obj[key]
                    itemArr.push(results[l])
                   // console.log("item array",itemArr)
                }else{
                    console.log("in else")
                    obj[key] = [results[l]]
                    //console.log(Object.keys(obj))
                }
            }
            
            res.status(200, {
                'Content-Type': 'application/json'
            });
            res.send(obj);
        }
        else {
            res.status(204, { 'Content-Type': 'application/json' });
            res.send("Error!!");
        }
    })
}


exports.postMenu = (req, res) => {
    console.log("inside post menu")

    var item = {
        "name": req.body.item,
        "desc": req.body.desc,
       // "image": req.body.image,
        "price": req.body.price,
        "section": req.body.section,
        "rName": req.body.rName
    }



    //var sql = "SELECT * FROM menu WHERE rName = " + mysql.escape(item.rName) + ";"

    kafka.make_request('post_Menu',req.body, function(err,results){
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




// exports.postMenu = (req, res) => {
//     console.log("inside post menu")

//     var item = {
//         "name": req.body.item,
//         "desc": req.body.desc,
//        // "image": req.body.image,
//         "price": req.body.price,
//         "section": req.body.section,
//         "rName": req.body.rName
//     }



//     //var sql = "SELECT * FROM menu WHERE rName = " + mysql.escape(item.rName) + ";"

//     Menu.findOne({rName : rName}, function (err, results, fields) {
//         if (results.length != 0) {
//             res.status(204, {
//                 'Content-Type': 'application/json'
//             });
//             res.send("Item exixts");
//         }
//         else {
//             var sql1 = "INSERT INTO menu SET " + mysql.escape(item);

//             connection.query(sql1, function (err, results, fields) {
//                 if (err) {
//                     res.status(200, {
//                         'Content-Type': 'application/json'
//                     });
//                     console.log(err);
//                     res.send("error");
//                 }

//                 else {
//                     res.status(201, {
//                         'Content-Type': 'application/json'
//                     });
//                     res.send("Success");
//                 }
//             })
//         }
//     })
// }





exports.addSection = (req, res) => {
    console.log("inside post section")

    var section = {
        "section": req.body.section,
        "rName": req.body.rName
    }

    kafka.make_request('add_sections',req.body, function(err,results){
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
    // console.log(section.rName)
    // var sql = "SELECT * FROM sections WHERE section = " + mysql.escape(item.section) + ";"
    // console.log(sql)

    // connection.query(sql, function (err, results, fields) {
    //     if (results.length != 0) {
    //         res.status(204, {
    //             'Content-Type': 'application/json'
    //         });
    //         res.send("Item exixts");
    //     }
    //     else {
    //         var sql1 = "INSERT INTO sections SET " + mysql.escape(section);
    //         console.log(sql1)
    //         connection.query(sql1, function (err, results, fields) {
    //             if (err) {
    //                 console.log("error")
    //                 res.status(200, {
    //                     'Content-Type': 'application/json'
    //                 });
    //                 console.log(err);
    //                 res.send("error");
    //             }

    //             else {
    //                 console.log("success")
    //                 res.status(201, {
    //                     'Content-Type': 'application/json'
    //                 });
    //                 res.send("Success");
    //             }
    //         })
    //     }
    // })
}




// exports.addMenu = (req, res) => {
//     console.log("inside post section")

//     var item = {
//         "section": req.body.section,
//         "item": req.body.item,
//         "desc": req.body.desc,
//         "price": req.body.price
//     }


//     console.log(item.rName)
//     var sql = "SELECT * FROM menu WHERE name = " + mysql.escape(item.item) + ";"
//     console.log(sql)

//     connection.query(sql, function (err, results, fields) {
//         if (results.length != 0) {
//             res.status(204, {
//                 'Content-Type': 'application/json'
//             });
//             res.send("Item exixts");
//         }
//         else {
//             var sql1 = "INSERT INTO menu (name, desc, price, section, rName) " + mysql.escape(item);
//             console.log(sql1)
//             connection.query(sql1, function (err, results, fields) {
//                 if (err) {
//                     console.log("error")
//                     res.status(200, {
//                         'Content-Type': 'application/json'
//                     });
//                     console.log(err);
//                     res.send("error");
//                 }

//                 else {
//                     console.log("success")
//                     res.status(201, {
//                         'Content-Type': 'application/json'
//                     });
//                     res.send("Success");
//                 }
//             })
//         }
//     })
// }




exports.addtoCart = (req, res) => {
    console.log("ADD TO CART")

    var item = {
        "orderId": req.body.orderID,
        "item" : req.body.itemList,
        "price": req.body.price,
        "status": "new",
        "bEmail": req.body.email,
        "bName": req.body.bName,
        "rName": req.body.rName
    }

    console.log(item);

    //var sql = "INSERT INTO grubhub.orders SET " + mysql.escape(item);

    kafka.make_request('addto_cart',req.body, function(err,results){
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
            //console.log(sql)
            // var item1 = new Orders({
            //     orderID : item.orderId,
            //     item : item.item,
            //     price : item.price,
            //     bName : item.bName,
            //     status : item.status,
            //     bEmail : item.bEmail,
            //     rName : item.rName
            //  })
            // item1.save().then((orders) => {
            //     console.log("Signing up", orders)
            //    //  callback(null, buyer)
            //   })
            //   res.writeHead(201,{
            //    'Content-Type' : 'application/json'
            //    });
            //    res.end("Success");

    //         connection.query(sql, function (err, results, fields) {
    //             if (err) {
    //                 console.log("error")
    //                 res.status(200, {
    //                     'Content-Type': 'application/json'
    //                 });
    //                 console.log(err);
    //                 res.send("error");
    //             }

    //             else {
    //                 console.log("success")
    //                 res.status(201, {
    //                     'Content-Type': 'application/json'
    //                 });
    //                 res.send("Success");
    //             }
            
    //     }
    // )
}


exports.getCart = (req, res) => {
    console.log("inside get cart");

    var orderID = req.body.orderID;

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

    //var sql = "SELECT * FROM grubhub.orders WHERE orderID = " + mysql.escape(orderID) + ";"
    //console.log(sql)


    // Orders.find({orderID : orderID}, function (err, results, fields) {
    //     if (results != null) {
    //         console.log(results)
            
    //         res.status(200, {
    //             'Content-Type': 'application/json'
    //         });
    //         res.send(results);
    //     }
    //     else {
    //         res.status(204, { 'Content-Type': 'application/json' });
    //         res.send("Error!!");
    //     }
    // })
}

exports.getCart1 = (req, res) => {
    console.log("inside get CART");

    var rName = "1";

    var sql = "SELECT * FROM menu WHERE rName = " + mysql.escape(rName) + ";"
    console.log("backend")


    connection.query(sql, function (err, results, fields) {
        //console.log(results)
        // console.log(results[1].section)
        // console.log("length",results.length)
        if (results.length != 0) {
            var obj = {};
            for (let l = 0; l < results.length; l++) {
                console.log("index",l)
                var key = results[l].orderID;
                var itemArr = [];
                //console.log("key",key)
                //console.log("results.section",results[l].section)
                
                if (Object.keys(obj).includes(key)) {
                    //itemArr.push(obj)
                    itemArr = obj[key]
                    itemArr.push(results[l])
                   // console.log("item array",itemArr)
                }else{
                    console.log("in else")
                    obj[key] = [results[l]]
                    //console.log(Object.keys(obj))
                }
            }
            
            res.status(200, {
                'Content-Type': 'application/json'
            });
            res.send(obj);
        }
        else {
            res.status(204, { 'Content-Type': 'application/json' });
            res.send("Error!!");
        }
    })
}



