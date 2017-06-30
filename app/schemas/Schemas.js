/**
 *  creator: zheng
 *  date: 2017/6/28
 *  email: zhenglfsir@gmail.com
 */

const mongoose = require('mongoose')
const moment = require('moment')
const Article = require('./Article')
const Category = require('./Category')
const Modules = require('./Modules')
const Soft = require('./Soft')
const User = require('./User')
const Entity = require('./Entity')

mongoose.plugin(function (schema, options) {
  //todo 时间统一格式化
  schema.pre('update', function (next) {
    this.update({}, {$set: {updateTime: Date.now()}})
    next()
  })

  schema.pre('find', function (next) {

    next()
  })

})

module.exports = {
  Article, Category, Modules, Soft, User, Entity
}
