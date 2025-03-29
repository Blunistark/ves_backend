# VES Backend

This is the backend for the VES Student & Parent Portal. It is built using **Node.js** and **Express.js** and connects to a **PostgreSQL** database for managing user authentication and other functionalities.

---

## **Features**
- User authentication (login and registration)
- JWT-based authentication
- Database integration with PostgreSQL
- API endpoints for managing users and other resources

---

## **Requirements**
- Node.js (v14 or higher)
- PostgreSQL
- npm (Node Package Manager)

---

## **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone <repository-url>
cd backend
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Configure Environment Variables**
Create a `.env` file in the root of the `backend` directory and add the following variables:

```env
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_database_name
PORT=5000
JWT_SECRET=your_secret_key

EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your_email@example.com
EMAIL_PASSWORD=your_email_password
EMAIL_FROM="Your App Name <your_email@example.com>"
```

Replace the placeholders with your actual configuration values.

### **4. Set Up the Database**
- Create a PostgreSQL database.
- Run the necessary SQL scripts to create tables (e.g., `users` table).
- Example `users` table schema:
  ```sql
  CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      role VARCHAR(20) NOT NULL CHECK (role IN ('admin', 'student', 'teacher')),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```

### **5. Start the Server**
```bash
npm run dev
```

The server will start on `http://localhost:5000`.

---

## **API Endpoints**

### **Authentication**
- **POST** `/auth/login`  
  Request Body:
  ```json
  {
      "email": "admin@example.com",
      "password": "admin123"
  }
  ```
  Response:
  ```json
  {
      "token": "your-jwt-token",
      "user": {
          "id": 1,
          "email": "admin@example.com",
          "role": "admin"
      }
  }
  ```

- **POST** `/auth/register`  
  Request Body:
  ```json
  {
      "username": "newuser",
      "email": "newuser@example.com",
      "password": "password123"
  }
  ```

---

## **Development Scripts**
- **Start the server**: `npm start`
- **Start the server in development mode**: `npm run dev`

---

## **Project Structure**
```
backend/
├── config/
│   └── db.js          # Database connection
├── controllers/
│   └── authController.js # Authentication logic
├── models/
│   └── userModel.js   # Database queries for users
├── routes/
│   └── authRoutes.js  # Authentication routes
├── .env               # Environment variables (not included in version control)
├── .gitignore         # Ignored files and directories
├── package.json       # Node.js dependencies and scripts
└── server.js          # Entry point for the backend
```

---

## **Contributing**
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your fork.
4. Submit a pull request.

---

## **License**
This project is licensed under the MIT License.
