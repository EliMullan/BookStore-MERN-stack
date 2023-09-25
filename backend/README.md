# MERN Stack Backend

Welcome to the backend part of the MERN stack project. This backend server is responsible for handling data operations and serving data to the frontend application. Below are instructions on setting up and using the backend.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. **Clone the repository to your local machine:**

   ```bash
   git clone [https://github.com/EliMullan/BookStore-MERN-stack.git]

2. **Navigate to the backend folder:

   ```bash
   cd backend


3. **Install the required npm packages:

   ```bash
   npm install

## Configuration

In the config.js file, make sure to configure the following variables according to your setup:
-PORT: The port number on which the server will run.
-mongoDBURL: The connection URL for your MongoDB database.

5. **Starting the Server**

   ```bash
   npm start

The server will start and connect to your MongoDB database. You should see a message indicating that the app is connected to the database and listening on the specified port.

## API Endpoints

### GET /

- **Description**: This endpoint serves as the root route and provides a welcome message.
- **Example**: `http://localhost:PORT/`
- **Response**: A welcome message.

### GET /books

- **Description**: This endpoint retrieves a list of books from the database.
- **Example**: `http://localhost:PORT/books`
- **Response**: JSON data containing a list of books.

### POST /books

- **Description**: This endpoint allows you to add a new book to the database.
- **Example**: `http://localhost:PORT/books`
- **Request Body**: JSON data representing the new book.
- **Response**: JSON data of the newly added book.

### PUT /books/:id

- **Description**: This endpoint allows you to update an existing book by its ID.
- **Example**: `http://localhost:PORT/books/123`
- **Request Body**: JSON data with the updated book information.
- **Response**: JSON data of the updated book.

### DELETE /books/:id

- **Description**: This endpoint allows you to delete a book by its ID.
- **Example**: `http://localhost:PORT/books/123`
- **Response**: A success message.

## CORS Policy

The backend server is configured to handle Cross-Origin Resource Sharing (CORS) to ensure secure communication with the frontend application. By default, it allows requests from `http://localhost:5173` and supports the following HTTP methods: GET, POST, PUT, DELETE.

Please adjust the CORS configuration in the `index.js` file as needed to match your frontend's URL.
