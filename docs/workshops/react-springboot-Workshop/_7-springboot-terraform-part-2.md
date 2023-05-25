---
id: spring-rest-api--docker-aws-lambda-terraform-part-2
title: Deploy Spring REST API to AWS Lambda - Terraform - Part-2
tags:
  - Springboot
  - Rest services
  - AWS Lambda
  - Docker
  - Terraform
  - AWS API Gateway
---
# Chapter 4: Deploy Java Spring Boot Rest API to AWS Lambda as a Docker Container with Terraform and Expose Rest API Endpoint with AWS API Gateway - Part-2

This chapter is a continuation of the previous chapter, [Deploy Spring REST API to AWS Lambda - Terraform - Part-1](6-springboot-docker-part-1.md). In the previous chapter, we installed all the necessary tools required for AWS Cloud deployment and added Docker support to the SpringBoot backend application.

In this chapter, we will focus on adding Terraform support, which is an Infrastructure as Code (IaC) tool, and integrating AWS infrastructure code with the SpringBoot backend application. By doing this, we will be able to automate the deployment process of our application on AWS using Terraform.

Terraform allows us to define our infrastructure requirements in code, making it easier to manage, version control, and reproduce infrastructure configurations. We will write Terraform configuration files to define the necessary AWS resources, such as AWS Lambda function and AWS API Gateway, to deploy our SpringBoot backend application.

By the end of this chapter, you will have a SpringBoot backend application packaged as a Docker container, and you will be able to deploy it on AWS Lambda using Terraform. Additionally, we will configure AWS API Gateway to expose the endpoints of our SpringBoot application, allowing external access to the REST API.

If you haven't completed the previous chapter, you can download the source code from the [Git repository](https://github.com/certifysphere/workshops.git) and follow the instructions provided to add Docker support to the SpringBoot backend application.


## Adding Terraform Infrastructure code in SpringBoot App
To deploy your Spring app as a Docker container in AWS Lambda and expose the CRUD endpoints with AWS API Gateway using Terraform, follow these steps:

### Step 1: Install Terraform
 Install Terraform by following the official documentation: [Terraform Installation Guide](https://learn.hashicorp.com/tutorials/terraform/install-cli)

### Step 2: Configure AWS CLI
 Install and configure the AWS CLI by following the official documentation: [AWS CLI Installation Guide](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html)

### Step 3: Set Up AWS Resources
 Create an S3 bucket in your AWS account to store Terraform state files. You can use the AWS CLI or the AWS Management Console to create the bucket.

### Step 4: Set Up Terraform Files
1. In your SpringBoot Service (public-toilet-service) project root directory, create a new directory named `terraform`.
2. Inside the `terraform` directory, create a new file named `main.tf` and open it in a text editor.
3. Add the following content to the `main.tf` file:

```tf
# Define the provider for AWS
provider "aws" {
  region = "us-east-1" # Change this to your desired AWS region
}

resource "aws_ecr_repository" "docker_repo" {
    name = "your-app-repo"
}


# Create an AWS Lambda function
resource "aws_lambda_function" "spring_lambda" {
  function_name = "your-app-function" # Change this to a unique name for your Lambda function
  handler       = "app.handler"
  runtime       = "provided.al2"
  memory_size   = 512
  timeout       = 30

  # Specify the Docker image URI
  image_uri = aws_ecr_image.docker_image.repository_uri

  #image_uri = "your-aws-account-id.dkr.ecr.us-east-1.amazonaws.com/your-app-repo:latest" # Change this to the URI of your Docker image stored in Amazon ECR

  # Set up environment variables if needed
  environment {
    variables = {
      # Add any environment variables required by your Spring app
    }
  }
}

# Create an API Gateway REST API
resource "aws_apigatewayv2_api" "api_gateway" {
  name          = "your-app-api-gateway" # Change this to a unique name for your API Gateway
  protocol_type = "HTTP"
}

# Create an API Gateway integration for the Lambda function
resource "aws_apigatewayv2_integration" "integration" {
  api_id             = aws_apigatewayv2_api.api_gateway.id
  integration_type   = "AWS_PROXY"
  integration_uri    = aws_lambda_function.spring_lambda.invoke_arn
  integration_method = "POST"
  integration_payload_format_version = "2.0"
}

# Create an API Gateway route
resource "aws_apigatewayv2_route" "route" {
  api_id    = aws_apigatewayv2_api.api_gateway.id
  route_key = "ANY /{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.integration.id}"
}

# Create an API Gateway deployment
resource "aws_apigatewayv2_deployment" "deployment" {
  api_id      = aws_apigatewayv2_api.api_gateway.id
  description = "Deployment for your-app"
  lifecycle {
    create_before_destroy = true
  }
}
```
4. Save the `main.tf` file.

### Step 5: Initialize and Apply Terraform Configuration
1. Open a terminal or command prompt.
2. Navigate to the `terraform` directory inside your Spring app project directory.
3. Initialize the Terraform configuration by running the following command:
```
terraform init
```
4. Apply the Terraform configuration to create the AWS resources by running the

 following command:
```
terraform apply
```
5. Review the changes that Terraform will make and type "yes" to confirm the deployment.

### Step 6: Test the API Endpoints
1. After the Terraform apply completes successfully, it will output the API Gateway endpoint URL.
2. Use cURL, Postman, or any other HTTP client to make requests to the API endpoints exposed by your Spring app.

Congratulations! You have now deployed your Spring app as a Docker container in AWS Lambda and exposed the CRUD endpoints using AWS API Gateway. You can use the provided API Gateway endpoint URL to interact with your application.

Remember to clean up your AWS resources when you no longer need them to avoid incurring unnecessary costs. You can use the `terraform destroy` command to delete the resources created by Terraform.





## Github Repo
:::note
You can refer to and clone the code up to this section from the GitHub repository using the `integrate-reactui-with-spring-rest-services` branch.

To clone the repository, you can use the following command:

```bash
git clone --branch integrate-reactui-with-spring-rest-services https://github.com/certifysphere/workshops.git
```

This will clone the repository and checkout the `integrate-reactui-with-spring-rest-services` branch, which contains the code up to this section of the workshop.

You can then navigate to the `public-toilets-app` directory to access the React app code:

```bash
cd workshops/reactjs-springboot-workshop/public-toilets-app/
```

From there, you can explore the code and continue with the workshop.
:::

## Testing 

1. Start the Spring Boot application by following the instructions in the previous [Chapter 2: Building a Spring Boot Backend REST API for CRUD Operations - Part 1](3-springboot-rest-services-part-1.md#run-the-service).

2. Start the React app by following the instructions in [Chapter 1: Building a Simple ReactJS Application](2-reactjs-web.md#run-react-app).

3.

 If your backend Spring Service is running on a port other than 8080, you can update the new port in the `PublicToiletService.js` file in the React app.

```javascript
// PublicToiletService.js
const REST_API_URL = 'http://localhost:8080'; // update this if the backend API is running on another port
```

4. Test all CRUD operations in the React app as we did in [Chapter 1: Building a Simple ReactJS Application](2-reactjs-web.md#testing).

In this chapter, we used a real REST API and made an HTTP call from the React app to the Spring app. We will deploy both the React and Spring apps to the cloud in the next chapter.