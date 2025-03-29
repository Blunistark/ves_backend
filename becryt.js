const bcrypt = require('bcrypt');
const hashedPassword = bcrypt.hashSync('admin123', 10);
console.log(hashedPassword);