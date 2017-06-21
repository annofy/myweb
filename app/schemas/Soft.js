/**
 *  creator: zheng
 *  date: 2017/6/21
 *  email: zhenglfsir@gmail.com
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  SoftSchema = new Schema({
    softName: String,
    softDesc: String,
    url: String,
    isAvailable: {
      type: Boolean,
      default: true
    },
    clicks: Number,
    tags: Array,
    isShare: {
      type: Boolean,
      default: false
    },
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

class Soft {

}
SoftSchema.loadClass(Soft)
module.exports = SoftSchema
