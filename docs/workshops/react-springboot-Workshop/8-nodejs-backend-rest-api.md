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
