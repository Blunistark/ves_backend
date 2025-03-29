const { createTeacher, getTeacherById, getAllTeachers } = require('../models/teacherModel');

// Create a new teacher
const createTeacherController = async (req, res) => {
  const { userId, firstName, lastName, subject } = req.body;

  try {
    const teacher = await createTeacher(userId, firstName, lastName, subject);
    res.status(201).json({ message: 'Teacher created successfully', teacher });
  } catch (error) {
    res.status(500).json({ error: 'Error creating teacher' });
  }
};

// Get a teacher by ID
const getTeacherByIdController = async (req, res) => {
  const { id } = req.params;

  try {
    const teacher = await getTeacherById(id);
    if (!teacher) return res.status(404).json({ error: 'Teacher not found' });
    res.status(200).json(teacher);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching teacher' });
  }
};

// Get all teachers
const getAllTeachersController = async (req, res) => {
  try {
    const teachers = await getAllTeachers();
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching teachers' });
  }
};

module.exports = { createTeacherController, getTeacherByIdController, getAllTeachersController };