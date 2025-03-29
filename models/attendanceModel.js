const pool = require('../config/db');

// Mark attendance for a student
const markAttendance = async (studentId, classId, date, status) => {
  const query = `
    INSERT INTO attendance (student_id, class_id, date, status)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const values = [studentId, classId, date, status];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Get attendance for a student
const getAttendanceByStudentId = async (studentId) => {
  const query = `SELECT * FROM attendance WHERE student_id = $1;`;
  const result = await pool.query(query, [studentId]);
  return result.rows;
};

module.exports = { markAttendance, getAttendanceByStudentId };