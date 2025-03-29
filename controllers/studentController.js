const { createStudent, getStudentById, getStudentsByClassId } = require('../models/studentModel');

// Create a new student
const createStudentController = async (req, res) => {
  const { userId, firstName, lastName, classId, dateOfBirth } = req.body;

  try {
    const student = await createStudent(userId, firstName, lastName, classId, dateOfBirth);
    res.status(201).json({ message: 'Student created successfully', student });
  } catch (error) {
    res.status(500).json({ error: 'Error creating student' });
  }
};

// Get a student by ID
const getStudentByIdController = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await getStudentById(id);
    if (!student) return res.status(404).json({ error: 'Student not found' });
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching student' });
  }
};

// Get all students in a class
const getStudentsByClassIdController = async (req, res) => {
  const { classId } = req.params;

  try {
    const students = await getStudentsByClassId(classId);
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching students' });
  }
};

module.exports = { createStudentController, getStudentByIdController, getStudentsByClassIdController };