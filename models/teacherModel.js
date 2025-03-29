const pool = require('../config/db');

// Create a new teacher
const createTeacher = async (userId, firstName, lastName, subject) => {
  const query = `
    INSERT INTO teachers (user_id, first_name, last_name, subject)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const values = [userId, firstName, lastName, subject];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Get a teacher by ID
const getTeacherById = async (id) => {
  const query = `SELECT * FROM teachers WHERE id = $1;`;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

// Get all teachers
const getAllTeachers = async () => {
  const query = `SELECT * FROM teachers;`;
  const result = await pool.query(query);
  return result.rows;
};

module.exports = { createTeacher, getTeacherById, getAllTeachers };