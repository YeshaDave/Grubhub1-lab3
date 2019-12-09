connection.query('SELECT * FROM users WHERE email = ?',[msg.email], function (error, results, fields) {

    if (error) {
        callback(error, " User does not exist ... ")
    } else {
        if (results.length > 0) {
            crypt.compareHash(msg.password, results[0].password, function (err, isMatch) {
                console.log(' The entered password and db : ', msg.password, ' ', results[0].password)
                if (isMatch && !err) {
                    console.log("in");
                    UserProfile.findOne({
                        email: msg.email.toLowerCase()
                    }, function (err, user) {
                        if (err) {
                            callback(msg, "Error in login");
                        } else {
                            console.log("Inside login user", user);
                            user = {
                                uResult : results[0],
                                uProf : user.profilePhoto,
                                uResume : user.resume
                                }
                            console.log(user)
                            callback(null, user);
                            }
                        })
                    } else {
                        callback(null, "Email or Password does not match!");
                    }
                }, function (error) {
                    if (error) {
                        callback(null, []);
                    }
                })
        }
        else {
            callback(error, " User does not exist ... ")
        }
    }
});