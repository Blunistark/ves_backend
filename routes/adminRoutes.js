const express = require('express');
const { authenticate } = require('../middlewares/authMiddleware');
const { authorize } = require('../middlewares/roleMiddleware');
const { ROLES } = require('../config/constants');
const { createAdminController, getAdminByIdController, getAllAdminsController } = require('../controllers/adminController');

const router = express.Router();

// Admin routes
router.post('/create', authenticate, authorize([ROLES.ADMIN]), createAdminController);
router.get('/:id', authenticate, authorize([ROLES.ADMIN]), getAdminByIdController);
router.get('/', authenticate, authorize([ROLES.ADMIN]), getAllAdminsController);

module.exports = router;