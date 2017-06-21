const mongoose = require('mongoose'),
  UserSchema = require('../schemas/User'),
  UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;