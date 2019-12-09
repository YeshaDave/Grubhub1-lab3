var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var cors = require('cors');
// app.set('view engine', 'ejs');
var graphqlHTTP = require('express-graphql');
var userSchema = require('./schema/schema');

module.exports = app
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(session({
    secret              : 'cmpe273_kafka_passport_mongo',
    resave              : false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized   : false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
    duration            : 60 * 60 * 1000,    // Overall duration of Session : 30 minutes : 1800 seconds
    activeDuration      :  5 * 60 * 1000
}));

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
  });

app.use(cookieParser()); 
let authFlag1 = false;  


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/graphql', graphqlHTTP({
  schema: userSchema,
  graphiql: true,
}));


var loginController = require('./controllers/loginController');
var signupController = require('./controllers/signupController');
var editController = require('./controllers/editController');
var editOwnerController = require('./controllers/editOwnerController');
var ownerLogin1 = require('./controllers/ownerLogin1');
var menuList = require('./controllers/menu');
var orderController = require('./controllers/orderController');
var signupMongo = require('./controllers/signupMongo');
var loginMongo = require('./controllers/loginMongo')

app.post('/buyerlogin',loginController.buyerlogin);
app.post('/ownerlogin',loginController.ownerlogin);
app.post('/buyerSignup',signupController.buyerSignup);
app.post('/ownerSignup',signupController.ownerSignup);
app.post('/editBuyerName',editController.editBuyerName);
app.post('/editBuyerPhone',editController.editBuyerPhone);
app.post('/editBuyerEmail',editController.editBuyerEmail);
app.post('/editOwnerName',editOwnerController.editOwnerName);
app.post('/editOwnerEmail',editOwnerController.editOwnerEmail);
app.post('/editOwnerPhone',editOwnerController.editOwnerPhone);
app.post('/editZip',editOwnerController.editZip);
app.post('/editCuisine',editOwnerController.editCuisine);
app.post('/editRestName',editOwnerController.editRestName);
app.post('/getMenu',menuList.getMenu);
app.post('/getMenu1',menuList.getMenu1);
app.post('/getSections',menuList.getSections);
app.post('/getOldOrders',orderController.getOldOrders);
app.post('/getUpcomingOrders',orderController.getUpcomingOrders);
app.post('/changeStatus',orderController.changeStatus);
app.post('/deleteOrder',orderController.deleteOrder);
app.post('/getCart1',orderController.getCart1)
app.post('/getupcOrders',orderController.getBuyerUpcomingOrders)
app.post('/addSection',menuList.addSection);
app.post('/addtoCart',menuList.addtoCart);
app.post('/getCart',menuList.getCart);
app.post('/getRestaurants1',menuList.getRestaurants1);
app.post('/postMenu', menuList.postMenu);
app.post('/buyerSignup1', signupMongo.buyerSignup);
app.post('/ownerSignup1', signupMongo.ownerSignup);
app.post('/buyerLogin1',loginMongo.buyerlogin);
app.post('/ownerLogin1',loginMongo.ownerlogin);



// app.post('/ownerlogin',function(req,res){loginController.ownerlogin});
// app.post('/buyerSignup',function(req,res){signupController.buyerSignup});
// app.post('/ownerSignup',function(req,res){signupController.ownerSignup});


app.listen(3001);
console.log("Server Listening on port 3001")
// module.exports = app;