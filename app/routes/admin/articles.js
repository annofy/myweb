const express = require('express'),
  router = express.Router();

router.post('/', (req, res) => {
  const body = req.body
  console.log(body)
})


module.exports = router