var express = require('express');
var router = express.Router();
const path = require('path');
const pdf = require('../controller/pdf')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("PDF Library");
});

var stream = require('stream');
const res = require('express/lib/response');
//...
router.get('/download', async function(req, res){
  var pdfBuffer = await pdf.modifyPdf();
  res.setHeader("Content-Type", "text/pdf");
  // res.download(pdfBuffer, "test.pdf");
});

module.exports = router;