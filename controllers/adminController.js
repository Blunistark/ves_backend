const { createAdmin, getAdminById, getAllAdmins } = require('../models/adminModel');

// Create a new admin
const createAdminController = async (req, res) => {
  const { userId, firstName, lastName } = req.body;

  try {
    const admin = await createAdmin(userId, firstName, lastName);
    res.status(201).json({ message: 'Admin created successfully', admin });
  } catch (error) {
    res.status(500).json({ error: 'Error creating admin' });
  }
};

// Get an admin by ID
const getAdminByIdController = async (req, res) => {
  const { id } = req.params;

  try {
    const admin = await getAdminById(id);
    if (!admin) return res.status(404).json({ error: 'Admin not found' });
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching admin' });
  }
};

// Get all admins
const getAllAdminsController = async (req, res) => {
  try {
    const admins = await getAllAdmins();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching admins' });
  }
};

module.exports = { createAdminController, getAdminByIdController, getAllAdminsController };