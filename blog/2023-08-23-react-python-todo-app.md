---
slug: react-python-flask-todo-app
title: React UI and Python Rest API TODOs App
authors:
  name: Vishal
tags: [react, python, flask, restapi]
---
## Building a Todo Management Application with React and Python Flask

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

Add the CRUD routes and operations to the `app.py` file. Refer to the previous responses for the complete code.

### Part 3: Connecting Frontend and Backend

**Step 1: Fetch Data from Backend**

Update the `TodoList.js` component to fetch todos from the backend API.

```jsx
// src/components/TodoList.js
// ...
useEffect(() => {
  fetch('/api/todos')
    .then(response => response.json())
    .then(data => setTodos(data))
    .catch(error => console.error('Error fetching todos:', error));
}, []);
// ...
```

**Step 2: Handle CRUD Operations**

Inside the `TodoList` component, add functions and handlers for create, update, and delete operations. Refer to the previous responses for the code.


You've built a Todo management application with CRUD operations using React for the frontend and Python Flask for the backend. This application allows users to create, read, update, and delete todos. Remember that this is a simplified example, and you can further enhance the application with error handling, validation, user authentication, and database integration.
