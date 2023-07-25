---
id: express-nodejs-backend-crud-rest-api
title: Express Node.js Backend Rest API
tags:
  - Express 
  - nodejs
  - Rest API
---
# Building a Node.js and Express.js Backend REST API for CRUD Operations

In this chapter, we will focus on creating a Node.js application that serves as a backend REST API for performing CRUD (Create, Read, Update, Delete) operations on a new School App.

:::info
This chapter is part of the ReactJS frontend application and Node.js backend REST API workshop series. While it can be followed independently to create a Node.js backend application, we suggest starting from the beginning to get the full context and benefit from the step-by-step learning experience. The complete workshop series can be found [here](1-introduction.md).
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
- Choose a directory where you want to create your Node.js project and navigate to that directory.
```bash 
mkdir nodejs-backend-rest-api
cd nodejs-backend-rest-api
```
:::note
If you are following the workshop from the beginning, you can create the directory inside the `reactjs-nodejs-workshop` folder in the `workshops` repository.
1. Clone the repository: Run the following command to clone the repository to your local machine:
   ```bash
   git clone https://github.com/certifysphere/workshops.git
   ```
2. Navigate to the workshop directory: Change to the `reactjs-nodejs-workshop` directory:
   ```bash
   cd workshops/reactjs-nodejs-workshop
   ```
Now you can proceed with creating the directory for your Node.js backend Rest Services inside the `reactjs-nodejs-workshop` directory.
:::


### Step 4: Initialize a Node.js Project
- Run the following command to initialize a new Node.js project inside `nodejs-backend-rest-api` directory:
  ```
  npm init -y
  ```
- This command creates a default package.json file with the project configuration.


### Step 5: Install Dependencies
- Install Express.js: Express.js is a popular web framework for Node.js. Install it as a dependency for your project by running the following command:

  ```
  npm install express
  ```
  This command installs Express.js and adds it as a dependency in the package.json file.

### Step 6: Create a Basic Server
- Create a new file named `server.js` in your project directory. This file will serve as the entry point for your application.
- Open `server.js` in a text editor or VS Code.
- Add the following code to create a basic server using the Express framework:

  ```javascript
  const express = require('express');
  const app = express();
  const port = 3000; // Replace with your desired port number

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
- Open a web browser and navigate to http://localhost:3000. You should see the message "Hello, world!" displayed in the browser, indicating that the server is running successfully.

Congratulations! You have set up your Node.js development environment and created a basic Express server. You can now proceed with developing the Node.js backend REST Services by adding routes, controllers, and other necessary components to build your REST API.

## REST API For School App

In the previous section, we created a basic server app using Express.js that returns "Hello World!" when accessing the root URL of the server app (http://localhost:3000). Now, we will add new endpoints to the `server.js` file to enable CRUD operations (Create, Retrieve, Update, Delete) for our School App or any other server REST API app.

### Updated server.js Code

Replace the code in the `server.js` file with the following:

```javascript
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// School Data (replace this with your database or data source)
let schools = [
  { id: 1, name: 'School 1', address: 'Address 1', city: 'City 1', state: 'State 1', country: 'Country 1', zipCode: '12345' },
  { id: 2, name: 'School 2', address: 'Address 2', city: 'City 2', state: 'State 2', country: 'Country 2', zipCode: '67890' },
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
  const { name, address, city, state, country, zipCode } = req.body;
  const id = schools.length + 1;
  const newSchool = { id, name, address, city, state, country, zipCode };

  schools.push(newSchool);

  res.status(201).json(newSchool);
});

// Update an existing school
app.put('/schools/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, address, city, state, country, zipCode } = req.body;
  const school = schools.find((school) => school.id === id);

  if (school) {
    school.name = name;
    school.address = address;
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
  console.log(`Server running on port ${port}`);
});
```

This updated `server.js` file includes the following CRUD endpoints:

- GET `/schools`: Retrieves all schools.
- GET `/schools/:id`: Retrieves a specific school by its ID.
- POST `/schools`: Creates a new school.
- PUT `/schools/:id`: Updates an existing school.
- DELETE `/schools/:id`: Deletes a school.

This code initializes an Express.js server and sets up middleware to handle request body parsing. It prepares the server to handle REST API endpoints for the School App use case.

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
To update your Node.js/Express app to use MongoDB, follow these steps:

1. Install the required dependencies:
   - `mongodb` package: This is the official MongoDB driver for Node.js.
   - `dotenv` package: This allows us to load environment variables from a `.env` file.

   You can install these dependencies by running the following command in your project directory:

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
   const { MongoClient } = require('mongodb');
   require('dotenv').config();

   const app = express();
   const port = 3000;

   // Middleware
   app.use(bodyParser.urlencoded({ extended: false }));
   app.use(bodyParser.json());

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

   This example uses the `find` method to fetch all documents

 from the `schools` collection in the MongoDB database and sends the results as JSON response to the client.

5. Repeat the above step for each CRUD operation, updating the corresponding route handler to perform the appropriate database operations.


```javascript
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoUrl = process.env.MONGO_DB_URL;
const client = new MongoClient(mongoUrl, { useUnifiedTopology: true });

