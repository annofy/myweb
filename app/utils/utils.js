const crypto = require('crypto'),
  config = require('config'),
  keepstr = config.get('crypto.keepstr');
class Utils {
  /**
   * 加密
   */
  static encrypt(msg) {
    const cipher = crypto.createCipher('aes256', keepstr)
    return cipher.update(msg, 'utf8', 'hex') + cipher.final('hex')
  }

  /**
   * 解密
   */
  static decrypt(msg) {
    const decipher = crypto.createDecipher('aes256', keepstr)
    return decipher.update(msg, 'hex', 'utf8') + decipher.final('utf8')
  }

  /**
   *  sha1 加密
   * @param message 加密字符串
   * @return {string|Buffer}
   */
  static sha1(message) {
    const hash = crypto.createHash('sha1')
    hash.update(message)
    return hash.digest('hex')
  }

  /**
   * 打印
   * @param tag
   * @param msg
   */
  static logs(tag, ...msg) {
    if (console && console.log) {
      console.log(`[${tag}]`, ...msg)
    }
  }

  /**
   * 错误输出
   * @param tag
   * @param msg
   */
  static error(tag, ...msg) {
    if (console && console.err) {
      console.error(`[${tag}]`, ...msg)
    } else {
      this.logs(tag, msg)
    }
  }

  /**
   * 打印错误
   * @param tag
   * @param msg
   */
  static error(tag, ...msg) {
    if (console && console.error) {
      console.error(`[${tag}]`, ...msg)
    } else {
      this.logs(tag, msg)
    }
  }

  static cleanCache(modulePath) {
    const module = require.cache[modulePath]
    if (module.parent) {
      module.parent.children.splice(module.parent.children.indexOf(module), 1)
    }
    require.cache[modulePath] = null
  }

}

module.exports = Utils