const { ROLES } = require('../config/constants');

const authorize = (allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.user?.role; // Extract the user's role from the request object
    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ error: 'Access denied. Insufficient permissions.' });
    }
    next(); // Proceed to the next middleware or route handler
  };
};

module.exports = { authorize };