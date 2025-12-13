# Simple E-Commerce Backend API

A simple **E-Commerce backend REST API** built with **Node.js** and **Express.js**. The project is designed for learning purposes and runs locally, using a local data source (file-based or local database).

---

## 📌 Project Overview

This project provides a basic backend structure for an e-commerce application, including routing, controllers, models, and middleware. It exposes RESTful APIs that can be consumed by a web frontend.

---

## 🧱 Tech Stack

- Node.js
- Express.js
- REST API
- dotenv
- nodemon

---

## 📁 Project Structure

```text
src/
├── controllers/   # Business logic
├── middlewares/   # Custom middlewares
├── models/        # Data models (local data / file-based)
├── routes/        # API routes
└── server.js      # Server entry point
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=5000
```

> ⚠️ Do not commit your `.env` file to version control.

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
```

Navigate to the project directory and install dependencies:

```bash
npm install
```

---

## ▶️ Running the Project

Start the server using:

```bash
npm start
```

The server will run locally on:

```
http://localhost:PORT
```

(Replace `PORT` with the value defined in your `.env` file.)

---

## 🔌 API Usage

This project exposes REST API endpoints that can be tested using tools like:

- Postman
- Thunder Client
- cURL

> API endpoints can be found inside the `routes` directory.

---

---

## 📦 Products API

Base URL:

### Get all products

**GET** `/api/products`

### Get product by ID

**GET** `/api/products/:id`

### Create a new product

**POST** `/api/products`

### Update a product

**PUT** `/api/products/:id`

### Delete a product

**DELETE** `/api/products/:id`

### Get products by category

**GET** `/api/products/category/:category`

> ℹ️ This API currently uses in-memory mock data for development purposes.

---

## 📦 Categories API

### Get all categories

**GET** `/api/categories`

### Create a new category

**POST** `/api/categories`

### Update a category

**PUT** `/api/categories/:id`

### Delete a category

**DELETE** `/api/categories/:id`

> ℹ️ This API uses in-memory mock data for development purposes.

---

## 🛒 Cart API

### Get cart

**GET** `/api/cart`

### Add item to cart

**POST** `/api/cart`

Request body example:

```json
{
  "productId": 1,
  "quantity": 2
}





## 📝 Notes

- This project is intended for **learning and practice**.
- Data persistence is local (file-based or local storage).
- No authentication or payment gateway is implemented yet.

---

## 🚀 Future Improvements

- Add authentication (JWT)
- Connect to a real database (MongoDB / MySQL)
- Add product & order validation
- Implement user roles (admin / user)

---

## 📄 License

This project is open-source and available for educational use.

```

```
