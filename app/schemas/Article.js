const moogoose = require('mongoose'),
  Schema = mongoose.Schema,
  ArticleSchema = Schema({
    title: {
      type: String,
      trim: true,
      required: true,
    },
    content: Schema.Types.Mixed,
    categoryId: Schema.Types.ObjectId,
    views: Number,
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

class Article {

}

ArticleSchema.pre('save', next => {
  if (this.isNew) {

  } else {

  }
})

ArticleSchema.loadClass(Article)

module.exports = ArticleSchema