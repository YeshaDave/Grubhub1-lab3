var mongoose = require('../controllers/connection');

var Owner = mongoose.model('owner',{
    FirstName :{
        type : String
    },
    RestaurantName : {
        type : String
    },
    Email : {
        type : String
    },
    Password : {
        type : String 
    },
    ZipCode : {
        type : String
    }
});

module.exports = {Owner};

