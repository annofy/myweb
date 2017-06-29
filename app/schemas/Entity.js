/**
 *  creator: zheng
 *  date: 2017/6/28
 *  email: zhenglfsir@gmail.com
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  EntitySchema = Schema({
    name: String,
    createTime: {
      type: Date,
      default: Date.now
    },
    updateTime: {
      type: Date,
      default: Date.now
    }
  });

class Entity {
  static getEntities() {
  }
}

EntitySchema.loadClass(Entity)

module.exports = EntitySchema
