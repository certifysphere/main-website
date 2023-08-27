---
slug: react-python-flask-postgres-ecomerce-app
title: Build an Ecomerce App using React for UI,  Python Flask Rest API and Postgres Database
authors:
  name: Vishal
tags: [react, python, flask, postgres, restapi, ecomerce]
---
Building a full-stack eCommerce website involves creating both the frontend (using React) and the backend (using Python with Flask) components, as well as setting up a PostgreSQL database. In this tutorial, I'll guide you through the process step by step, including creating an admin interface for managing listings and a customer interface for viewing and ordering items.


### Setting Up Local Development Environment
Setting up your local development environment is an essential step before you start building your eCommerce website. Below, I'll provide step-by-step instructions for installing Python, React, Node.js, npm, Postgres, and Visual Studio Code.You can skip to next section if you already have all or any of these software installed in your local system.

#### Install Python

1. Visit the official Python website: [https://www.python.org/downloads/](https://www.python.org/downloads/)
2. Download the latest version of Python for your operating system (Windows, macOS, or Linux).
3. Run the installer and make sure to check the "Add Python to PATH" option during installation.

#### Install Node.js and npm

1. Visit the official Node.js website: [https://nodejs.org/](https://nodejs.org/)
2. Download the LTS version of Node.js for your operating system.
3. Run the installer and follow the installation instructions.
4. To verify that Node.js and npm are installed, open your terminal and run the following commands:

```bash
node -v
npm -v
```

#### Install PostgreSQL

1. Download PostgreSQL: [https://www.postgresql.org/download/](https://www.postgresql.org/download/)
2. Choose your operating system and download the installer.
3. Run the installer and follow the installation instructions. Make note of the database username and password you set during installation.

#### Install Visual Studio Code (VS Code)

1. Download Visual Studio Code: [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Choose your operating system and download the installer.
3. Run the installer and follow the installation instructions.


Let's start app development by setting up the backend:

### Part 1: Setting Up the Python Backend with Flask

**Step 1: Create a New Directory and Set Up Virtual Environment**

Open your terminal and create a new directory for your project. Then, navigate into the directory and set up a virtual environment:

```bash
mkdir ecommerce-project
cd ecommerce-project
python3 -m venv venv
source venv/bin/activate
```

**Step 2: Install Required Libraries**

Install Flask, Flask-CORS, and psycopg2 (for PostgreSQL) using pip:

```bash
pip install Flask Flask-CORS psycopg2
```

**Step 3: Create the Backend**

Create a file named `app.py` and add the following code:

```python
from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2

app = Flask(__name__)
CORS(app)

# Connect to PostgreSQL database
conn = psycopg2.connect(
    dbname="your_database_name",
    user="your_database_user",
    password="your_database_password",
    host="localhost",
    port="5432"
)
cursor = conn.cursor()

# Create table
cursor.execute("""
    CREATE TABLE IF NOT EXISTS items (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        price FLOAT NOT NULL
    )
""")
conn.commit()

@app.route('/api/items', methods=['GET'])
def get_items():
    cursor.execute("SELECT id, name, price FROM items")
    items = cursor.fetchall()
    return jsonify(items)

if __name__ == '__main__':
    app.run(debug=True)
```

Replace `"your_database_name"`, `"your_database_user"`, and `"your_database_password"` with your PostgreSQL database details.

**Step 4: Run the Backend**

Run the Flask backend:

```bash
python app.py
```

Your backend API should be accessible at `http://localhost:5000/api/items`.

### Part 2: Creating the React Frontend

**Step 1: Set Up the React App**

In a new terminal window, navigate to your project directory and create a new React app:

```bash
npx create-react-app frontend
cd frontend
```

**Step 2: Install Required Libraries**

Install Bootstrap and axios:

```bash
npm install bootstrap axios
```

**Step 3: Create React Components**

Replace the contents of `src/App.js` with the following code:

```jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/items');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Ecommerce Website</h1>
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">${item.price}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
```

**Step 4: Run the React App**

Run the React app:

```bash
npm start
```

Your React frontend should be accessible at `http://localhost:3000`.

This completes the setup for the frontend and backend of your eCommerce website.
