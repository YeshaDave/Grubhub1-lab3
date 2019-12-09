var express = require('express');
var app = express();
var crypt = require('./crypt1');
var kafka = require('../kafka/client');
var mongoose = require('./connection');
var {Buyer} = require('../Models/buyer');
var {Owner} = require('../Models/owner');


exports.buyerSignup = (req,res)=>{

    console.log("Inside buyer signup post");
    

    var buyer = {
        "FirstName":req.body.FirstName,
        "LastName":req.body.LastName,
        "Email":req.body.Email,
        "Password":req.body.Password,
        "phone":req.body.phone,
      }
    console.log(buyer);


    kafka.make_request('buyer_signup',req.body, function(err,results){
      console.log('in result');
      console.log(results);
      if (err){
          console.log("Inside err");
          res.json({
              status:200,
              msg:"System Error, Try Again."
          })
      }else{
          console.log("Inside else");
              res.json({
                status: 200,
                data: results
              });
    
              res.end();
          }
      
    });
    
    // Buyer.findOne({email : buyer.email}, function(err, result){
    //     if(err){
    //       console.log("Error in signup", +err)
    //       res.writeHead(200,{
    //         'Content-Type' : 'application/json'
    //         });
    //         res.end("error");
    //     }
    //     else if(result){
    //       console.log("User exists")
    //       res.status(202,{
    //         'Content-Type' : 'application/json'
    //         });
    //         res.send("User exists");
    //     }
    //     else{
    //       crypt.createHash(buyer.password, function (res1) {
    //         buyer.password = res1;
    //         console.log("res",res1)
    //              var Buyer1 = new Buyer({
    //                 fName : buyer.fName,
    //                 lName : buyer.lName,
    //                 email : buyer.email,
    //                 password : res1,
    //                 phone : buyer.phone
    //              })

    //              Buyer1.save().then((buyer) => {
    //                console.log("Signing up", buyer)
    //               //  callback(null, buyer)
    //              })
    //              res.writeHead(201,{
    //               'Content-Type' : 'application/json'
    //               });
    //               res.end("Success");
    //         })
    //     }
    // })
}



// kafka.make_request('buyer_signup',req.body, function(err,results){
//   console.log('in result');
//   console.log(results);
//   if (err){
//       console.log("Inside err");
//       res.json({
//           status:"error",
//           msg:"System Error, Try Again."
//       })
//   }else{
//       console.log("Inside else");
//           res.json({
//               updatedList:results
//           });

//           res.end();
//       }
  
// });


exports.ownerSignup = (req,res)=>{

  console.log("Inside owner signup post");
  

  var owner = {
    "name":req.body.name,
    "restaurantName":req.body.restName,
    "email":req.body.email,
    "password":req.body.password,
    "zipCode":req.body.zCode,
    }
  console.log(owner);
  
  kafka.make_request('owner_signup',req.body, function(err,results){
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
}

