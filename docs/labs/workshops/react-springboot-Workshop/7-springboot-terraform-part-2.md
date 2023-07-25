---
id: spring-rest-api--docker-aws-ecs-terraform-part-2
title: Deploy Spring REST API to AWS ECS Fargate - Terraform - Part-2
tags:
  - Spring Boot
  - Rest Services
  - AWS ECS
  - AWS ECR
  - Application Load Balancer
  - Docker
  - Terraform
---
# Chapter 5: Deploy Java Spring Boot Rest API Docker Container Image to AWS ECS Fargate with Terraform and Make Rest API URL Available with AWS ALB - Part-2

This chapter is a continuation of the previous chapter, [**Dockerized Java Spring Boot Rest API - Part-1**](6-springboot-docker-part-1.md). In the previous chapter, we completed several tasks to set up our environment for deploying our Spring Boot Rest API on AWS. These tasks included:

- Creating an AWS Free Tier Account [AWS Free Tier Account](https://aws.amazon.com/free/)
- Setting up an AWS IAM User and obtaining the Access and Secret Key [AWS IAM User](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html)
- Installing and configuring the AWS CLI [AWS CLI Documentation](https://aws.amazon.com/cli/)
- Installing and configuring the Terraform CLI [Terraform Documentation](https://learn.hashicorp.com/tutorials/terraform/install-cli)
- Installing Docker Desktop [Docker Desktop Documentation](https://www.docker.com/products/docker-desktop)
- Dockerizing our Spring Boot application

With these initial steps completed, we will now focus on deploying our Dockerized Java Spring Boot Rest API to AWS using the following technologies:

- AWS ECS Fargate (Elastic Container Service) [AWS ECS Fargate Documentation](https://aws.amazon.com/ecs/)
- AWS Application Load Balancer [AWS ALB Documentation](https://aws.amazon.com/elasticloadbalancing/)
- AWS ECR (Elastic Container Repository) [AWS ECR Documentation](https://aws.amazon.com/ecr/)
- Terraform [Terraform Documentation](https://www.terraform.io/docs/index.html)
- Docker [Docker Documentation](https://docs.docker.com/)

By leveraging these technologies, we will be able to deploy our Spring Boot Rest API as a Docker container on AWS ECS Fargate, utilize an Application Load Balancer to distribute traffic, and leverage the Elastic Container Repository for storing our container images. We will use Terraform to provision and manage the infrastructure required for our deployment. Let's continue with the next phase of our workshop and explore these technologies in detail!


## Build Docker image and push to AWS ECR

To build and push the Docker image for the Spring Boot application to an AWS ECR repository, you can create a `build.sh` file at the project root with the following script:

```bash
#!/bin/bash

# Variables
app_name="public-toilet-service"
aws_region="us-east-1"

# Build Maven project
mvn clean install

# Build Docker image
docker build -t $app_name .

# Get AWS account number
aws_account_number=$(aws sts get-caller-identity --query "Account" --output text)

# Construct ECR repository URL and Docker image tag
ecr_repository_url="${aws_account_number}.dkr.ecr.$aws_region.amazonaws.com/$app_name"
docker_image_tag="v1"

# Log in to AWS ECR
login_status=1
while [[ $login_status -ne 0 ]]; do
    aws ecr get-login-password --region $aws_region | docker login --username AWS --password-stdin ${aws_account_number}.dkr.ecr.$aws_region.amazonaws.com
    login_status=$?
    sleep 1
done

# Check if ECR repository exists and create it if it doesn't
if ! aws ecr describe-repositories --region $aws_region --repository-names $app_name >/dev/null 2>&1; then
    aws ecr create-repository --region $aws_region --repository-name $app_name
fi

# Tag Docker image
docker tag $app_name:latest $ecr_repository_url:$docker_image_tag

# Push Docker image to ECR repository
docker push $ecr_repository_url:$docker_image_tag

echo "Docker image pushed to ECR repository: $ecr_repository_url:$docker_image_tag"
```

This script performs the following steps:

1. Sets the variables:
   - `app_name`: The name of the Spring Boot application.
   - `aws_region`: The AWS region where the ECR repository is located.

2. Builds the Maven project using `mvn clean install`.

3. Builds the Docker image for the Spring Boot application using `docker build`, tagging it with the `$app_name` variable.

4. Retrieves the AWS account number by executing the `aws sts get-caller-identity` command and extracting the account number from the output.

5. Constructs the ECR repository URL by combining the AWS account number, AWS region, and `$app_name`. Sets the Docker image tag as `v1`.

6. Logs in to the AWS ECR repository using `aws ecr get-login-password` to retrieve an authentication token and `docker login` to log in with the token.

7. Checks if the ECR repository already exists using `aws ecr describe-repositories` and creates it with `aws ecr create-repository` if it doesn't exist.

8. Tags the Docker image with the ECR repository URL and Docker image tag using `docker tag`.

9. Pushes the Docker image to the ECR repository using `docker push`.

10. Prints a success message indicating that the Docker image has been pushed to the ECR repository, displaying the ECR repository URL and Docker image tag.

You can execute the `build.sh` script to build and push the Docker image to your AWS ECR repository. Make sure you have the necessary AWS credentials and permissions configured for successful execution.

## Terraform -  Build AWS ECS Infrastructure and Deploy Docker Image

### Step 1: Terraform - Set up AWS VPC and other networking

To set up the AWS VPC and other networking components using Terraform, follow these steps:

1. In your SpringBoot Service (`public-toilet-service`) project root directory, create a new directory named `terraform`.

2. Inside the `terraform` directory, create a new file named `main.tf` and open it in a text editor (such as VSCode).

3. Add the following content to the `main.tf` file:

```hcl
# Define the provider for AWS
provider "aws" {
  region = var.region
}

data "aws_availability_zones" "available" {}

locals {
  azs = slice(data.aws_availability_zones.available.names, 0, 3)
  tags = {
    AppName = var.name
  }
}

module "vpc" {
  source                 = "terraform-aws-modules/vpc/aws"
  name                   = var.name
  cidr                   = var.cidr
  azs                    = local.azs
  private_subnets        = var.private_subnets
  public_subnets         = var.public_subnets
  tags                   = local.tags
  enable_nat_gateway     = true
  single_nat_gateway     = false
  one_nat_gateway_per_az = true
  enable_vpn_gateway     = false
  enable_dns_hostnames   = true
  enable_dns_support     = true
}
```

Let's go through the content of the `main.tf` file:

1. Provider Configuration: The `provider` block specifies the AWS provider and sets the `region` parameter based on the `var.region` input variable.

2. Data Blocks: Three `data` blocks are used to gather information about the AWS environment:

   a. `aws_availability_zones` data block retrieves the available availability zones in the selected region.

3. Locals Block: The `locals` block defines local variables used within the configuration:

   a. The `azs` variable slices the list of available availability zones to the first three.

   b. The `tags` variable defines a map of tags, including the `AppName` tag with the value of the `var.name` input variable.

4. VPC Module: The `module` block declares the use of the VPC module provided by the `terraform-aws-modules/vpc/aws` source. The module is instantiated with various input variables:

   - `name`: The name of the VPC.
   - `cidr`: The CIDR block for the VPC.
   - `azs`: The availability zones where subnets will be created.
   - `private_subnets`: A list of CIDR blocks for private subnets.
   - `public_subnets`: A list of CIDR blocks for public subnets.
   - `tags`: Tags to be applied to the VPC resources.
   - `enable_nat_gateway`: Whether to create a NAT gateway for private subnets.
   - `single_nat_gateway`: Whether to use a single NAT gateway for all private subnets.
   - `one_nat_gateway_per_az`: Whether to use one NAT gateway per availability zone.
   - `enable_vpn_gateway`: Whether to create a VPN gateway for the VPC.
   - `enable_dns_hostnames`: Whether to enable DNS hostnames for the VPC.
   - `enable_dns_support`: Whether to enable DNS support for the VPC.

The provided `main.tf` file sets up the VPC infrastructure using the VPC module. You can further customize this file and add more resources or configurations as per your project requirements.

Please note that you may need to update the values of the input variables (`var.region`, `var.name`,

 `var.cidr`, `var.private_subnets`, `var.public_subnets`) in the file based on your specific configuration.

### Step 2: ECS and ALB terraform configurations
Add a new file `fargate.tf` inside `terraform` folder 
```hcl
# Create an ECS cluster
data "aws_ecr_repository" "my_ecr_repo" {
  name = var.ecr_repo_name
}

locals {
  task_image = "${data.aws_ecr_repository.my_ecr_repo.repository_url}:v1"
  cw_log_group = "/ecs/${var.name}" 
  container_definition = [{
    cpu         = 512
    image       = local.task_image
    memory      = 1024
    name        = var.name
    networkMode = "awsvpc"
    portMappings = [
      {
        protocol      = "tcp"
        containerPort = var.container_port
        hostPort      = var.container_port
      }
    ]
    logConfiguration = {
      logdriver = "awslogs"
      options = {
        "awslogs-group"         = local.cw_log_group
        "awslogs-region"        = data.aws_region.current.name
        "awslogs-stream-prefix" = "stdout"
      }
    }
  }]
}

# ECS Task and Service Security Group, IAM Policy and Roles.
resource "aws_security_group" "fargate_task" {
  name   = "${var.name}-fargate-task-sg"
  vpc_id = module.vpc.vpc_id
  ingress {
    from_port   = var.container_port
    to_port     = var.container_port
    protocol    = "tcp"
    cidr_blocks = [module.vpc.vpc_cidr_block]
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

data "aws_iam_policy_document" "fargate-role-policy" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["ecs.amazonaws.com", "ecs-tasks.amazonaws.com"]
    }
  }
}

resource "aws_iam_policy" "fargate_execution" {
  name   = "${var.name}-fargate_execution_policy"
  policy = "${file("fargateExecutionIAMPolicy.json")}"
}

resource "aws_iam_policy" "fargate_task" {
  name   = "${var.name}-fargate_task_policy"
  policy = "${file("fargateTaskIAMPolicy.json")}"
}
resource "aws_iam_role" "fargate_execution" {
  name               = "${var.name}-fargate-execution-role"
  assume_role_policy = data.aws_iam_policy_document.fargate-role-policy.json
}
resource "aws_iam_role" "fargate_task" {
  name               = "${var.name}-fargate-task-role"
  assume_role_policy = data.aws_iam_policy_document.fargate-role-policy.json
}
resource "aws_iam_role_policy_attachment" "fargate-execution" {
  role       = aws_iam_role.fargate_execution.name
  policy_arn = aws_iam_policy.fargate_execution.arn
}
resource "aws_iam_role_policy_attachment" "fargate-task" {
  role       = aws_iam_role.fargate_task.name
  policy_arn = aws_iam_policy.fargate_task.arn
}

#CloudWatch Log 
resource "aws_cloudwatch_log_group" "app" {
  name = local.cw_log_group
}
#ECS CLuster, Task and Service

resource "aws_ecs_cluster" "main" {
  name = "${var.name}-ecs-cluster"
}

resource "aws_ecs_task_definition" "app" {
  family                   = "${var.name}-task-family"
  network_mode             = "awsvpc"
  cpu                      = local.container_definition.0.cpu
  memory                   = local.container_definition.0.memory
  requires_compatibilities = ["FARGATE"]
  container_definitions    = jsonencode(local.container_definition)
  execution_role_arn       = aws_iam_role.fargate_execution.arn
  task_role_arn            = aws_iam_role.fargate_task.arn
}

resource "aws_ecs_service" "app" {
  name            = "${var.name}-svc"
  cluster         = aws_ecs_cluster.main.name
  task_definition = aws_ecs_task_definition.app.arn
  desired_count   = var.service_desired_count
  launch_type     = "FARGATE"

  load_balancer {
    target_group_arn = aws_lb_target_group.my_target_group.arn
    container_name   = var.name
    container_port   = var.container_port
  }
  network_configuration {
    security_groups = [aws_security_group.fargate_task.id]
    subnets         = module.vpc.private_subnets
  }
}

#Public Load Balancer
resource "aws_security_group" "alb" {
  name   = "${var.name}-alb-sg"
  vpc_id = module.vpc.vpc_id

  ingress {
    protocol         = "tcp"
    from_port        = 80
    to_port          = 80
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  ingress {
    protocol         = "tcp"
    from_port        = 443
    to_port          = 443
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  egress {
    protocol         = "-1"
    from_port        = 0
    to_port          = 0
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }
}


# Create a load balancer target group
resource "aws_lb_target_group" "my_target_group" {
  name        = "${var.name}-target-group"
  port        = 80
  protocol    = "HTTP"
  vpc_id      = module.vpc.vpc_id
  target_type = "ip"
  health_check {
    enabled = true
    path    = var.health_check_path
  }
}

# Create a load balancer listener
resource "aws_lb_listener" "my_listener" {
  load_balancer_arn = aws_lb.my_load_balancer.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    target_group_arn = aws_lb_target_group.my_target_group.arn
    type             = "forward"
  }
}

# # Create a load balancer
resource "aws_lb" "my_load_balancer" {
  name               = "${var.name}-load-balancer"
  load_balancer_type = "application"
  subnets            = module.vpc.public_subnets
  security_groups    = [aws_security_group.alb.id]
}

```
  The `fargate.tf` file contains the following:

  1. Data Block: It fetches information about the ECR repository specified in the `var.ecr_repo_name` input variable.

  2. Locals Block: It defines local variables used within the configuration.

    - `task_image` variable specifies the image URI from the ECR repository.
    - `cw_log_group` variable specifies the CloudWatch log group name.
    - `container_definition` variable contains the definition for the ECS container, including CPU, memory, networking, port mappings, and log configuration.

  3. AWS Security Group: It creates a security group for the Fargate task, allowing ingress traffic on the specified container port and egress traffic to any destination.

  4. AWS IAM Role and Policy: It creates IAM roles, policies, and role-policy attachments for Fargate execution and task roles.

  5. AWS CloudWatch Log Group: It creates a CloudWatch log group for logging.

  6. AWS ECS Cluster, Task Definition, and Service: These resources create an ECS cluster, task definition, and service for the Fargate deployment. The task definition references the container definition, execution role, and task role.

  7. AWS ECS Service Load Balancer: It configures the load balancer for the ECS service, including the target group and network configuration.

  8. Public Load Balancer: It creates a security group for the Application Load Balancer (ALB) allowing ingress traffic on ports 80 and 443 and egress traffic to any destination.

  9. Load Balancer Target Group and Listener: It creates a target group and listener for the ALB to route traffic to the ECS service.

  10. Load Balancer: It creates an Application Load Balancer and associates it with the specified subnets and security groups.

  The provided `fargate.tf` file sets up the ECS Fargate deployment with an ALB for load balancing. Additional resources and configurations can be added as needed for your specific project.

### Step 3: Terraform Veriables 
Create a new file named variables.tf inside the terraform directory. This file will store the default values for all the configurations used in other Terraform scripts. These settings can be overridden with different values if needed.

```hcl
variable "name" {
  description = "the name of your stack or application."
  default     = "public-toilet"
}

variable "ecr_repo_name" {
  description = "the ECR Repository Name"
  default     = "public-toilet-service"
}

variable "region" {
  description = "the AWS region in which resources are created."
  default     = "us-east-1"
}

variable "cidr" {
  description = "The CIDR block for the VPC."
  default     = "10.0.0.0/16"
}

variable "private_subnets" {
  description = "a list of CIDRs for private subnets in your VPC, must be set if the cidr variable is defined, needs to have as many elements as there are availability zones"
  default     = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
}

variable "public_subnets" {
  description = "a list of CIDRs for public subnets in your VPC, must be set if the cidr variable is defined, needs to have as many elements as there are availability zones"
  default     = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]
}

variable "health_check_path" {
  description = "Health Check path for load balancer"
  default     = "/actuator/health"
}

variable "container_port" {
  description = "The port where the Docker is exposed"
  default     = 8080
}

variable "service_desired_count" {
  description = "Desired Number of tasks running in parallel"
  default     = 2
}

```
  The `variables.tf` file contains the following variables:

  1. `name`: The name of your stack or application. It has a default value of "public-toilet".

  2. `ecr_repo_name`: The name of the ECR repository. It has a default value of "public-toilet-service".

  3. `region`: The AWS region in which resources are created. It has a default value of "us-east-1".

  4. `cidr`: The CIDR block for the VPC. It has a default value of "10.0.0.0/16".

  5. `private_subnets`: A list of CIDRs for private subnets in your VPC. It must be set if the `cidr` variable is defined and needs to have as many elements as there are availability zones. It has a default value of ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"].

  6. `public_subnets`: A list of CIDRs for public subnets in your VPC. It must be set if the `cidr` variable is defined and needs to have as many elements as there are availability zones. It has a default value of ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"].

  7. `health_check_path`: The health check path for the load balancer. It has a default value of "/actuator/health".

  8. `container_port`: The port where the Docker container is exposed. It has a default value of 8080.

  9. `service_desired_count`: The desired number of tasks running in parallel. It has a default value of 2.

  The variables.tf file defines the variables used in your Terraform configuration with their default values. You can override these values by specifying them in a terraform.tfvars file or by passing them directly as command-line arguments when running Terraform commands.

### Step 4:  Terraform output file Configuration
Create a new file named outputs.tf inside the terraform directory.

In Terraform, modules and resources can provide output values once AWS resources are provisioned. These output values can be printed or used in other modules or scripts.
```hcl
output "vpc_id" {
  description = "The ID of the VPC"
  value       = module.vpc.vpc_id
}

output "vpc_arn" {
  description = "The ARN of the VPC"
  value       = module.vpc.vpc_arn
}

output "vpc_cidr_block" {
  description = "The CIDR block of the VPC"
  value       = module.vpc.vpc_cidr_block
}

output "private_subnets" {
  description = "List of IDs of private subnets"
  value       = module.vpc.private_subnets
}

output "public_subnets" {
  description = "List of IDs of public subnets"
  value       = module.vpc.public_subnets
}

# # Output the load balancer DNS name
output "load_balancer_dns_name" {
  value = aws_lb.my_load_balancer.dns_name
}

```
  The `output.tf` file contains the following:

  1. VPC Outputs:
    - `vpc_id`: The ID of the VPC.
    - `vpc_arn`: The ARN of the VPC.
    - `vpc_cidr_block`: The CIDR block of the VPC.
    - `private_subnets`: A list of IDs of private subnets.
    - `public_subnets`: A list of IDs of public subnets.

  2. Load Balancer Output:
    - `load_balancer_dns_name`: The DNS name of the load balancer.

  These outputs allow you to retrieve and reference important information from the Terraform deployment. For example, you can use the VPC ID or load balancer DNS name in subsequent steps or other parts of your infrastructure.

  By defining these outputs, you can easily access the values after running `terraform apply` to see the specific details about your deployed resources.


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

After successfully applying the Terraform configuration, AWS ECS and ALB resources will be provisioned, and your Spring Boot app container image will be deployed as an ECS task. Follow the steps below to test the API endpoints:

1. Look for the LoadBalancer URL (`load_balancer_dns_name`) in the Terraform outputs. This URL will be provided as the endpoint to access your application.

2. Test all CRUD operations in the Spring Boot REST API as we did in [Chapter 2: Building a Spring Boot Backend REST API for CRUD Operations - Part 2](4-springboot-rest-services-part-2.md#rest-api-testing). Replace the `http://localhost:8080` part of the URL with the load balancer URL copied from the Terraform output.

This will allow you to interact with your Spring Boot API through the LoadBalancer URL provided by AWS.


### Step 7: Clean Up AWS Resources

When you no longer need the AWS resources created by Terraform, it's important to clean them up to avoid unnecessary costs. Follow the steps below to clean up your AWS resources:

1. Open a terminal or command prompt.

2. Navigate to the directory where your Terraform configuration files are located.

3. Run the following command to destroy the AWS resources created by Terraform:

   ```shell
   terraform destroy
   ```

   You may be prompted to confirm the destruction of resources. Type `yes` and press Enter to proceed.

4. Terraform will begin destroying the provisioned resources. Wait for the process to complete.

   **Note:** Keep in mind that destroying resources is an irreversible action, and all data associated with the resources will be lost.

By performing the above steps, you will clean up the AWS resources provisioned by Terraform, ensuring that you are not billed for resources you no longer need.



## GitHub Repository

:::note
You can refer to and clone the code up to this section from the [**GitHub Repository**](https://github.com/certifysphere/workshops.git) using the `with-service-docker-image-to-ecs` branch.

To clone the repository, use the following command:

```bash
git clone --branch with-service-docker-image-to-ecs https://github.com/certifysphere/workshops.git
```

This command will clone the repository and checkout the `with-service-docker-image-to-ecs` branch, which contains the code up to this section of the workshop.

Navigate to the `public-toilets-app` directory to access the app code:

```bash
cd workshops/reactjs-springboot-workshop/public-toilets-app/
```

From there, you can explore the code and continue with the workshop.
:::

