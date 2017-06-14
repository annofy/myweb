const mongoose = require('mongoose'),
  CategorySchema = require('../schemas/Category'),
  CategoryModel = mongoose.model('category', CategorySchema);

module.exports = CategoryModel