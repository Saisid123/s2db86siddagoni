var express = require('express');
const dog_controlers= require('../controllers/dog');
var router = express.Router();

/* GET home page. */
router.get('/', dog_controlers.dog_view_all_Page );

module.exports = router;