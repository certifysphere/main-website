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

## Connect Express Server App With Database
To connect our Express server app with a real database and perform CRUD operations, we need to choose and configure a database system. There are various options available, such as MySQL, PostgreSQL, MongoDB, etc. For this workshop, we will use PostgreSQL, which is a popular open-source relational database system.

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


### Github Repo
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
