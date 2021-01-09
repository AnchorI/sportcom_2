const express = require('express');
const router = express.Router();

const views_controller = require('./product.views')
router.get('/', views_controller.views_html);


module.exports = router;
