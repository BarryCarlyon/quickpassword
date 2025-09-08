//http://stackoverflow.com/questions/14015677/node-js-encryption-of-passwords
const bcrypt = require('bcrypt');

const saltRounds = 10;

exports.cryptPassword = (password, callback) => {
   bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err)
      return callback(err);

    bcrypt.hash(password, salt, (err, hash) => {
      return callback(err, hash);
    });
  });
};

exports.comparePassword = (plaintextPassword, hashedPassword, callback) => {
   bcrypt.compare(plaintextPassword, hashedPassword, (err, isPasswordMatch) => {
      if (err)
        return callback(err);
      return callback(null, isPasswordMatch);
   });
};
