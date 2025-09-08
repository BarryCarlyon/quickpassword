const quickpassword = require("../quickpassword.cjs");

let plain_text_input = 'somepassword';

console.log(`Using: ${plain_text_input}`);

quickpassword.cryptPassword(plain_text_input, (err, ret) => {
    if (err) {
        console.log("Failed");
    } else {
        // ret contains encrypted password for storage
        console.log('genned as: ', ret);

        compareTest(ret);
    }
});

function compareTest(encrypted_password_from_db) {
    quickpassword.comparePassword(
        plain_text_input,
        encrypted_password_from_db,
        (err, isMatch) => {
            if (err) {
                console.log("Password Err");
            } else {
                if (isMatch) {
                    // passwords Match
                    console.log('Matched');
                } else {
                    // passwords do not match
                    console.log('No Matched');
                }
            }
        }
    );
}