client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB database');
});

// Fetch all schools
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

// Fetch a specific school by ID
app.get('/schools/:id', (req, res) => {
  const db = client.db();
  const schoolsCollection = db.collection('schools');
  const schoolId = req.params.id;

  schoolsCollection.findOne({ _id: ObjectId(schoolId) }, (err, school) => {
    if (err) {
      console.error('Error fetching school:', err);
      res.status(500).json({ error: 'An error occurred while fetching the school' });
    } else if (!school) {
      res.status(404).json({ message: 'School not found' });
    } else {
      res.json(school);
    }
  });
});

// Create a new school
app.post('/schools', (req, res) => {
  const db = client.db();
  const schoolsCollection = db.collection('schools');
  const { name, location, capacity } = req.body;

  const newSchool = {
    name,
    location,
    capacity,
  };

  schoolsCollection.insertOne(newSchool, (err, result) => {
    if (err) {
      console.error('Error creating a new school:', err);
      res.status(500).json({ error: 'An error occurred while creating a new school' });
    } else {
      res.status(201).json(result.ops[0]);
    }
  });
});

// Update an existing school
app.put('/schools/:id', (req, res) => {
  const db = client.db();
  const schoolsCollection = db.collection('schools');
  const schoolId = req.params.id;
  const { name, location, capacity } = req.body;

  schoolsCollection.updateOne(
    { _id: ObjectId(schoolId) },
    { $set: { name, location, capacity } },
    (err, result) => {
      if (err) {
        console.error('Error updating school:', err);
        res.status(500).json({ error: 'An error occurred while updating the school' });
      } else if (result.modifiedCount === 0) {
        res.status(404).json({ message: 'School not found' });
      } else {
        res.json({ message: 'School updated successfully' });
      }
    }
  );
});

// Delete a school
app.delete('/schools/:id', (req, res) => {
  const db = client.db();
  const schoolsCollection = db.collection('schools');
  const schoolId = req.params.id;

  schoolsCollection.deleteOne({ _id: ObjectId(schoolId) }, (err, result) => {
    if (err) {
      console.error('Error deleting school:', err);
      res.status(500).json({ error: 'An error occurred while deleting the school' });
    } else if (result.deletedCount === 0) {
      res.status(404).json({ message: 'School not found' });
    } else {
      res.json({ message: 'School deleted successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

In this updated code, we have added the following routes and handlers for the remaining CRUD operations:

1. `GET /schools/:id`: Retrieves a specific school by its ID.
2. `POST /schools`: Creates a new school.
3. `PUT /schools/:id`: Updates an existing school.
4. `DELETE /schools/:id`: Deletes a school.

These routes use the `ObjectId` constructor from the

 `mongodb` module to convert the `id` parameter into a MongoDB ObjectId, which is used to uniquely identify documents in MongoDB.

Now you have a complete Node.js and Express backend API with MongoDB integration that supports all CRUD operations for managing schools. You can test these routes using tools like Postman or cURL to send HTTP requests to the corresponding endpoints and verify that the CRUD operations are working as expected.

## Enable CORS
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
const port = 3000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ... Your other routes and middleware ...

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

By adding `app.use(cors())`, you are enabling CORS for all routes in your Express app. This will allow requests from any domain to access your backend API.

## Github Repo

You can also refer to and clone the code up to this section from the GitHub repository using the `new-school-app` branch.

To clone the repository, you can use the following command:

```bash
git clone --branch new-school-app https://github.com/certifysphere/workshops.git
```

This will clone the repository and checkout the `new-school-app` branch, which contains the code up to this section of the workshop.

You can then navigate to the `new-school-app-backend` directory to access the updated Node.js backend code for the new school app.

```bash
cd workshops/react-express-workshop/new-school-app-backend/
```

With the updated Node.js backend code and MongoDB integration, you have a solid foundation to build the backend API for the new school app. You can now proceed with building the frontend React app and connecting it to the backend API to create a complete school management system. Happy coding!