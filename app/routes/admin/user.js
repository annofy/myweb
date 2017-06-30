const express = require('express'),
  router = express.Router();


router.get('/login', (req, res) => {
  if (req.session && req.session._uname) {
    return res.json({
      ok: true,
      data: {},
      reason: '用户已登录'
    })
  } else {
    return res.json({
      ok: false,
      data: {},
      reason: ''
    })
  }
})

router.post('/login', (req, res) => {
  const name = req.body.name,
    password = req.body.password;
  if (name === 'admin' && password === '123456') {
    req.session._uname = name
    res.json({
      ok: true,
      data: {
        name: name
      },
      reason: '登陆成功'
    })
  } else {
    res.json({
      ok: false,
      data: {},
      reason: '账号或者密码错误'
    })
  }
})

module.exports = router