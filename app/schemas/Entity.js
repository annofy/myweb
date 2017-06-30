/**
 *  creator: zheng
 *  date: 2017/6/28
 *  email: zhenglfsir@gmail.com
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  EntitySchema = new Schema({
    name: String,
    desc: String,
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
    return this.find()
      .catch(err => {
        throw new Error('查询实体失败', err)
      })
  }

  static addEntity(entity) {
    return this.create(entity)
      .catch(err => {
        throw new Error('创建实体失败', err)
      })
  }
}


EntitySchema.loadClass(Entity)

module.exports = EntitySchema
