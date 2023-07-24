---
id: nodejs-backend-crud-rest-api
title: NodeJS Backend Rest API
tags:
  - nodejs
  - rest services
  - restjs
---
# Building a NodeJS and ExpresJS Backend REST API for CRUD Operations

In this chapter, we will focus on creating a NodeJS application that serves as a backend REST API for performing CRUD (Create, Read, Update, Delete) operations on Public Toilets APP. 

:::info
This chapter is part of the ReactJS frontend application, and Spring Boot OR NodeJS backend Rest API workshop series. While it can be followed independently to create a Node.js backend application, we suggest starting from the beginning to get the full context and benefit from the step-by-step learning experience. The complete workshop series can be found [here](1-introduction.md).
:::

## Setting up the Development Environment

Before we start developing the Node.js backend Rest Services, it's important to ensure that your local environment is set up. Follow these steps to set up Node.js and create an initial app:

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
If you are following the workshop from the beginning, you can create the directory inside the `reactjs-springboot-workshop` folder in the `workshops` repository.
1. Clone the repository: Run the following command to clone the repository to your local machine:
   ```bash
   git clone https://github.com/certifysphere/workshops.git
   ```
2. Navigate to the workshop directory: Change to the `reactjs-springboot-workshop` directory:
   ```bash
   cd workshops/reactjs-springboot-workshop
   ```
Now you can proceed with creating the directory for your Node.js backend Rest Services inside the `reactjs-springboot-workshop` directory.
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
- Create a new file named `server.js` in your project directory.This file will serve as the entry point for your application.
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
### Step 8: Test the server
- Open a web browser and navigate to http://localhost:3000. You should see the message "Hello, world!" displayed in the browser, indicating that the server is running successfully.

Congratulations! You have set up your Node.js development environment and created a basic Express server. You can now proceed with developing the Node.js backend Rest Services by adding routes, controllers, and other necessary components to build your REST API.

## REST API For PublicToilets Usecase

