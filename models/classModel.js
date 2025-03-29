const pool = require('../config/db');

// Create a new class
const createClass = async (name, teacherId) => {
  const query = `
    INSERT INTO classes (name, teacher_id)
    VALUES ($1, $2)
    RETURNING *;
  `;
  const values = [name, teacherId];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Get a class by ID
const getClassById = async (id) => {
  const query = `SELECT * FROM classes WHERE id = $1;`;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

// Get all classes
const getAllClasses = async () => {
  const query = `SELECT * FROM classes;`;
  const result = await pool.query(query);
  return result.rows;
};

module.exports = { createClass, getClassById, getAllClasses };