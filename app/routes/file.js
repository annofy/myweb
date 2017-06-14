const express = require('express'),
  formiable = require('formidable'),
  router = express.Router();

router.post('/', (req, res) => {
  const form = formiable.IncomingForm(req)
})

module.exports = router;