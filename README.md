# 🛒 MERN Stack E-Commerce Project

This project is a full-stack e-commerce application built using the **MERN stack** (MongoDB, Express, React, Node.js). It's based on the comprehensive [Udemy course by Yehia Tech (Arabic)](https://www.udemy.com/course/yehiatech-react-nodejs-express-mongodb-in-arabic/), which guides learners through building a modern e-commerce app from scratch and includes modern tools like Vite and MUI for a sleek frontend experience..

**YEHIA ELARABY - Course MERN @yehia.tech**

<!-- > Instructor: **Yehia Elaraby**
> 🔗 [GitHub @yaya1426](https://github.com/yaya1426) | 📽 [Instagram Demo](https://www.instagram.com/reel/CtEbwTWIY2c) -->

## 🚀 Live Code & Source

- 🔗 **GitHub Repository**: [E-Commerce_MERN](https://github.com/yaya1426/E-Commerce_MERN)
- 🔗 **Developer Profile**: [@yaya1426](https://github.com/yaya1426)
- 🔗 **Instagram Demo (Reel)**: [See Demo](https://www.instagram.com/reel/CtEbwTWIY2c)

---

## 🛠 Tools & Technologies

### Frontend

- **React**: A JavaScript library for building user interfaces.  
  👉 [react - npm](https://www.npmjs.com/package/react)

- **Vite**: Fast frontend tooling with modern build setup.  
  👉 [Vite Official Site](https://vite.dev)  
  👉 [Vite Getting Started](https://vite.dev/guide)

- **Material UI (MUI)**: Modern React UI framework.  
  👉 [MUI Docs](https://mui.com/material-ui/getting-started)  
  👉 [MUI Installation Guide](https://mui.com/material-ui/getting-started/installation)

- **Visual Studio Code**: Preferred code editor.  
  👉 [Download VS Code](https://code.visualstudio.com)

| Tool                                               | Description                        |
| -------------------------------------------------- | ---------------------------------- |
| [React](https://www.npmjs.com/package/react)       | JavaScript library for building UI |
| [Vite](https://vite.dev)                           | Lightning-fast frontend build tool |
| [MUI](https://mui.com/material-ui/getting-started) | React UI library for styling       |
| [VS Code](https://code.visualstudio.com)           | Recommended code editor            |

---

### Backend

- **Node.js**: JavaScript runtime for building server-side applications.  
  👉 [Node.js Download](https://nodejs.org/en/download)

- **Express.js**: Fast, minimalist web framework for Node.js.  
  👉 [Express Installation](https://expressjs.com/en/starter/installing.html)  
  👉 [Express Routing Guide](https://expressjs.com/en/guide/routing.html)

- **MongoDB**: NoSQL database used for storing application data.  
  👉 [Download MongoDB Community](https://www.mongodb.com/try/download/community)  
  👉 [MongoDB Atlas Optimization](https://www.mongodb.com/docs/atlas/schema-suggestions/reduce-lookup-operations)

- **Mongoose**: MongoDB object modeling tool designed for asynchronous environments.  
  👉 [mongoose - npm](https://www.npmjs.com/package/mongoose)

- **CORS**: Middleware for enabling Cross-Origin Resource Sharing.  
  👉 [cors - npm](https://www.npmjs.com/package/cors)

- **Nodemon**: Automatically restarts Node app when file changes are detected.  
  👉 [Nodemon Site](https://nodemon.io)  
  👉 [nodemon - npm](https://www.npmjs.com/package/nodemon)

- **ts-node**: Execute TypeScript files directly.  
  👉 [ts-node - npm](https://www.npmjs.com/package/ts-node)

| Tool                                                                                                 | Description                          |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------ |
| [Node.js](https://nodejs.org/en/download)                                                            | JavaScript runtime for server-side   |
| [Express.js](https://expressjs.com/en/starter/installing.html)                                       | Web framework for Node.js            |
| [MongoDB Community](https://www.mongodb.com/try/download/community)                                  | NoSQL database                       |
| [MongoDB Atlas Docs](https://www.mongodb.com/docs/atlas/schema-suggestions/reduce-lookup-operations) | Cloud optimization guide             |
| [Mongoose](https://www.npmjs.com/package/mongoose)                                                   | MongoDB ODM                          |
| [CORS](https://www.npmjs.com/package/cors)                                                           | Middleware for cross-origin requests |
| [Nodemon](https://nodemon.io)                                                                        | Auto-reload backend server           |
| [ts-node](https://www.npmjs.com/package/ts-node)                                                     | Run TypeScript directly in Node.js   |

---

## 🔐 Authentication

- **JWT (JSON Web Tokens)**: For securely transmitting user identity and authentication data.  
  👉 [jwt.io](https://jwt.io)  
  👉 [JWT Explained on GeeksforGeeks](https://www.geeksforgeeks.org/json-web-token-jwt)

- **Random Key Generator**: Useful tool for generating secure secret keys.  
  👉 [Random Key Generator](https://acte.ltd/utils/randomkeygen)

## 🔐 Authentication & Security

| Tool                                                                      | Description                       |
| ------------------------------------------------------------------------- | --------------------------------- |
| [JWT](https://jwt.io)                                                     | JSON Web Token for authentication |
| [JWT Explanation - GFG](https://www.geeksforgeeks.org/json-web-token-jwt) | JWT guide for beginners           |
| [Random Key Generator](https://acte.ltd/utils/randomkeygen)               | Create secure secret keys         |

---

## 📦 Development Tools

- **Git**: Distributed version control system.  
  👉 [Git Downloads](https://git-scm.com/downloads)

- **MIME Types Reference**: Useful guide for file content types in HTTP.  
  👉 [Common MIME Types - MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types/Common_types)

| Tool                                                                                                 | Description            |
| ---------------------------------------------------------------------------------------------------- | ---------------------- |
| [Git](https://git-scm.com/downloads)                                                                 | Version control system |
| [MIME Types - MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types/Common_types) | Common content types   |

---

## 🧑‍💻 How to Install and Run the Project Locally

> Make sure Node.js and MongoDB are installed on your system.
> Follow these steps to run the MERN E-Commerce project on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/yaya1426/E-Commerce_MERN.git
cd E-Commerce_MERN
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file inside the `backend/` directory and add the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

> Replace `your_mongodb_connection_string` and `your_secret_key` with your own/actual values.

### 4. Start the Backend Server

```bash
npm run dev
```

> Uses **nodemon** for automatic reloads.
> This runs the server with nodemon for live reload on code changes.

### 5. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

### 6. Run the Frontend App

```bash
npm run dev
```

> Runs the React app using **Vite** for fast development.

---

## 🌐 Localhost URLs

**✅ The app should now be running on:**

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend: [http://localhost:5000](http://localhost:5000)

---

## 📚 Reference Course

This project is inspired by the Udemy course:

> **"Build a Full MERN Stack E-Commerce Project (in Arabic)"**  
> 🔗 [Watch the full course on Udemy](https://www.udemy.com/course/yehiatech-react-nodejs-express-mongodb-in-arabic)

---

## 📌 Notes

- Make sure to install Node.js and MongoDB locally before starting.
- Use `npm install` in both frontend and backend directories.
- For live reloading in the backend, use `nodemon index.js` or your main server file.

---

## 📄 License & Credits

This project is built for educational purposes and inspired by [Yehia Tech’s](https://github.com/yaya1426) course. All tools, packages, and library/frameworks used are open-source and credited to their respective creators.

---
