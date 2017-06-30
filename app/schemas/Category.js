const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  CategorySchema = new Schema({
    name: String,
    desc: String,
    entity: {
      type: Schema.Types.ObjectId,
      ref: 'entity'
    },
    createTime: {
      type: Date,
      default: Date.now
    },
    updateTime: {
      type: Date,
      default: Date.now
    }
  });

class Category {
  static getCatetories(start = 0, pageSize = 10) {
    return this.find()
      .populate('entity')
      .skip(start * pageSize)
      .limit(pageSize)
      .catch(err => {
        throw new Error('获取条目失败', err)
      })
  }

  static getCategoryByName(name) {
    return this.findOne({name: name})
      .catch(err => {
        throw new Error('获取内容失败', err)
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

  static getCategoryById(_id) {
    return this.findOne({_id: _id})
      .catch(err => {
        throw new Error('获取类目详情失败', err)
      })
  }

  static getCategoriesByEntity(eid) {
    return this.find({entity: eid})
      .catch(err => {
        throw new Error(err)
      })
  }
}

CategorySchema.loadClass(Category)
CategorySchema.pre('save', function (next) {
  next()
})

CategorySchema.pre('update', function (next) {
  next()
})


module.exports = CategorySchema