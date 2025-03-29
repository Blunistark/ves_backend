const pool = require('../config/db');

// Create a new student
const createStudent = async (userId, firstName, lastName, classId, dateOfBirth) => {
  const query = `
    INSERT INTO students (user_id, first_name, last_name, class_id, date_of_birth)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;
  const values = [userId, firstName, lastName, classId, dateOfBirth];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Get a student by ID
const getStudentById = async (id) => {
  const query = `SELECT * FROM students WHERE id = $1;`;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

// Get all students in a class
const getStudentsByClassId = async (classId) => {
  const query = `SELECT * FROM students WHERE class_id = $1;`;
  const result = await pool.query(query, [classId]);
  return result.rows;
};

module.exports = { createStudent, getStudentById, getStudentsByClassId };