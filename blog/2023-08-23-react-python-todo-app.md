---
slug: react-python-flask-todo-app
title: Build a Todo Management Application with React and Python Flask
authors:
  name: Vishal
tags: [react, python, flask, restapi]
---
In this tutorial, we will build a Todo management application that allows users to create, read, update, and delete todos. We will use React for the frontend user interface and Python Flask for the backend REST API. By the end of this tutorial, you will have a functional Todo application with CRUD operations.

### Prerequisites

Before we begin, make sure you have the following software installed:

1. [Node.js and npm](https://nodejs.org/): Node.js is a JavaScript runtime, and npm is a package manager for Node.js.
2. [Python](https://www.python.org/): Python is a versatile programming language.
3. [Flask](https://flask.palletsprojects.com/en/2.1.x/installation/): Flask is a micro web framework for Python.

### Part 1: Setting Up the React Frontend

**Step 1: Create a New React App**

Open your terminal and navigate to the directory where you want to create your project.

```bash
npx create-react-app todo-app
cd todo-app
```

Run the following command to install Axios using npm:

```bash
npm install axios
```

**Step 2: Create the TodoList Component**

Inside the `src` directory, create a new folder named `components`. Inside the `components` folder, create a file named `TodoList.js`.

```jsx
// src/components/TodoList.js
import React, { useState, useEffect } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetch('/api/todos')
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  const handleCreate = () => {
    if (newTodo.trim() === '') return;
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: newTodo }),
    })
      .then(response => response.json())
      .then(data => {
        setTodos([...todos, data]);
        setNewTodo('');
      })
      .catch(error => console.error('Error creating todo:', error));
  };

  // Add functions for update and delete operations

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={event => setNewTodo(event.target.value)}
        placeholder="Enter new todo"
      />
      <button onClick={handleCreate}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
            {/* Add buttons and handlers for update and delete */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
```

**Step 3: Use the TodoList Component**

Open `src/App.js` and update it to use the `TodoList` component.

```jsx
// src/App.js
import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList />
      </header>
    </div>
  );
}

export default App;
```

**Step 4: Start the React App**

In the terminal, start the React app using:

```bash
npm start
```

Your React app should now be accessible at `http://localhost:3000`.

### Part 2: Setting Up the Python Flask Backend

**Step 1: Create a New Flask App**

Create a new directory for your backend code and navigate to it in the terminal.

```bash
mkdir flask-backend
cd flask-backend
```

**Step 2: Set Up a Virtual Environment**

Create and activate a virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
```

**Step 3: Install Flask**

Install Flask using pip:

```bash
pip install Flask
```

**Step 4: Create the Backend App**

Create a file named `app.py` in your backend directory.

```python
# app.py
from flask import Flask, jsonify, request

app = Flask(__name__)

todos = [
    {"id": 1, "title": "Buy groceries"},
    {"id": 2, "title": "Do laundry"},
]

next_id = len(todos) + 1

# Define routes for CRUD operations
# ...

if __name__ == '__main__':
    app.run(debug=True)
```

**Step 5: Implement CRUD Operations**

Add the CRUD routes and operations to the `app.py` file. 

```python
from flask import Flask, jsonify, request

app = Flask(__name__)

todos = [
    {"id": 1, "title": "Buy groceries"},
    {"id": 2, "title": "Do laundry"},
]

next_id = len(todos) + 1

# Get all todos
@app.route('/api/todos', methods=['GET'])
def get_todos():
    return jsonify(todos)

# Get a single todo by ID
@app.route('/api/todos/<int:todo_id>', methods=['GET'])
def get_todo(todo_id):
    todo = next((t for t in todos if t['id'] == todo_id), None)
    if todo:
        return jsonify(todo)
    return jsonify({"message": "Todo not found"}), 404

# Create a new todo
@app.route('/api/todos', methods=['POST'])
def create_todo():
    global next_id
    data = request.json
    new_todo = {"id": next_id, "title": data["title"]}
    todos.append(new_todo)
    next_id += 1
    return jsonify(new_todo), 201

# Update an existing todo
@app.route('/api/todos/<int:todo_id>', methods=['PUT'])
def update_todo(todo_id):
    data = request.json
    todo = next((t for t in todos if t['id'] == todo_id), None)
    if todo:
        todo['title'] = data['title']
        return jsonify(todo)
    return jsonify({"message": "Todo not found"}), 404

# Delete a todo
@app.route('/api/todos/<int:todo_id>', methods=['DELETE'])
def delete_todo(todo_id):
    global todos
    todos = [t for t in todos if t['id'] != todo_id]
    return jsonify({"message": "Todo deleted"}), 200

if __name__ == '__main__':
    app.run(debug=True)
```

### Part 3: Connecting Frontend and Backend

**Step 1: Fetch Data from Backend**

Update the `TodoList.js` component to fetch todos from the backend API and add other operations to update and delete todos.

```jsx
// src/components/TodoList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    
    const API_ENDPOINT = "http://127.0.0.1:5000";

    useEffect(() => {
        fetchTodos();
    }, []);
    // Add functions for update and delete operations

    const fetchTodos = async () => {
        try {
            const response = await axios.get(API_ENDPOINT + '/api/todos');
            setTodos(response.data);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    const addTodo = async () => {
        try {
            const response = await axios.post(API_ENDPOINT + '/api/todos', { title: newTodo });
            setTodos([...todos, response.data]);
            setNewTodo('');
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    const deleteTodo = async (id) => {
        try {
            await axios.delete(API_ENDPOINT + `/api/todos/${id}`);
            setTodos(todos.filter(todo => todo.id !== id));
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };
    return (
        <div>
            <h1>Todo App</h1>
            <div>
                <input
                    type="text"
                    value={newTodo}
                    onChange={e => setNewTodo(e.target.value)}
                    placeholder="Enter a new todo"
                />
                <button onClick={addTodo}>Add</button>
            </div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title}{' '}
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
```
Note  - Update API_ENDPOINT to correct port if running Flask app on any other port than default 5000.

**Step 2: Enable CORS**

The CORS (Cross-Origin Resource Sharing) error occurs when a web application running at one origin (domain) tries to make a request to a server located at a different origin. By default, browsers enforce the same-origin policy, which restricts these cross-origin requests for security reasons. To resolve CORS errors, you need to configure your Flask backend to allow requests from your React frontend's domain.

Here's how you can resolve CORS errors in a Flask backend:

1. Install the `Flask-CORS` extension:

If you haven't already installed `Flask-CORS`, you need to do so using the following command:

```bash
cd flask-backend
pip install Flask-CORS
```

2. Import and use `CORS` in your Flask app:

In your Flask `app.py` file, import and use the `CORS` extension to enable cross-origin requests from your React frontend. You need to specify the `origins` parameter to allow requests from your frontend's domain.

```python
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="http://localhost:3000")  # Replace with your React app's URL

# ... (other routes and code)
```

Replace `"http://localhost:3000"` with the actual URL of your React frontend. This configuration will allow requests from your React app's domain.

3. Enable CORS for specific routes:

You can also enable CORS for specific routes if needed. For example:

```python
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})
```

This would enable CORS only for routes under `/api/`.

4. Restart your Flask server:

After making these changes, restart your Flask server so that the CORS configuration takes effect.

With these steps, your Flask backend should allow cross-origin requests from your React frontend, and you should no longer encounter CORS errors. Remember that enabling CORS should be done with caution and consideration for security, and it's important to restrict allowed origins to only the domains that need access to your backend API.

### Summary

You've built a Todo management application with CRUD operations using React for the frontend and Python Flask for the backend. This application allows users to create, read, and delete todos. Remember that this is a simplified example, and you can further enhance the application with error handling, validation, user authentication, and database integration.

### Github Repo
:::info
  You can refer to and clone the code samples for this tutorial from the [GitHub repository](https://github.com/certifysphere/python-code-samples).

  To clone the repository, you can use the following command:

  ```bash
  git clone https://github.com/certifysphere/python-code-samples.git
  ```

  You can then navigate to the `/src/todo-react-python` directory to access all the code samples given in this tutorial. 
:::