//http://stackoverflow.com/questions/14015677/node-js-encryption-of-passwords
const bcrypt = require('bcrypt');

exports.cryptPassword = (password, callback) => {
   bcrypt.genSalt(10, (err, salt) => {
    if (err)
      return callback(err);

    bcrypt.hash(password, salt, (err, hash) => {
      return callback(err, hash);
    });
  });
};

exports.comparePassword = (password, userPassword, callback) => {
   bcrypt.compare(password, userPassword, (err, isPasswordMatch) => {
      if (err)
        return callback(err);
      return callback(null, isPasswordMatch);
   });
};
