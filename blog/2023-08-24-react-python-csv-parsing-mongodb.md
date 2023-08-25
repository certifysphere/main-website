---
slug: react-python-csv-file-processing-mongo
title: Python CSV FIle Processing, Storing Data in MongoDB, View Data in React UI
authors:
  name: Vishal
tags: [react, python, files, flask, mongodb, restapi]
---
In this tutorial, we'll walk you through building a full-stack web application to visualize USA soccer team data. We'll use a Python Flask backend to process publicly avaiable USA soccer team CSV data and store it in a MongoDB database, and a React frontend to display and visualize the data.

### Part 1: Setting Up the Python Backend

**Step 1: Install Required Libraries**

Install the necessary libraries for working with CSV files and interacting with MongoDB:

```bash
pip install pandas pymongo flask
```

**Step 2: Create the Backend Script**

Create a Python script named `process_soccer_data.py`:

```python
import pandas as pd
from pymongo import MongoClient
from flask import Flask, jsonify

app = Flask(__name__)

# Read CSV and convert it to a list of dictionaries
data = pd.read_csv("https://cdn.jsdelivr.net/gh/gavinr/usa-soccer@master/mls.csv")

# Select desired columns
selected_columns = [
    "team", "city", "state", "latitude", "longitude",
    "stadium", "stadium_capacity", "founded", "joined",
    "head_coach", "url", "wikipedia_url", "logo_url"
]
data = data[selected_columns]

# Convert data to a list of dictionaries
records = data.to_dict(orient="records")

# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["soccer"]
collection = db["mls"]

# Insert records into MongoDB
collection.insert_many(records)
print("Data inserted into MongoDB.")

@app.route('/api/soccer')
def get_soccer_data():
    soccer_data = list(collection.find({}))
    for item in soccer_data:
        item['_id'] = str(item['_id'])
    return jsonify(soccer_data)

if __name__ == '__main__':
    app.run(debug=True)
```
 Let's break down the this Python code step by step to understand what each part is doing. This code sets up a Flask web application that reads data from a CSV file, processes it, stores it in a MongoDB database, and provides a REST API to retrieve the stored soccer team data.

**Step 1: Import Required Libraries**

```python
import pandas as pd
from pymongo import MongoClient
from flask import Flask, jsonify
```

- `pandas`: A library used for data manipulation and analysis, including reading CSV files.
- `pymongo`: A library used to interact with MongoDB.
- `Flask`: A micro web framework for building web applications in Python.

**Step 2: Create a Flask App**

```python
app = Flask(__name__)
```

- Creates a Flask web application instance named `app`.

**Step 3: Read CSV Data**

```python
data = pd.read_csv("https://cdn.jsdelivr.net/gh/gavinr/usa-soccer@master/mls.csv")
```

- Uses pandas to read the CSV data from the provided URL and stores it in the `data` variable.

**Step 4: Select Desired Columns**

```python
selected_columns = [
    "team", "city", "state", "latitude", "longitude",
    "stadium", "stadium_capacity", "founded", "joined",
    "head_coach", "url", "wikipedia_url", "logo_url"
]
data = data[selected_columns]
```

- Defines a list of column names that are desired from the CSV data.
- Filters the `data` DataFrame to keep only the columns listed in `selected_columns`.

**Step 5: Convert Data to Dictionaries**

```python
records = data.to_dict(orient="records")
```

- Converts the filtered `data` DataFrame into a list of dictionaries using the `to_dict` method with the `orient="records"` argument.

**Step 6: Connect to MongoDB**

```python
client = MongoClient("mongodb://localhost:27017/")
db = client["soccer"]
collection = db["mls"]
```

- Creates a MongoDB client that connects to a MongoDB server running on the default localhost address and port (`27017`).
- Defines a database named `soccer` and a collection named `mls` within that database.

**Step 7: Insert Records into MongoDB**

```python
collection.insert_many(records)
print("Data inserted into MongoDB.")
```

- Inserts the list of dictionaries (`records`) into the `mls` collection in the MongoDB database.
- Prints a message to indicate that the data insertion is complete.

**Step 8: Define API Endpoint for Soccer Data**

```python
@app.route('/api/soccer')
def get_soccer_data():
    soccer_data = list(collection.find({}))
    for item in soccer_data:
        item['_id'] = str(item['_id'])
    return jsonify(soccer_data)
```

- Decorates a function to handle requests to the `/api/soccer` endpoint.
- Retrieves all documents from the `mls` collection and converts the MongoDB `_id` to a string format.
- Returns the soccer data as JSON response using the `jsonify` function.

