const express = require('express');
const { authenticate } = require('../middlewares/authMiddleware');
const { authorize } = require('../middlewares/roleMiddleware');
const { ROLES } = require('../config/constants');
const { createTeacherController, getTeacherByIdController, getAllTeachersController } = require('../controllers/teacherController');

const router = express.Router();

// Teacher routes
router.post('/create', authenticate, authorize([ROLES.ADMIN]), createTeacherController);
router.get('/:id', authenticate, authorize([ROLES.ADMIN, ROLES.TEACHER]), getTeacherByIdController);
router.get('/', authenticate, authorize([ROLES.ADMIN]), getAllTeachersController);

module.exports = router;