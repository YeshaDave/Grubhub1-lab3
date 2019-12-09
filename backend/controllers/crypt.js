const bcrypt = require('bcrypt');

var crypt = {};

crypt.createHash = function (data, successCallback, failureCallback) {
        console.log("Inside createhash crypt");
        bcrypt.hash(data, 10, null, function (err, hash) {
            console.log("data:", data);
            console.log("inside hash");
            console.log("error:" , err);
            if (err) {
                //failureCallback(err);
                return;
            }
            console.log("Hash:", hash)
            successCallback(hash);
        });
};

crypt.compareHash = function (data, encrypted, successCallback, failureCallback) {
    bcrypt.compare(data, encrypted, function (err, isMatch) {
        if (err) {
            failureCallback(err);
            return;
        }
        successCallback(err, isMatch);
    });
};
module.exports = crypt;
