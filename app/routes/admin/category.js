const express = require('express'),
  router = express.Router(),
  Category = require('../../models/CategoryModel');

router.get('/', (req, res) => {
  let start = req.query.start - 0,
    pageSize = req.query.pageSize - 0;
  Category.getCatetories(start, pageSize).then(cates => {
    res.json({
      ok: true,
      data: cates,
      reason: ''
    })
  })
})

router.post('/', (req, res) => {
  const body = req.body
  Category.addCatetory(body)
    .then(cate => {
      res.json({
        ok: true,
        data: cate,
        reason: '添加成功'
      })
    })
})

router.get('/validate', (req, res) => {
  let name = req.query.name
  Category.getCategoryByName(name)
    .then(cat => {
      res.json({
        ok: true,
        data: cat,
        reason: ''
      })
    })
})

router.post('/edit', (req, res) => {
  let body = req.body,
    {name, entity, desc} = body;
  Category.updateCategory(body._id, {name, desc, entity})
    .then(result => {
      res.json({
        ok: true,
        data: {},
        reason: '更新成功'
      })
    })
})


router.post('/delete', (req, res) => {
  let ids = req.body.ids ? req.body.ids : []
  Category.deleteCategory(ids)
    .then(flag => {
      res.json({
        ok: true,
        data: {},
        reason: '删除成功'
      })
    })
})

module.exports = router