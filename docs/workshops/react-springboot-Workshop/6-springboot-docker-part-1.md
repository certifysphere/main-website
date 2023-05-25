---
id: spring-rest-api--docker-aws-lambda-terraform-part-1
title: Deploy Spring REST API to AWS Lambda - Terraform - Part-1
tags:
  - Springboot
  - Rest services
  - AWS Lambda
  - Docker
  - Terraform
  - AWS API Gateway
---
# Chapter 4: Deploy Java Spring Boot Rest API to AWS Lambda as a Docker Container with Terraform and Expose Rest API Endpoint with AWS API Gateway - Part-1

In this chapter, we will learn how to deploy a Java Spring Boot REST API to AWS Lambda as a Docker container using Terraform. We will also explore how to expose the API endpoint using AWS API Gateway. 

This chapter covers the necessary steps to set up the AWS environment, create an AWS free account, understand AWS Lambda,  API Gateway, AWS CLI (Command Line Interface), Docker and containers, and the concept of Infrastructure as Code (IAC) with Terraform.


:::info
This chapter is part of the [React-Springboot Workshop](1-introduction.md). If you are not following along from Chapter 1, you can download the source code from the [**Git repository**](https://github.com/certifysphere/workshops.git) and use it to complete this chapter. Alternatively, you can also refer to this chapter as a guide to deploy any Java Spring application to AWS Lambda using Terraform.
:::

## Tools & Installations 
The following tools and an AWS account will be needed to complete this chapter. Please refer to the official documentation for the installation steps of each tool and follow the instructions provided. Once you have all the required tools installed and an AWS account set up, you can proceed with the chapter.

### 1. AWS Account (Amazon Web Services):
   - AWS is a cloud computing platform that provides a wide range of services and solutions for building and deploying applications in the cloud.
   - To follow along with this chapter, you can create an AWS free account by visiting the [AWS Free Tier](https://aws.amazon.com/free/) page. The AWS Free Tier provides a limited set of services and resources free of charge for a specific duration.
   - During the account registration process, AWS may ask for credit card information. However, if you use only the services included in the free tier, you should not incur any charges.

### 2. AWS CLI (Command Line Interface):
   - AWS CLI is a unified tool provided by AWS to manage various AWS services from the command line.
   - It enables you to interact with AWS services, including Lambda, API Gateway, and more, using commands.
   - You can install and configure AWS CLI by following the instructions in the [official documentation](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).
   - Run the following command to verify the installation and check the AWS CLI version:
        ```
        aws --version
        ```
      - If the command returns the AWS CLI version without any errors, the installation is successful.
   - `Once AWS CLI is installed, we need to configure it to connect to the AWS account created in the previous steps. Follow the steps below:`

1. Set up an IAM user:
   - To set up a CLI with an IAM user, follow the instructions provided in the [official documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-authentication-user.html).
   - Create an IAM user and download the Access Key ID and Secret Access Key.

2. Configure AWS CLI:
   - Open a command prompt or terminal and run the following command:
     ```bash
     aws configure
     ```
   - Provide the downloaded Access Key ID and Secret Access Key when prompted.
   - Specify the default region name (e.g., `us-east-1`) and default output format (e.g., `json`).

3. Verify AWS CLI configuration:
   - Run the following command in the command prompt or terminal:
     ```bash
     aws s3 ls
     ```
   - If the command does not give any error or return any output, it means the AWS CLI is successfully authenticated and connected to your AWS account.

### 3. Docker and Containers:
   - Docker is an open-source platform that allows you to automate the deployment and management of applications using containers.
   - Containers are lightweight, isolated environments that package all the necessary components and dependencies required to run an application.
   - To install Docker locally, you can follow the installation instructions provided in the [official documentation](https://docs.docker.com/get-docker/).
   - Open a command prompt or terminal window.
   - **Installation Validation**:
      - Run the following command to verify the installation and check the Docker version:
        ```
        docker --version
        ```
      - If the command returns the Docker version without any errors, the installation is successful.

### 4. Terraform (Infrastructure as Code (IAC)) :
   - Infrastructure as Code (IAC) is an approach to infrastructure management using code-based definitions.
   - Terraform is an open-source IAC tool developed by HashiCorp. It allows you to define and provision infrastructure resources using declarative configuration files.
   - To install Terraform locally, refer to the installation instructions provided in the [official documentation](https://learn.hashicorp.com/tutorials/terraform/install-cli).
   - **Installation Validation**:
      - Open a command prompt or terminal window.
      - Run the following command to verify the installation and check the Terraform version:
        ```
        terraform version
        ```
      - If the command returns the Terraform version without any errors, the installation is successful.
  
Ensure that all the tools are successfully installed and their versions are displayed correctly. If any of the tools are not installed or the versions are not displayed as expected, please refer to the respective official documentation for installation instructions and troubleshoot any issues encountered.

## Dockerized SpringBoot App 
**Docker** allows us to package the application along with its dependencies and runtime environment into a container. This ensures that the application runs consistently across different environments, regardless of the underlying host system or configuration. It eliminates the "works on my machine" problem by providing a consistent environment for your application.

**Container** - A container is a lightweight, standalone executable package that includes everything needed to run an application, including the code, runtime, system tools, libraries, and settings. It provides a consistent and isolated environment for running applications, ensuring that they run consistently across different computing environments. 

Containerization has become increasingly popular in the software development and deployment landscape, with Docker being one of the most widely adopted containerization platforms. Docker simplifies the process of creating, managing, and running containers, providing tools and workflows to build, deploy, and scale containerized applications.

### Step 1: Add Dockerfile 
1. In your Spring app project directory, create a file named `Dockerfile` (without any file extension).
```
reactjs-springboot-workshop/
├── public-toilet-app/
└── public-toilet-service/
    |- Dockerfile
```
2. Open the `Dockerfile` in a text editor and add the following content:
```Dockerfile
# Use the official OpenJDK 11 image as the base image
FROM adoptopenjdk/openjdk11:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the JAR file from the target directory into the container
COPY ./target/public-toilet-service-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

# Specify the command to run the Spring app
ENTRYPOINT ["java", "-jar", "app.jar"]
```
3. Save the `Dockerfile`.

### Step 3: Build Docker Image
1. `Make sure Docker Desktop application is installed and running (installed in the previous step)`
1. Open a terminal or command prompt.
1. Navigate to your SpringBoot app project directory (public-toilet-service).
1. Build the Spring project using Maven to ensure a new deployable Spring's executable Jar file is created:
  ```sh
  ./mvnw clean package
  ```
1. Build the Docker image by running the following command:
  ```sh
  docker build -t public-toilet-service .
  ```
1. Wait for the Docker image to be built. This may take a few minutes.

### Step 4: Run Docker Container
1. Run the Docker container using the following command:
  ```
  docker run -p 8080:8080 public-toilet-service
  ```
2. The Spring app will start running inside the Docker container.
3. Access the Spring app by opening a web browser and navigating to `http://localhost:8080`. You should see the API endpoints provided by your Spring app.

Now you have successfully Dockerized your Spring app and tested it locally as a Docker container.

### Testing Spring Rest API - Locally
To test the Spring REST API, you can use tools like cURL or Postman to make requests to the API endpoints provided by your app. 

For example, you can send a GET request to `http://localhost:8080/api/public-toilets` to retrieve the list of public toilets.
  ```sh
  curl -X GET http://localhost:8080/api/public-toilets
  ```
Refer to [Chapter 2: Building a Spring Boot Backend REST API for CRUD Operations - Part-2](4-springboot-rest-services-part-2.md#testing) for more testing examples.

In the next steps, we will proceed with deploying the Spring app to AWS Lambda as a Docker container and exposing the endpoint using AWS API Gateway.
