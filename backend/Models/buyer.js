var mongoose = require('../controllers/connection');

var Buyer = mongoose.model('buyer',{
    FirstName :{
        type : String
    },
    LastName : {
        type : String
    },
    Email : {
        type : String
    },
    Password : {
        type : String 
    },
    // Phone : {
    //     type : String
    // }
});

module.exports = {Buyer};

