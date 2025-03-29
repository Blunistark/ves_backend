const pool = require('../config/db');

// Add a grade for a student
const addGrade = async (studentId, classId, assignmentId, grade) => {
  const query = `
    INSERT INTO grades (student_id, class_id, assignment_id, grade)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const values = [studentId, classId, assignmentId, grade];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Get grades for a student
const getGradesByStudentId = async (studentId) => {
  const query = `SELECT * FROM grades WHERE student_id = $1;`;
  const result = await pool.query(query, [studentId]);
  return result.rows;
};

module.exports = { addGrade, getGradesByStudentId };