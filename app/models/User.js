const mongoose = require('mongoose'),
  Schemas = require('../schemas/Schemas'),
  UserModel = mongoose.model('user', Schemas.User);

module.exports = UserModel;