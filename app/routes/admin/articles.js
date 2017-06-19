const express = require('express'),
  router = express.Router(),
  Category = require('../../models/CategoryModel'),
  Article = require('../../models/ArticleModel');

router.get('/', (req, res) => {
  let start = req.query.start || 0,
    pageSize = req.query.pageSize || 10,
    criteria = req.query.criteria || {};
  Article.getArticles(start, pageSize, criteria)
    .then(result => {
      res.json({
        ok: true,
        data: result
      })
    })
})

router.post('/', (req, res) => {
  const body = req.body
  /**
   { content: { ops: [ [Object] ] },
    html: '<p>32432432</p>',
    txt: '32432432\n',
    title: '242',
    categoryId: [ '59429635871dde77507e9a42', '593ffaec952a403cf95f1fb6' ],
    desc: '432432' }
   */
  console.log(body)
  Article.addArtcile(body)
    .then(result => {
      res.json({
        ok: true,
        data: result,
        reason: '添加成功'
      })
    })
})


module.exports = router