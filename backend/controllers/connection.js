var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://admin:admin@54.219.135.52:27017/grubhub', { useNewUrlParser: true },{userMongoClient : true}, {userUnifiesTopology : true});

module.exports = mongoose;