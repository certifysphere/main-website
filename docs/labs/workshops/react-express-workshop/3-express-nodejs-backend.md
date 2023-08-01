---
id: express-nodejs-backend-crud-rest-api
title: Express Node.js Backend Rest API
tags:
  - Express 
  - nodejs
  - Rest API
---
# Build a Node.js and Express.js Backend REST API for CRUD Operations

In this chapter, we will focus on creating a Express and Node.js application that serves as a backend REST API for performing CRUD (Create, Read, Update, Delete) operations on a new School Listing App.

:::info
This chapter is part of the React frontend application and Express/Node.js backend REST API workshop series. While it can be followed independently to create a Express/Node.js backend application, we suggest starting from the beginning to get the full context and benefit from the step-by-step learning experience. The complete workshop series can be found [here](1-introduction.md).
:::

## Setting up the Development Environment

Before we start developing the Node.js backend REST Services, it's important to ensure that your local environment is set up. Follow these steps to set up Node.js and create an initial app:

### Step 1: Install Node.js
- Visit the official Node.js website: https://nodejs.org
- Download the LTS (Long-Term Support) version for your operating system.
- Run the installer and follow the instructions to complete the installation.

### Step 2: Verify the Installation
- Open a terminal or command prompt.
- Run the following command to check if Node.js and npm (Node Package Manager) are installed:
  ```
  node -v
  npm -v
  ```
- You should see the version numbers of Node.js and npm if the installation was successful.

### Step 3: Create a Project Directory
1) In the previous chapter, we created the project directory `react-express-workshop`. If it's not created yet, it can be created with the following command:
  ```
  mkdir react-express-workshop
  ```
2) Change the directory to `react-express-workshop`
  ```
  cd react-express-workshop
  ```
3) Create a subdirectory for the backend application and navigate to that directory:

```bash 
mkdir schools-listing-backend
cd schools-listing-backend
```
4) Open the project in your IDE

Open the project directory (schools-listing-backend) in Visual Studio Code or your preferred text editor or IDE.

### Step 4: Initialize a Node.js Project
- Run the following command to initialize a new Node.js project inside the `schools-listing-backend` directory:
  ```
  npm init -y
  ```
- This command creates a default `package.json` file with the project configuration.

### Step 5: Install Dependencies
- Install Express.js: Express.js is a popular web framework for Node.js. Install it as a dependency for your project by running the following command:

  ```
  npm install express
  ```
  This command installs Express.js and adds it as a dependency in the `package.json` file.

### Step 6: Create a Basic Server
- Create a new file named `server.js` in your project directory. This file will serve as the entry point for your application.
- Open `server.js` in a text editor or VS Code.
- Add the following code to create a basic server using the Express framework:

  ```javascript
  const express = require('express');
  const app = express();
  const port = 3002; // Replace with your desired port number

  // Define a route
  app.get('/', (req, res) => {
    res.send('Hello, world!');
  });

  // Start the server
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  ```

### Step 7: Start the Server
- Open a terminal or command prompt.
- Navigate to your project directory.
- Run the following command to start the server:
  ```
  node server.js
  ```
- You should see a message indicating that the server is running on the specified port.

### Step 8: Test the Server
- Open a web browser and navigate to http://localhost:3002. You should see the message "Hello, world!" displayed in the browser, indicating that the server is running successfully.

Congratulations! You have set up your Node.js development environment and created a basic Express server. You can now proceed with developing the Node.js backend REST Services by adding routes, controllers, and other necessary components to build your REST API.

## REST API For Schools Listing App

