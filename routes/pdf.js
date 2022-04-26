var express = require('express');
var router = express.Router();
const path = require('path');
const pdf = require('../controller/pdf')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("PDF Library");
});

router.get('/waterMask', (req, res) => {
  res.download(pdf.modifyPdf())
})

module.exports = router;