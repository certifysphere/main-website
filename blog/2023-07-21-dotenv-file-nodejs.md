---
slug: dotenv-files-nodejs-expressjs
title: Environment Configurations in .env files - In Node.Js/Express.Js app
authors:
  name: Vishal
tags: [dotenv, node, express]
---

Creating a `.env` file is a common practice in Node.js projects to store environment-specific configuration variables. These variables are typically sensitive data or settings that may change depending on the environment where the application is running, such as development, testing, staging, or production.

The `.env` file should not be committed to version control systems like Git, as it may contain sensitive information. Instead, it is usually added to the `.gitignore` file to prevent accidental commits.

Here's how you can set up different files for different environments:

1. Create a `.env` file: This file will contain default values for your environment variables that are common across all environments.

2. Create `.env.local`, `.env.dev`, `.env.staging`, and `.env.prod`: These files will contain environment-specific variables for local development, development environment, staging environment, and production environment, respectively.

3. Load environment-specific variables based on the running environment: Your application will read the appropriate `.env` file depending on the environment it is running in. For example, when running locally for development, it will use `.env.local`, and when deployed to production, it will use `.env.prod`.

Here's an example of the content of these files:

`.env` (Default variables):
```
PORT=3002
DB_HOST=localhost
DB_PORT=5432
DB_NAME=myappdb
DB_USER=myappuser
DB_PASSWORD=mypassword
```

`.env.local` (Local development variables):
```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=myappdb_dev
DB_USER=myappuser_dev
DB_PASSWORD=mydevpassword
```

`.env.dev` (Development environment variables):
```
DB_HOST=dev-db-host
DB_PORT=5432
DB_NAME=myappdb_dev
DB_USER=myappuser_dev
DB_PASSWORD=mydevpassword
```

`.env.staging` (Staging environment variables):
```
DB_HOST=staging-db-host
DB_PORT=5432
DB_NAME=myappdb_staging
DB_USER=myappuser_staging
DB_PASSWORD=mystagingpassword
```

`.env.prod` (Production environment variables):
```
DB_HOST=prod-db-host
DB_PORT=5432
DB_NAME=myappdb_prod
DB_USER=myappuser_prod
DB_PASSWORD=myprodpassword
```

In your Node.js/Express app, you can use a package like `dotenv` to read these environment variables and use them in your code. For example:

```javascript
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 3002;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

// Use these variables in your application code...
```

By setting up your environment variables in this way, you can easily switch between different environments without modifying your code, making it easier to manage configurations for various deployment scenarios.
