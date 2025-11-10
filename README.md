# Library Management API

A simple backend service built using **Node.js**, **Express.js**, and **MongoDB** with **Mongoose**, allowing users to manage authors and books.

---

## Objective

This project demonstrates backend development concepts including:
- REST API design
- MongoDB schema modeling with Mongoose
- CRUD operations
- Query filters and pagination
- Clean code structure and environment configuration

---

## Tech Stack

| Component | Technology |
|------------|-------------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB |
| ODM | Mongoose |
| Environment | dotenv |
| Validation (optional) | Joi / express-validator |

---

## Project Setup

###  Clone Repository

git clone https://github.com/YOUR_USERNAME/library-api.git
cd library-api

### Install Dependencies
# Create .env File

# Create .env File
PORT=3000

MONGO_URI=mongodb://127.0.0.1:27017/database_name


## Postman Collection

To make API testing easier, you can import the ready-to-use **Postman collection**.

### Download Link
[Library Management API.postman_collection.json](./library_management.postman_collection.json)


### How to Import
1. Open **Postman**
2. Click **Import**
3. Select the downloaded `Library_API.postman_collection.json` file
4. All API endpoints will appear under “Library Management API”


The collection includes:
- Create Author  
- Get All Authors  
- Create Book  
- Get All Books (with author details)  
- Search Books by Author Name  
- Update Book  
- Delete Boo