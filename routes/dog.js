var express = require('express');
const dog_controlers= require('../controllers/dog');
var router = express.Router();

/* GET home page. */
router.get('/', dog_controlers.dog_view_all_Page );
router.get('/detail', dog_controlers.dog_view_one_Page);
module.exports = router;