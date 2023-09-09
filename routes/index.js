var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/botlocalizapromo', function(req, res, next) {
  const body = req.body

  console.log('Recebido', body),
  res.sendStatus(200)
});

module.exports = router;
