var mongoose = require('mongoose');

var Sections = mongoose.model('section',{
    section : {
        type : String 
    },
    oEmail : {
        type : String
    }
});

module.exports = {Sections};