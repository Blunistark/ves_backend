const pool = require('../config/db');

// Create a new assignment
const createAssignment = async (classId, title, description, dueDate) => {
  const query = `
    INSERT INTO assignments (class_id, title, description, due_date)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const values = [classId, title, description, dueDate];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Get an assignment by ID
const getAssignmentById = async (id) => {
  const query = `SELECT * FROM assignments WHERE id = $1;`;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

// Get all assignments for a class
const getAssignmentsByClassId = async (classId) => {
  const query = `SELECT * FROM assignments WHERE class_id = $1;`;
  const result = await pool.query(query, [classId]);
  return result.rows;
};

module.exports = { createAssignment, getAssignmentById, getAssignmentsByClassId };