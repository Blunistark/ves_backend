const express = require('express');
const adminRoutes = require('./adminRoutes');
const studentRoutes = require('./studentRoutes');
const teacherRoutes = require('./teacherRoutes');
const authRoutes = require('./authRoutes');
const reportRoutes = require('./reportRoutes');

const router = express.Router();

// Combine all routes
router.use('/auth', authRoutes);
router.use('/admin', adminRoutes);
router.use('/student', studentRoutes);
router.use('/teacher', teacherRoutes);
router.use('/report', reportRoutes);

module.exports = router;