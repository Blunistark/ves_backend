const express = require('express');
const { authenticate } = require('../middlewares/authMiddleware');
const { authorize } = require('../middlewares/roleMiddleware');
const { ROLES } = require('../config/constants');
const { createStudentController, getStudentByIdController, getStudentsByClassIdController } = require('../controllers/studentController');

const router = express.Router();

// Student routes
router.post('/create', authenticate, authorize([ROLES.ADMIN]), createStudentController);
router.get('/:id', authenticate, authorize([ROLES.ADMIN, ROLES.TEACHER]), getStudentByIdController);
router.get('/class/:classId', authenticate, authorize([ROLES.ADMIN, ROLES.TEACHER]), getStudentsByClassIdController);

module.exports = router;