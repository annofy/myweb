const mongoose = require('mongoose'),
  Schemas = require('../schemas/Schemas'),
  CategoryModel = mongoose.model('category', Schemas.Category);

module.exports = CategoryModel