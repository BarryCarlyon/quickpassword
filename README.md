A very very quick and dirty password encrypter using bcypt based on [this Stackoverflow Question](http://stackoverflow.com/questions/14015677/node-js-encryption-of-passwords)

# Comparison

    var quickpassword = require('quickpassword');

    quickpassword.comparePassword(input_string, encrypted_password_from_db, function(err, isMatch) {
        if (err) {
            console.log('Password Err');
        } else {
            if (isMatch) {
                // passwords Match
            } else {
                // passwords do not match
            }
        }
    });

# Generation (for storage)

        password.cryptPassword(entry, function(err, ret) {
            if (err) {
                console.log('Failed');
            } else {
                // ret contains encrypted password for storage
            }
        });
