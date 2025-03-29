const bcrypt = require('bcrypt');
const { generateToken } = require('../config/auth');
const { createUser, getUserByEmail } = require('../models/userModel');
const jwt = require('jsonwebtoken');

// Register a new user
const registerController = async (req, res) => {
  const { username, password, role, email } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser(username, hashedPassword, role, email);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
};

// Login a user
const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
      if (!email || !password) {
          return res.status(400).json({ error: 'Email and password are required' });
      }

      // Fetch user by email
      const user = await getUserByEmail(email); // Update your model to query by email
      if (!user) {
          return res.status(401).json({ error: 'Invalid email or password' });
      }

      // Compare passwords
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
          return res.status(401).json({ error: 'Invalid email or password' });
      }

      // Generate JWT token
      const token = jwt.sign(
          { id: user.id, email: user.email, role: user.role },
          process.env.JWT_SECRET,
          { expiresIn: '1h' }
      );

      res.json({
          token,
          user: {
              id: user.id,
              email: user.email,
              role: user.role,
          },
      });
  } catch (error) {
      console.error('Error logging in:', error);
      console.log('Request body:', req.body);
      console.log('Response:', { token, user });  
      res.status(500).json({ error: 'Error logging in' });
  }
};


module.exports = { registerController, loginController };