In the previous section, we created a basic server app using Express.js that returns "Hello World!" when accessing the root URL of the server app (http://localhost:3002). Now, we will add new endpoints to the `server.js` file to enable CRUD operations (Create, Retrieve, Update, Delete) for our School App.

### Updated `server.js` Code

Replace the code in the `server.js` file with the following:

```javascript
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3002;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// School Data (replace this with your database or data source)
let schools = [
  { id: 1, name: 'School 1', grades: '1-5', city: 'City 1', state: 'State 1', country: 'Country 1', zipCode: '12345' },
  { id: 2, name: 'School 2', grades: '6-8', city: 'City 2', state: 'State 2', country: 'Country 2', zipCode: '67890' },
];

// Get all schools
app.get('/schools', (req, res) => {
  res.json(schools);
});

// Get a specific school by ID
app.get('/schools/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const school = schools.find((school) => school.id === id);

  if (school) {
    res.json(school);
  } else {
    res.status(404).json({ message: 'School not found' });
  }
});

// Create a new school
app.post('/schools', (req, res) => {
  const { name, grades, city, state, country, zipCode } = req.body;
  const id = schools.length + 1;
  const newSchool = { id, name, grades, city, state, country, zipCode };

  schools.push(newSchool);

  res.status(201).json(newSchool);
});

// Update an existing school
app.put('/schools/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, grades, city, state, country, zipCode } = req.body;
  const school = schools.find((school) => school.id === id);

  if (school) {
    school.name = name;
    school.grades = grades;
    school.city = city;
    school.state = state;
    school.country = country;
    school.zipCode = zipCode;

    res.json(school);
  } else {
    res.status(404).json({ message: 'School not found' });
  }
});

// Delete a school
app.delete('/schools/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = schools.findIndex((school) => school.id === id);

  if (index !== -1) {
   

 const deletedSchool = schools.splice(index, 1);
    res.json(deletedSchool[0]);
  } else {
    res.status(404).json({ message: 'School not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
```

This updated `server.js` file includes the following CRUD endpoints:

- GET `/schools`: Retrieves all schools.
- GET `/schools/:id`: Retrieves a specific school by its ID.
- POST `/schools`: Creates a new school.
- PUT `/schools/:id`: Updates an existing school.
- DELETE `/schools/:id`: Deletes a school.

This code initializes an Express.js server and sets up middleware to handle request body parsing. It prepares the server to handle REST API endpoints for the School App use case.

If you attempt to run a frontend React app and access data from a backend API, you may encounter an error (Check in Chrome Developer Tools). This error is due to the browser's default security policy, which restricts Cross-Origin Resource Sharing (CORS). CORS is a security feature implemented by web browsers to prevent unauthorized access to resources on a different domain.

When your React app, served from one domain (e.g., localhost:3000), tries to make API requests to a backend server on another domain (e.g., localhost:3002/api), the browser blocks the request by default. This behavior is intended to protect users from potential security risks.

### Enable CORS
Enabling CORS (Cross-Origin Resource Sharing) in an Express app allows the server to handle requests coming from different origins (domains) than the one the server is hosted on. This is important when you have a frontend application running on a different domain than your backend API.

To enable CORS in your Express app, you can use the `cors` middleware. First, you'll need to install the `cors` package:

```bash
npm install cors
```

Then, in your `server.js` file, add the following code to enable CORS:

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 3002;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ... Your other routes and middleware ...

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

By adding `app.use(cors())`, you are enabling CORS for all routes in your Express app. This will allow requests from any domain to access your backend API.

### Run Frontend React and Backend Express Apps

1) Navigate to the `schools-listing-frontend` directory and run the frontend React app:

```
cd schools-listing-frontend
npm start
```

2) Navigate to the `schools-listing-backend` directory and run the backend Express Rest API app:

```
cd schools-listing-backend
node server.js
```

3) Open your web browser and go to the frontend app URL (http://localhost:3000). If everything works as expected, you should see the application running, and it should be able to interact with the backend API.

4) Test all CRUD (Create, Read, Update, Delete) operations on the frontend app. You can perform actions like adding new schools, updating existing schools, deleting schools, and viewing the list of schools.

Remember to ensure that the backend API and frontend React app are correctly configured to communicate with each other. The frontend app should be making API requests to the correct URL where the backend server is running. If there are any issues, check the browser console for error messages or the network tab in the browser's developer tools to see the API requests and responses.

By following these steps, you should have both the frontend and backend applications up and running, and you can interact with the Schools Listing App through your browser.

## Database

To connect our Express server app with a real database and perform CRUD operations, we need to choose and configure a database system. There are various options available, such as `MySQL`, `PostgreSQL`, `MongoDB`, etc. For this workshop, we will use `MongoDB`, which is a popular NoSQL database system.

### Install MongoDB Database

Here are the instructions to install and set up MongoDB on your local system:

Step 1: Download MongoDB
- Visit the MongoDB download page: https://www.mongodb.com/try/download/community
- Select your operating system (Windows, macOS, or Linux) and download the appropriate installer.
- Run the installer and follow the instructions to complete the installation.