In the previous section, we created a basic server app using Express.js that returns "Hello World!" when accessing the root URL of the server app (http://localhost:3002). Now, we will add new endpoints to the `server.js` file to enable CRUD operations (Create, Retrieve, Update, Delete) for our Public Toilets sample app or any other server REST API app.

### Updated server.js Code

Replace the code in the `server.js` file with the following:

```javascript
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3002;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Public Toilets Data (replace this with your database or data source)
let publicToilets = [
  { id: 1, name: 'Toilet 1', location: 'Location 1' },
  { id: 2, name: 'Toilet 2', location: 'Location 2' },
];

// Get all public toilets
app.get('/public-toilets', (req, res) => {
  res.json(publicToilets);
});

// Get a specific public toilet by ID
app.get('/public-toilets/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const toilet = publicToilets.find((toilet) => toilet.id === id);

  if (toilet) {
    res.json(toilet);
  } else {
    res.status(404).json({ message: 'Public toilet not found' });
  }
});

// Create a new public toilet
app.post('/public-toilets', (req, res) => {
  const { name, location } = req.body;
  const id = publicToilets.length + 1;
  const newToilet = { id, name, location };

  publicToilets.push(newToilet);

  res.status(201).json(newToilet);
});

// Update an existing public toilet
app.put('/public-toilets/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, location } = req.body;
  const toilet = publicToilets.find((toilet) => toilet.id === id);

  if (toilet) {
    toilet.name = name;
    toilet.location = location;

    res.json(toilet);
  } else {
    res.status(404).json({ message: 'Public toilet not found' });
  }
});

// Delete a public toilet
app.delete('/public-toilets/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = publicToilets.findIndex((toilet) => toilet.id === id);

  if (index !== -1) {
    const deletedToilet = publicToilets.splice(index, 1);
    res.json(deletedToilet[0]);
  } else {
    res.status(404).json({ message: 'Public toilet not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

This updated `server.js` file includes the following CRUD endpoints:

- GET `/public-toilets`: Retrieves all public toilets.
- GET `/public-toilets/:id`: Retrieves a specific public toilet by its ID.
- POST `/public-toilets`: Creates a new public toilet.
- PUT `/public-toilets/:id`: Updates an existing public toilet.
- DELETE `/public-toilets/:id`: Deletes a public toilet.

This code initializes an Express.js server and sets up middleware to handle request body parsing. It prepares the server to handle REST API endpoints for the PublicToilets use case.
- The `express` module is imported to create an instance of the Express application.
- The `body-parser` module is imported to parse incoming request bodies.
- An instance of the Express application is created using `express()`.
- The server will listen on port `3002`.
- Middleware is added to the application using `app.use()`. The `body-parser` middleware is used to parse the request body in both JSON and URL-encoded formats.

### Test Rest Endpoints
You can test these CRUD operations using tools like Postman or cURL by sending HTTP requests to the corresponding endpoints. For example:

- To retrieve all toilets, send a GET request to `http://localhost:3002/api/public-toilets`.
- To create a new toilet, send a POST request to `http://localhost:3002/api/public-toilets` with the toilet details in the request body.
- To update a toilet, send a PUT request to `http://localhost:3002/api/public-toilets/:id` with the updated toilet details in the request body and the toilet ID as a parameter.
- To delete a toilet, send a DELETE request to `http://localhost:3002/api/public-toilets/:id` with the toilet ID as a parameter.


`Here are some examples`:

- First, make sure the `node server.js` app is running. 

- POST a new public toilet:

    ```sh
    curl -X POST \
    http://localhost:3002/public-toilets \
    -H 'Content-Type: application/json' \
    -d '{
            "name": "Public Toilet 1",
            "location": "Sample City, Sample State, Sample Country"
        }'
    ```

    This should insert the new toilet record in the H2 Database. You can add 2-3 more records with different data.

- GET all public toilets:

    ```sh
    curl -X GET http://localhost:3002/public-toilets
    ```

    This should return all the PublicToilet records that were inserted in the previous step.

- GET a specific public toilet by id:

    ```sh
    curl -X GET http://localhost:3002/public-toilets/{id}
    ```

    Replace {id} with a number. The id is an auto-generated sequential field. Try using numbers starting from 1, based on the number of records present in the database.

- PUT update an existing public toilet:

    ```sh
    curl -X PUT \
    http://localhost:3002/public-toilets/{id} \
    -H 'Content-Type: application/json' \
    -d '{
            "name": "Public Toilet New Name",
            "location": "Sample City, Sample State, Sample Country"
        }'
    ```

    Replace {id} with a number. This should update the record with the provided id in the database. Try retrieving the record again, and you should see the updated result.

- DELETE a public toilet by id:

    ```sh
    curl -X DELETE http://localhost:3002/public-toilets/{id}
    ```

    Again, replace {id} with a number. This should delete the record with the provided id from the database.

## Database 
To connect our Express server app with a real database and perform CRUD operations, we need to choose and configure a database system. There are various options available, such as `MySQL`, `PostgreSQL`, `MongoDB`, etc. For this workshop, we will use `PostgreSQL`, which is a popular open-source relational database system.

### Install PostgreSQL Database 

Here are the instructions to install and set up PostgreSQL on your local system:

Step 1: Download PostgreSQL
- Visit the PostgreSQL download page: https://www.postgresql.org/download/
- Select your operating system (Windows, macOS, or Linux) and download the appropriate installer.

Step 2: Install PostgreSQL
- Windows:
  - Run the downloaded installer.
  - Follow the installation wizard prompts.
  - Choose the installation directory and provide a password for the default PostgreSQL user (postgres).
  - Complete the installation process.

- macOS:
  - Open the downloaded disk image (.dmg) file.
  - Double-click the PostgreSQL package file (.pkg) to run the installer.
  - Follow the installation wizard prompts.
  - Provide a password for the default PostgreSQL user (postgres) when prompted.
  - Complete the installation process.

- Linux:
  - Refer to the official PostgreSQL documentation for detailed installation instructions specific to your Linux distribution.

Step 3: Verify PostgreSQL Installation
- Windows:
  - Open the Start menu and search for "pgAdmin." Launch pgAdmin to open the graphical interface for managing PostgreSQL.
  - You can also verify the installation by opening the Command Prompt and running the command: `psql --version`

- macOS and Linux:
  - Open the terminal and run the command: `psql --version`

If the installation was successful, you should see the version number of PostgreSQL displayed in the terminal or graphical interface.

Step 4: Set Up PostgreSQL Database
- Windows:
  - Open the Start menu and search for "pgAdmin." Launch pgAdmin to open the graphical interface.
  - In the pgAdmin interface, expand the Servers section, then expand PostgreSQL, and finally expand Databases.
  - Right-click on Databases and select Create -> Database.
  - Enter a name for your database (e.g., "public_toilets") and click OK.

- macOS and Linux:
  - Open the terminal and run the command: `createdb public_toilets`

Step 5: Connect to the PostgreSQL Database
- Windows:
  - In the pgAdmin interface, expand the Servers section, then expand PostgreSQL, and finally expand Databases.
  - Right-click on your database name (e.g., "public_toilets") and select Connect.
  - Provide the necessary credentials (username and password) if prompted.

- macOS and Linux:
  - Open the terminal and run the command: `psql -U postgres -d public_toilets`

You are now connected to the PostgreSQL database.

### Learn PostgreSQL
:::tip
If you are new to databases and PostgreSQL, the following resource can help you get up to speed quickly:

**PostgreSQL Tutorial by PostgreSQLTutorial.com**: This website offers a step-by-step tutorial for beginners to learn PostgreSQL. It covers various topics, including installation, basic SQL queries, data manipulation, and advanced concepts. You can find the tutorial here: [PostgreSQL Tutorial](https://www.postgresqltutorial.com/)

By following this tutorial, you will gain a solid foundation in working with PostgreSQL and be able to apply your knowledge to the development of your Node.js/Express app.
:::

### Update Nodejs/Express app to use PostgreSQL
To update your Node.js/Express app to use PostgreSQL, follow these steps:

1. Install the required dependencies:
   - `pg` package: This is the PostgreSQL client library for Node.js.
   - `dotenv` package: This allows us to load environment variables from a `.env` file.

   You can install these dependencies by running the following command in your project directory:

   ```bash
   npm install pg dotenv
   ```

2. Create a `.env` file in your project directory. This file will store your environment variables. Add the following variables to the `.env` file: [Learn more about ENV file here](/blog/dotenv-files-nodejs-expressjs).

   ```dotenv
   DB_HOST=your_database_host
   DB_PORT=your_database_port
   DB_NAME=your_database_name
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   ```

   Replace `your_database_host`, `your_database_port`, `your_database_name`, `your_database_user`, and `your_database_password` with your actual PostgreSQL database connection details.

3. Update your `server.js` file with the following code:

   ```javascript
   const express = require('express');
   const bodyParser = require('body-parser');
   const { Pool } = require('pg');
   require('dotenv').config();

   const app = express();
   const port = 3002;

   // Middleware
   app.use(bodyParser.urlencoded({ extended: false }));
   app.use(bodyParser.json());

   // Create a connection pool
   const pool = new Pool({
     host: process.env.DB_HOST,
     port: process.env.DB_PORT,
     database: process.env.DB_NAME,
     user: process.env.DB_USER,
     password: process.env.DB_PASSWORD
   });

   // Test the database connection
   pool.connect((err, client, release) => {
     if (err) {
       return console.error('Error acquiring client', err.stack);
     }
     console.log('Connected to PostgreSQL database');
     client.release();
   });

   // Define your routes and handlers here...

   // Start the server
   app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
   });
   ```

   This code sets up a connection pool using the `pg` package and the environment variables defined in the `.env` file. It also tests the database connection to ensure it's working properly.

   **Note:** Make sure to replace the route definitions and handlers with your own code for CRUD operations and other routes specific to your application.

4. Now you can run your Node.js/Express app using the following command:

   ```bash
   node server.js
   ```

   Your app will now be connected to PostgreSQL, and you can start building your CRUD operations and other functionality using the database.

### Update public toilets CRUD operation 
To update the CRUD operations for the PublicToilets app to use a PostgreSQL database, you need to make the following changes:

1. Update the `server.js` file with the following code:

   ```javascript
   const express = require('express');
   const bodyParser = require('body-parser');
   const { Pool } = require('pg');
   require('dotenv').config();

   const app = express();
   const port = 3002;

   // Middleware
   app.use(bodyParser.urlencoded({ extended: false }));
   app.use(bodyParser.json());

   // Create a connection pool
   const pool = new Pool({
     host: process.env.DB_HOST,
     port: process.env.DB_PORT,
     database: process.env.DB_NAME,
     user: process.env.DB_USER,
     password: process.env.DB_PASSWORD
   });

   // Test the database connection
   pool.connect((err, client, release) => {
     if (err) {
       return console.error('Error acquiring client', err.stack);
     }
     console.log('Connected to PostgreSQL database');
     client.release();
   });

   // Routes and handlers for CRUD operations
   app.get('/api/toilets', (req, res) => {
     // Implement the logic to fetch all toilets from the database using the pool.query() method
   });

   app.get('/api/toilets/:id', (req, res) => {
     // Implement the logic to fetch a specific toilet by ID from the database using the pool.query() method
   });

   app.post('/api/toilets', (req, res) => {
     // Implement the logic to create a new toilet in the database using the pool.query() method
   });

   app.put('/api/toilets/:id', (req, res) => {
     // Implement the logic to update a specific toilet by ID in the database using the pool.query() method
   });

   app.delete('/api/toilets/:id', (req, res) => {
     // Implement the logic to delete a specific toilet by ID from the database using the pool.query() method
   });

   // Start the server
   app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
   });
   ```

   Replace the placeholder comments with the actual implementation code for each route and CRUD operation using the `pool.query()` method provided by the `pg` package. The `pool.query()` method allows you to execute SQL queries against the PostgreSQL database.

   **Note:** Make sure to handle errors, validate request data, and sanitize input to prevent SQL injection attacks.

3. Implement the logic for each CRUD operation in the appropriate route handler. 

Here's an example of how you can implement the logic for fetching all toilets:

   ```javascript
   app.get('/api/toilets', (req, res) => {
     pool.query('SELECT * FROM toilets', (err, result) => {
       if (err) {
         console.error('Error executing query', err.stack);
         res.status(500).json({ error: 'An error occurred while fetching toilets' });
       } else {
         res.json(result.rows);
       }
     });
   });
   ```

   This example executes a `SELECT` query to fetch all rows from the `toilets` table in the database and sends the results as JSON response to the client.

Create the POST route to store the public toilet in the database:   
```javascript
// Create a new public toilet
// POST route to store a public toilet
app.post('/public-toilets', async (req, res) => {
  try {
    const { name, location } = req.body;

    const query = 'INSERT INTO toilets (name, location) VALUES ($1, $2) RETURNING *';
    const values = [name, location];

    const result = await pool.query(query, values);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error while adding a toilet:', error);
    res.status(500).json({ error: 'Error while adding a toilet' });
  }
});
  ```

4. Repeat the above step for each CRUD operation, updating the corresponding route handler to execute the appropriate SQL query.

Enabling CORS (Cross-Origin Resource Sharing) in an Express app allows the server to handle requests coming from different origins (domains) than the one the server is hosted on. This is important when you have a frontend application running on a different domain than your backend API.

## Enable CORS
To enable CORS (Cross-Origin Resource Sharing) in your Express app, you can use the `cors` middleware. First, you'll need to install the `cors` package: [Learn more about CORS here](../../../blog/enabling-cors-in-an-express-node.js-app)

```bash
npm install cors
```

Then, in your `server.js` file, add the following code to enable CORS:

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const pool = require('./db');

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



## Github Repo
:::tip
  You can also refer to and clone the code up to this section from the GitHub repository using the `nodejs-backend` branch.

  To clone the repository, you can use the following command:

  ```bash
  git clone --branch nodejs-backend https://github.com/certifysphere/workshops.git
  ```

  This will clone the repository and checkout the `nodejs-backend` branch, which contains the code up to this section of the workshop.

  You can then navigate to the `nodejs-backend-rest-api` directory to access the Node.Js Backend Rest API Code.

  ```bash
  cd workshops/reactjs-springboot-workshop/nodejs-backend-rest-api/
```
:::
