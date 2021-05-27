A very very quick and dirty password encrypter using bcrypt based on [this Stackoverflow Question](http://stackoverflow.com/questions/14015677/node-js-encryption-of-passwords)

# Updating node

If you update Node, you will need to run `npm install` in order to rebuild this module.

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

# Upgrading node

If/when you upgrade node, this module (well bcrypt) will need to be recompiled, `npm rebuild` should get you going!
