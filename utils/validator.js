// Validate email format
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Validate password strength (minimum 8 characters, at least one letter and one number)
  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };
  
  // Validate if a string is not empty
  const isNotEmpty = (value) => {
    return value && value.trim().length > 0;
  };
  
  // Validate if a value is a valid date
  const isValidDate = (date) => {
    return !isNaN(Date.parse(date));
  };
  
  module.exports = { isValidEmail, isValidPassword, isNotEmpty, isValidDate };