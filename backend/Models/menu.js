var mongoose = require('mongoose');

var Menu = mongoose.model('menu',{
    item :{
        type : String
    },
    desc : {
        type : String
    },
    price : {
        type : String
    },
    section : {
        type : String 
    },
    oEmail : {
        type : String
    },
    rName : {
        type : String
    }
});

module.exports = {Menu};