**Step 9: Run the Flask App**

```python
if __name__ == '__main__':
    app.run(debug=True)
```

- Checks if the script is being run directly (not imported as a module).
- Starts the Flask development server with the `debug` mode enabled.

 This code sets up a Flask web application to read soccer team data from a CSV file, store it in a MongoDB database, and provide a REST API to retrieve the data. It's a basic example and can be further customized and expanded for production use.


### Part 2: Building the React Frontend

**Step 1: Set Up the React App**

Create a new React app and navigate to its directory:

```bash
npx create-react-app soccer-visualization
cd soccer-visualization
```

**Step 2: Install Bootstrap**

Install Bootstrap for styling:

```bash
npm install bootstrap axios
```

**Step 3: Update the React UI**

Replace the contents of `src/App.js` with the following code:

```jsx
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchSoccerData();
  }, []);

  const fetchSoccerData = async () => {
    try {
      const response = await axios.get("/api/soccer");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching soccer data:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">USA Soccer Team Data</h1>
      <div className="row">
        {data.map((record, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{record.team}</h5>
                <p className="card-text">{record.city}, {record.state}</p>
                <p className="card-text">Stadium: {record.stadium}</p>
                <a href={record.wikipedia_url} className="btn btn-primary">
                  Wikipedia
                </a>
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
 This code is a React component written in JSX, which is used to create the user interface for our soccer team data visualization app. Let's break down the code step by step to understand what each part is doing:

**Step 1: Import Required Libraries**

```jsx
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
```

- Imports React, which is the core library for building UI components.
- Imports `useState` and `useEffect` from the `react` module, which are React hooks for managing state and handling side effects, respectively.
- Imports the `App.css` file for styling the component.
- Imports `axios`, a library used for making HTTP requests.

**Step 2: Define the App Component**

```jsx
function App() {
  // State to store soccer data
  const [data, setData] = useState([]);

  // Fetch data when the component mounts
  useEffect(() => {
    fetchSoccerData();
  }, []);

  // Function to fetch soccer data
  const fetchSoccerData = async () => {
    try {
      const response = await axios.get("/api/soccer");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching soccer data:", error);
    }
  };
```

- Defines the `App` functional component using the arrow function syntax.
- Uses the `useState` hook to create a state variable named `data`, initialized as an empty array.
- Uses the `useEffect` hook to run the `fetchSoccerData` function when the component mounts (similar to `componentDidMount` in class components).
- Defines the `fetchSoccerData` function, which makes an HTTP GET request to the `/api/soccer` endpoint using `axios`.
- If the request is successful, updates the `data` state with the fetched soccer data.
- If there's an error, logs an error message to the console.

**Step 3: Render the UI**

```jsx
  return (
    <div className="container mt-5">
      <h1 className="mb-4">USA Soccer Team Data</h1>
      <div className="row">
        {data.map((record, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{record.team}</h5>
                <p className="card-text">{record.city}, {record.state}</p>
                <p className="card-text">Stadium: {record.stadium}</p>
                <a href={record.wikipedia_url} className="btn btn-primary">
                  Wikipedia
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

- Returns the JSX that defines the user interface of the component.
- The UI consists of a container with a title and a row of soccer team cards.
- Maps over the `data` array using the `map` function to create a card for each soccer team record.
- The `key` attribute is set to the index for efficient rendering.
- Displays the team name, city, state, stadium name, and a Wikipedia link for each record.
- Styling classes from the Bootstrap framework are used for formatting.

**Step 4: Export the Component**

```jsx
export default App;
```

- Exports the `App` component to make it available for other parts of your application.

This React component fetches soccer team data from the `/api/soccer` endpoint using `axios`, stores it in the `data` state, and renders the data as cards with information about each soccer team. The component takes advantage of React hooks for state management and side effects, making it a concise and effective way to handle data fetching and rendering in your app.

### Part 3: Running the Application

**Step 1: Run the Backend**

In a terminal, navigate to the directory containing the `process_soccer_data.py` script and run it:

```bash
python process_soccer_data.py
```

**Step 2: Run the React Frontend**

In a new terminal window, navigate to the `soccer-visualization` directory and start the React app:

```bash
cd soccer-visualization
npm start
```

Your full-stack soccer team data visualization app should now be running! Open your browser and visit `http://localhost:3000` to see the app in action. You should see cards displaying team information, and you can click on the Wikipedia link to access more details.

