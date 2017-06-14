const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  CategorySchema = new Schema({
    name: String,
    desc: String,
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

class Category {
  static getCatetories() {
    return this.find()
      .catch(err => {
        throw new Error('获取条目失败', err)
      })
  }

  static addCatetory(category) {
    return this.create(category)
      .catch(err => {
        throw new Error('添加分类失败', err)
      })
  }

  static deleteCategory(ids) {
    return this.remove({_id: {$in: ids}})
      .catch(err => {
        throw new Error('删除失败', err)
      })
  }

  static updateCategory(_id, category) {
    return this.update({_id}, {...category})
      .catch(err => {
        throw new Error('更新目录失败', err)
      })
  }
}

CategorySchema.loadClass(Category)
CategorySchema.pre('save', function (next) {
  next()
})

CategorySchema.pre('update', function (next) {
  this.update({}, {$set: {meta: {updateTime: Date.now()}}})
  next()
})


module.exports = CategorySchema