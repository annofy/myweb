/**
 *  creator: zheng
 *  date: 2017/6/29
 *  email: zhenglfsir@gmail.com
 */
const mongoose = require('mongoose'),
  Schemas = require('../schemas/Schemas'),
  EntityModel = mongoose.model('entity', Schemas.Entity);

module.exports = EntityModel
