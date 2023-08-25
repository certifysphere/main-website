---
slug: react-python-flask-mongo-todo-app
title: Build a Todos React App using Python Flask Rest API and MongoDB Database
authors:
  name: Vishal
tags: [react, python, flask, mongodb, restapi]
---
In this tutorial, we will build a full-stack TODOs management application that allows users to create, read, update, and delete todos. We will use React for the frontend user interface and Python Flask for the backend REST API and integrating MongoDB for data storage. By the end of this tutorial, you will have a functional Todo application with CRUD operations. I'll guide you through each step, including installation, setting up the backend, frontend, and database, and explaining the code in detail.


### Prerequisites
- Basic knowledge of Python, JavaScript, and web development concepts.
- Node.js and npm installed.
- MongoDB installed and running.

Before we begin, make sure you have the following software installed:

1. [Node.js and npm](https://nodejs.org/): Node.js is a JavaScript runtime, and npm is a package manager for Node.js.

2. [Python](https://www.python.org/): Python is a versatile programming language.

3. [MongoDB](https://www.mongodb.com/try/download/community): MongoDB is a NoSQL database for storing data.

4. [Flask](https://flask.palletsprojects.com/en/2.1.x/installation/): Flask is a micro web framework for Python.

These links will provide you with direct access to the respective download pages, making it easy for you to install the required software components for building your full-stack Todo CRUD application.

Let's get started:

## Part 1: Setting Up the Python Flask Backend

**Step 1: Create a New Flask App**

Create a new directory for your project and navigate to it in your terminal:

```bash
mkdir todo-app
cd todo-app
```

**Step 2: Set Up a Virtual Environment**

Create and activate a virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
```

**Step 3: Install Flask and Required Packages**

Install Flask and the `pymongo` package for MongoDB integration:

```bash
pip install Flask pymongo
```

**Step 4: Create the Backend App**

Inside your project directory, create a file named `app.py`.

```python
# app.py
from flask import Flask, request, jsonify
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/todo_app"
mongo = PyMongo(app)

# Routes for CRUD operations
# ...

if __name__ == '__main__':
    app.run(debug=True)
```

**Step 5: Implement CRUD Operations**

Update the `app.py` file to include routes for CRUD operations using MongoDB:

```python
# app.py
# ... (previous code)

@app.route('/api/todos', methods=['POST'])
def create_todo():
    title = request.json.get('title')
    new_todo = {'title': title, 'completed': False}
    result = mongo.db.todos.insert_one(new_todo)
    new_todo['_id'] = str(result.inserted_id)
    return jsonify(new_todo), 201

@app.route('/api/todos', methods=['GET'])
def get_todos():
    todos = list(mongo.db.todos.find({}))
    for todo in todos:
        todo['_id'] = str(todo['_id'])
    return jsonify(todos)

# Add routes for update and delete operations

# ...
```

## Part 2: Building the React Frontend

**Step 1: Create a New React App**

Open a new terminal window and navigate to your project directory:

```bash
cd todo-app
```

Create a new React app:

```bash
npx create-react-app frontend
cd frontend
```

**Step 2: Install Axios**

Inside the `frontend` directory, install Axios to make API requests:

```bash
npm install axios
```

**Step 3: Create the TodoList Component**

Replace the contents of `src/App.js` with the following code:

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get('/api/todos');
    setTodos(response.data);
  };

  const handleCreate = async () => {
    if (newTodo.trim() === '') return;
    await axios.post('/api/todos', { title: newTodo });
    setNewTodo('');
    fetchTodos();
  };

  // Add functions for update and delete operations

  return (
    <div className="App">
      <h1>Todo App</h1>
      <input
        type="text"
        value={newTodo}
        onChange={event => setNewTodo(event.target.value)}
        placeholder="Enter a new todo"
      />
      <button onClick={handleCreate}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

## Part 3: Running the Application

**Step 1: Run the Backend**

In the terminal, navigate to your project directory and run the Flask backend:

```bash
source venv/bin/activate   # On Windows: venv\Scripts\activate
python app.py
```

**Step 2: Run the Frontend**

In a new terminal window, navigate to the `frontend` directory and start the React app:

```bash
cd todo-app/frontend
npm start
```

Your full-stack Todo CRUD application should now be running! Open your browser and visit `http://localhost:3000` to see the app in action.

 You've successfully built a Todo CRUD application using a Python Flask backend, a React frontend, and MongoDB for data storage! You can further enhance this application by adding features such as updating and deleting todos, user authentication, and more advanced UI/UX enhancements.