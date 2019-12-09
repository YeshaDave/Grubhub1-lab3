var mongoose = require('mongoose');

var Orders = mongoose.model('orders',{
    orderID :{
        type : String
    },
    item : {
        type : String
    },
    price : {
        type : String
    },
    status : {
        type : String 
    },
    bName : {
        type : String
    },
    rName : {
        type : String
    },
    bEmail : {
        type : String
    }
});

module.exports = {Orders};

