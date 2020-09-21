A very very quick and dirty password encrypter using bcypt based on [this Stackoverflow Question](http://stackoverflow.com/questions/14015677/node-js-encryption-of-passwords)

# Comparison

    const quickpassword = require('quickpassword');

    quickpassword.comparePassword(input_string, encrypted_password_from_db, (err, isMatch) => {
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

    const quickpassword = require('quickpassword');
    
    quickpassword.cryptPassword(entry, (err, ret) => {
        if (err) {
            console.log('Failed');
        } else {
            // ret contains encrypted password for storage
        }
    });
