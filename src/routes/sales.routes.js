const express = require('express');
const router = express.Router();
const { getSales, getRevenue } = require('../controllers/sales.controller');

router.get('/', getSales);
router.get('/revenue', getRevenue);

module.exports = router;
