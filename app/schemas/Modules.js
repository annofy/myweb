/**
 *  creator: zheng
 *  date: 2017/6/21
 *  email: zhenglfsir@gmail.com
 */

const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ModulesScheam = new Schema({
    moduleName: String,
    moduleDes: String,
    developer: String,
    npmUrl: String,
    github: String,
    isAvailable: {
      type: Boolean,
      default: true
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
