const express = require('express');
const { authenticate } = require('../middlewares/authMiddleware');
const { authorize } = require('../middlewares/roleMiddleware');
const { ROLES } = require('../config/constants');
const { generateReportController } = require('../controllers/reportController');

const router = express.Router();

// Report routes
router.post('/generate', authenticate, authorize([ROLES.ADMIN, ROLES.TEACHER]), generateReportController);

module.exports = router;