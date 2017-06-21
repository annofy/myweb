const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  utils = require('../utils/utils')
UserSchema = new Schema({
  name: String,
  password: String,
  lastLogin: {
    type: Date,
    default: Date.now
  },
  meta: {
    createTime: {
      type: Date,
      default: Date.now
    },
    updateTime: {
      type: Date,
      default: Date.now
    }
  }
});

class User {

}

UserSchema.loadClass(User)

module.exports = UserSchema;