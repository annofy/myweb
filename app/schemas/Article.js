const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ArticleSchema = Schema({
    title: {
      type: String,
      trim: true,
      required: true,
    },
    content: Schema.Types.Mixed, // 内容delta对象
    html: String, // 内容html
    desc: String,  // 描述
    categoryId: {
      type: [{
        type: Schema.Types.ObjectId,
        ref: 'category'
      }],
      required: true
    },
    views: {
      type: Number,
      default: 0
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

class Article {

  static getArticles(start = 0, pageSize = 10, criteria = {}) {
    return this.find(criteria)
      .populate('categoryId')
      .skip(start * pageSize)
      .limit(pageSize)
      .catch(err => {
        throw new Error('获取文章失败', err)
      })
  }

  /**
   * 批量删除
   * @param ids 删除的数据
   */
  static deleteArticle(ids) {
    return this.remove({_id: {$in: ids}})
      .catch(err => {
        throw new Error('删除失败', err)
      })
  }

  static addArtcile(article) {
    return this.create(article)
      .catch(err => {
        throw new Error('添加文章失败', err)
      })
  }

  static updateCategory(ids, catId) {
    return this.update({_id: {$in: ids}}, {categoryId: catId}, {multi: true})
      .then(err => {
        throw new Error('更新分类失败', err)
      })
  }

  static updateArticle(_id, article) {
    return this.update({_id}, article)
      .catch(err => {
        throw new Error('更新文章失败', err)
      })
  }


}
ArticleSchema.loadClass(Article)
ArticleSchema.pre('update', function (next) {
  this.findOne().then(art => {
    this.update({}, {$set: {meta: {...art.meta, updateTime: Date.now()}}})
    next()
  })
})

module.exports = ArticleSchema