Step 2: Set Up MongoDB
- For Windows:
  - MongoDB requires a data directory to store all data. Create the data directory in the root (e.g., `C:\`):
    ```
    C:\data\db
    ```
  - To run MongoDB, open a Command Prompt and navigate to the `bin` directory of the MongoDB installation (e.g., `C:\Program Files\MongoDB\Server\4.4\bin`).
  - Run the following command to start the MongoDB server:
    ```
    mongod
    ```
  - You should see the MongoDB server starting up and waiting for connections.

- For macOS and Linux:
  - MongoDB will use the default data directory `/data/db`. Create the directory with the following command (you may need to use `sudo`):
    ```
    sudo mkdir -p /data/db
    ```
  - Set the correct permissions for the directory:
    ```
    sudo chown -R `id -un` /data/db
    ```
  - To run MongoDB, open a terminal and run the following command:
    ```
    mongod
    ```
  - You should see the MongoDB server starting up and waiting for connections.

Step 3: Verify MongoDB Installation
- Open a new Command Prompt or terminal window (leave the existing MongoDB server running in its window).
- Run the following command to connect to the MongoDB server:
  ```
  mongo
  ```
- If the connection is successful, you should see the MongoDB shell prompt.

Step 4: Create a Database
- In the MongoDB shell, run the following command to create a new database named `schoolapp` (you can choose a different name if you prefer):
  ```
  use schoolapp
  ```
- You should see a message indicating that the database has been switched to `schoolapp`.

### Learn MongoDB
:::tip
If you are new to databases and MongoDB, the following resource can help you get up to speed quickly:

**MongoDB Official Documentation**: This website offers comprehensive documentation on MongoDB, including installation guides, tutorials, and more. You can find the documentation here: [MongoDB Documentation](https://docs.mongodb.com/)

By following this documentation, you will gain a solid foundation in working with MongoDB and be able to apply your knowledge to the development of your Node.js/Express app.
:::

### Update Node.js/Express app to use MongoDB
To update backend Express app to use MongoDB, follow these steps:

1. Install the required dependencies:
   - `mongodb` package: This is the official MongoDB driver for Node.js.
   - `dotenv` package: This allows us to load environment variables from a `.env` file.

   You can install these dependencies by running the following command in your project directory:

  ```bash
   #navigate to backend diectory if not already inside this directory
   cd schools-listing-backend
  ```
   ```bash
   npm install mongodb dotenv
   ```

2. Create a `.env` file in your project directory. This file will store your environment variables. Add the following variables to the `.env` file:

   ```dotenv
   MONGO_DB_URL=your_mongodb_url
   ```

   Replace `your_mongodb_url` with the connection URL for your MongoDB database. The connection URL typically looks like `mongodb://localhost:27017/schoolapp` (replace `schoolapp` with your database name).

3. Update your `server.js` file with the following code:

   ```javascript
   const express = require('express');
   const bodyParser = require('body-parser');
   
   const cors = require('cors'); // Import the cors middleware

   const { MongoClient } = require('mongodb');
   require('dotenv').config();

   const app = express();
   const port = 3002;

   // Middleware
   app.use(bodyParser.urlencoded({ extended: false }));
   app.use(bodyParser.json());
   app.use(cors()); // Enable CORS for all routes

   // MongoDB connection settings
   const mongoUrl = process.env.MONGO_DB_URL;
   const client = new MongoClient(mongoUrl, { useUnifiedTopology: true });

   // Connect to the MongoDB database
   client.connect((err) => {
     if (err) {
       console.error('Error connecting to MongoDB:', err);
       return;
     }
     console.log('Connected to MongoDB database');
   });

   // ... Add CRUD route handlers ...

   // Start the server
   app.listen(port, () => {
     console.log(`Server is running on http://localhost:${port}`);
   });
   ```

   This code sets up a MongoDB connection using the `mongodb` package and the connection URL defined in the `.env` file. The connection is established when the server starts, and we can use the `client` object to interact with the MongoDB database.

4. Implement the logic for each CRUD operation in the appropriate route handler. For example, to fetch all schools from the database:

   ```javascript
   app.get('/schools', (req, res) => {
     const db = client.db();
     const schoolsCollection = db.collection('schools');
     schoolsCollection.find({}).toArray((err, schools) => {
       if (err) {
         console.error('Error fetching schools:', err);
         res.status(500).json({ error: 'An error occurred while fetching schools' });
       } else {
         res.json(schools);
       }
     });
   });
   ```

   This example uses the `find` method to fetch all documents from the `schools` collection in the MongoDB database and sends the results as a JSON response to the client.

5. Repeat the above step for each CRUD operation, updating the corresponding route handler to perform the appropriate database operations.

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
const port = 3002;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection settings
const mongoUrl = process.env.MONGO_DB_URL;
const client = new MongoClient(mongoUrl, { useUnifiedTopology: true });

// Connect to the MongoDB database
client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB database');
});

// MongoDB Collection Name
const collectionName = 'schools';

// Get all schools
app.get('/schools', async (req, res) => {
  try {
    const db = client.db();
    const schoolsCollection = db.collection(collectionName);
    const schools = await schoolsCollection.find({}).toArray();
    res.json(schools);
  } catch (error) {
    console.error('Error fetching schools:', error);
    res.status(500).json({ error: 'An error occurred while fetching schools' });
  }
});

// Get a specific school by ID
app.get('/schools/:id', async (req, res) => {
  try {
    const db = client.db();
    const schoolsCollection = db.collection(collectionName);
    const school = await schoolsCollection.findOne({ _id: ObjectId(req.params.id) });

    if (school) {
      res.json(school);
    } else {
      res.status(404).json({ message: 'School not found' });
    }
  } catch (error) {
    console.error('Error fetching school by ID:', error);
    res.status(500).json({ error: 'An error occurred while fetching the school' });
  }
});

// Create a new school
app.post('/schools', async (req, res) => {
  try {
    const db = client.db();
    const schoolsCollection = db.collection(collectionName);
    const { name, grades, city, state, country, zipCode } = req.body;
    const newSchool = { name, grades, city, state, country, zipCode };

    const result = await schoolsCollection.insertOne(newSchool);
    newSchool._id = result.insertedId;

    res.status(201).json(newSchool);
  } catch (error) {
    console.error('Error creating a new school:', error);
    res.status(500).json({ error: 'An error occurred while creating the school' });
  }
});

// Update an existing school
app.put('/schools/:id', async (req, res) => {
  try {
    const db = client.db();
    const schoolsCollection = db.collection(collectionName);
    const { name, grades, city, state, country, zipCode } = req.body;

    const updatedSchool = await schoolsCollection.findOneAndUpdate(
      { _id: ObjectId(req.params.id) },
      { $set: { name, grades, city, state, country, zipCode } },
      { returnOriginal: false }
    );

    if (updatedSchool.value) {
      res.json(updatedSchool.value);
    } else {
      res.status(404).json({ message: 'School not found' });
    }
  } catch (error) {
    console.error('Error updating the school:', error);
    res.status(500).json({ error: 'An error occurred while updating the school' });
  }
});

// Delete a school
app.delete('/schools/:id', async (req, res) => {
  try {
    const db = client.db();
    const schoolsCollection = db.collection(collectionName);
    const deletedSchool = await schoolsCollection.findOneAndDelete({ _id: ObjectId(req.params.id) });

    if (deletedSchool.value) {
      res.json(deletedSchool.value);
    } else {
      res.status(404).json({ message: 'School not found' });
    }
  } catch (error) {
    console.error('Error deleting the school:', error);
    res.status(500).json({ error: 'An error occurred while deleting the school' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
```

In this updated code, we have added the following routes and handlers for the remaining CRUD operations:

1. `GET /schools/:id`: Retrieves a specific school by its ID.
2. `POST /schools`: Creates a new school.
3. `PUT /schools/:id`: Updates an existing school.
4. `DELETE /schools/:id`: Deletes a school.

These routes use the `ObjectId` constructor from the `mongodb` module to convert the `

id` parameter into a MongoDB ObjectId, which is used to uniquely identify documents in MongoDB.



## GitHub Repo

You can also refer to and clone the code up to this section from the GitHub repository using the `express-backend-mongo-db` branch.

To clone the repository, you can use the following command:

```bash
git clone --branch express-backend-mongo-db https://github.com/certifysphere/workshops.git
```

This will clone the repository and checkout the `express-backend-mongo-db` branch, which contains the code up to this section of the workshop.

You can then navigate to the `schools-listing-backend` directory to access the updated Node.js backend code for the new school app.

```bash
cd workshops/react-express-workshop/schools-listing-backend/
```

