/**
 *  creator: zheng
 *  date: 2017/6/29
 *  email: zhenglfsir@gmail.com
 */
const express = require('express');
const router = express.Router();
const Models = require('../../models/Models')
const Entity = Models.EntityModel

router.get('/', (req, res) => {
  Entity.getEntities()
    .then(ens => {
      res.json({
        ok: true,
        data: ens,
        reason: ''
      })
    })
})

router.post('/', (req, res) => {
  let name = req.body.name,
    desc = req.body.desc ? req.body.desc : '暂无描述';
  Entity.addEntity({name, desc})
    .then(en => {
      res.json({
        ok: true,
        data: en,
        reason: '添加成功'
      })
    })
})

module.exports = router
