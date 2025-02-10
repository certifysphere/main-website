"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[523],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=o,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3398:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={id:"dockerized-spring-boot-rest-api",title:"Dockerized SpringBoot Java App",tags:["Springboot","Rest services","AWS Lambda","Docker","Terraform","AWS API Gateway"]},i="Chapter 4: Dockerized Java Spring Boot Rest API - Part-1",l={unversionedId:"labs/workshops/react-springboot-Workshop/dockerized-spring-boot-rest-api",id:"labs/workshops/react-springboot-Workshop/dockerized-spring-boot-rest-api",title:"Dockerized SpringBoot Java App",description:"In this chapter, we will learn how to deploy a Java Spring Boot REST API to AWS Lambda as a Docker container using Terraform. We will also explore how to expose the API endpoint using AWS API Gateway.",source:"@site/docs/labs/workshops/react-springboot-Workshop/6-springboot-docker-part-1.md",sourceDirName:"labs/workshops/react-springboot-Workshop",slug:"/labs/workshops/react-springboot-Workshop/dockerized-spring-boot-rest-api",permalink:"/docs/labs/workshops/react-springboot-Workshop/dockerized-spring-boot-rest-api",draft:!1,tags:[{label:"Springboot",permalink:"/docs/tags/springboot"},{label:"Rest services",permalink:"/docs/tags/rest-services"},{label:"AWS Lambda",permalink:"/docs/tags/aws-lambda"},{label:"Docker",permalink:"/docs/tags/docker"},{label:"Terraform",permalink:"/docs/tags/terraform"},{label:"AWS API Gateway",permalink:"/docs/tags/aws-api-gateway"}],version:"current",sidebarPosition:6,frontMatter:{id:"dockerized-spring-boot-rest-api",title:"Dockerized SpringBoot Java App",tags:["Springboot","Rest services","AWS Lambda","Docker","Terraform","AWS API Gateway"]},sidebar:"labsSidebar",previous:{title:"Integrating React UI with Spring Rest Services",permalink:"/docs/labs/workshops/react-springboot-Workshop/react-calling-spring-rest-services"},next:{title:"Deploy Spring REST API to AWS ECS Fargate - Terraform - Part-2",permalink:"/docs/labs/workshops/react-springboot-Workshop/spring-rest-api--docker-aws-ecs-terraform-part-2"}},s={},p=[{value:"Tools &amp; Installations",id:"tools--installations",level:2},{value:"1. AWS Account (Amazon Web Services):",id:"1-aws-account-amazon-web-services",level:3},{value:"2. AWS CLI (Command Line Interface):",id:"2-aws-cli-command-line-interface",level:3},{value:"3. Docker and Containers:",id:"3-docker-and-containers",level:3},{value:"4. Terraform (Infrastructure as Code (IAC)) :",id:"4-terraform-infrastructure-as-code-iac-",level:3},{value:"Dockerized SpringBoot App",id:"dockerized-springboot-app",level:2},{value:"Step 1: Add Dockerfile",id:"step-1-add-dockerfile",level:3},{value:"Step 3: Build Docker Image",id:"step-3-build-docker-image",level:3},{value:"Step 4: Run Docker Container",id:"step-4-run-docker-container",level:3},{value:"Testing Spring Rest API - Locally",id:"testing-spring-rest-api---locally",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"chapter-4-dockerized-java-spring-boot-rest-api---part-1"},"Chapter 4: Dockerized Java Spring Boot Rest API - Part-1"),(0,o.kt)("p",null,"In this chapter, we will learn how to deploy a Java Spring Boot REST API to AWS Lambda as a Docker container using Terraform. We will also explore how to expose the API endpoint using AWS API Gateway. "),(0,o.kt)("p",null,"This chapter covers the necessary steps to set up the AWS environment, create an AWS free account, understand AWS Lambda,  API Gateway, AWS CLI (Command Line Interface), Docker and containers, and the concept of Infrastructure as Code (IAC) with Terraform."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This chapter is part of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/labs/workshops/react-springboot-Workshop/reactjs-springboot-overview"},"React-Springboot Workshop"),". If you are not following along from Chapter 1, you can download the source code from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/certifysphere/workshops.git"},(0,o.kt)("strong",{parentName:"a"},"Git repository"))," and use it to complete this chapter. Alternatively, you can also refer to this chapter as a guide to deploy any Java Spring application to AWS Lambda using Terraform.")),(0,o.kt)("h2",{id:"tools--installations"},"Tools & Installations"),(0,o.kt)("p",null,"The following tools and an AWS account will be needed to complete this chapter. Please refer to the official documentation for the installation steps of each tool and follow the instructions provided. Once you have all the required tools installed and an AWS account set up, you can proceed with the chapter."),(0,o.kt)("h3",{id:"1-aws-account-amazon-web-services"},"1. AWS Account (Amazon Web Services):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"AWS is a cloud computing platform that provides a wide range of services and solutions for building and deploying applications in the cloud."),(0,o.kt)("li",{parentName:"ul"},"To follow along with this chapter, you can create an AWS free account by visiting the ",(0,o.kt)("a",{parentName:"li",href:"https://aws.amazon.com/free/"},"AWS Free Tier")," page. The AWS Free Tier provides a limited set of services and resources free of charge for a specific duration."),(0,o.kt)("li",{parentName:"ul"},"During the account registration process, AWS may ask for credit card information. However, if you use only the services included in the free tier, you should not incur any charges.")),(0,o.kt)("h3",{id:"2-aws-cli-command-line-interface"},"2. AWS CLI (Command Line Interface):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"AWS CLI is a unified tool provided by AWS to manage various AWS services from the command line."),(0,o.kt)("li",{parentName:"ul"},"It enables you to interact with AWS services, including Lambda, API Gateway, and more, using commands."),(0,o.kt)("li",{parentName:"ul"},"You can install and configure AWS CLI by following the instructions in the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"},"official documentation"),"."),(0,o.kt)("li",{parentName:"ul"},"Run the following command to verify the installation and check the AWS CLI version:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"aws --version\n")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If the command returns the AWS CLI version without any errors, the installation is successful."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Once AWS CLI is installed, we need to configure it to connect to the AWS account created in the previous steps. Follow the steps below:"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set up an IAM user:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"To set up a CLI with an IAM user, follow the instructions provided in the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-authentication-user.html"},"official documentation"),"."),(0,o.kt)("li",{parentName:"ul"},"Create an IAM user and download the Access Key ID and Secret Access Key."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure AWS CLI:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Open a command prompt or terminal and run the following command:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"aws configure\n"))),(0,o.kt)("li",{parentName:"ul"},"Provide the downloaded Access Key ID and Secret Access Key when prompted."),(0,o.kt)("li",{parentName:"ul"},"Specify the default region name (e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"us-east-1"),") and default output format (e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"json"),")."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verify AWS CLI configuration:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Run the following command in the command prompt or terminal:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"aws s3 ls\n"))),(0,o.kt)("li",{parentName:"ul"},"If the command does not give any error or return any output, it means the AWS CLI is successfully authenticated and connected to your AWS account.")))),(0,o.kt)("h3",{id:"3-docker-and-containers"},"3. Docker and Containers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docker is an open-source platform that allows you to automate the deployment and management of applications using containers."),(0,o.kt)("li",{parentName:"ul"},"Containers are lightweight, isolated environments that package all the necessary components and dependencies required to run an application."),(0,o.kt)("li",{parentName:"ul"},"To install Docker locally, you can follow the installation instructions provided in the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"official documentation"),"."),(0,o.kt)("li",{parentName:"ul"},"Open a command prompt or terminal window."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Installation Validation"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Run the following command to verify the installation and check the Docker version:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker --version\n"))),(0,o.kt)("li",{parentName:"ul"},"If the command returns the Docker version without any errors, the installation is successful.")))),(0,o.kt)("h3",{id:"4-terraform-infrastructure-as-code-iac-"},"4. Terraform (Infrastructure as Code (IAC)) :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Infrastructure as Code (IAC) is an approach to infrastructure management using code-based definitions."),(0,o.kt)("li",{parentName:"ul"},"Terraform is an open-source IAC tool developed by HashiCorp. It allows you to define and provision infrastructure resources using declarative configuration files."),(0,o.kt)("li",{parentName:"ul"},"To install Terraform locally, refer to the installation instructions provided in the ",(0,o.kt)("a",{parentName:"li",href:"https://learn.hashicorp.com/tutorials/terraform/install-cli"},"official documentation"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Installation Validation"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Open a command prompt or terminal window."),(0,o.kt)("li",{parentName:"ul"},"Run the following command to verify the installation and check the Terraform version:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"terraform version\n"))),(0,o.kt)("li",{parentName:"ul"},"If the command returns the Terraform version without any errors, the installation is successful.")))),(0,o.kt)("p",null,"Ensure that all the tools are successfully installed and their versions are displayed correctly. If any of the tools are not installed or the versions are not displayed as expected, please refer to the respective official documentation for installation instructions and troubleshoot any issues encountered."),(0,o.kt)("h2",{id:"dockerized-springboot-app"},"Dockerized SpringBoot App"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Docker"),' allows us to package the application along with its dependencies and runtime environment into a container. This ensures that the application runs consistently across different environments, regardless of the underlying host system or configuration. It eliminates the "works on my machine" problem by providing a consistent environment for your application.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Container")," - A container is a lightweight, standalone executable package that includes everything needed to run an application, including the code, runtime, system tools, libraries, and settings. It provides a consistent and isolated environment for running applications, ensuring that they run consistently across different computing environments. "),(0,o.kt)("p",null,"Containerization has become increasingly popular in the software development and deployment landscape, with Docker being one of the most widely adopted containerization platforms. Docker simplifies the process of creating, managing, and running containers, providing tools and workflows to build, deploy, and scale containerized applications."),(0,o.kt)("h3",{id:"step-1-add-dockerfile"},"Step 1: Add Dockerfile"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In your Spring app project directory, create a file named ",(0,o.kt)("inlineCode",{parentName:"li"},"Dockerfile")," (without any file extension).")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"reactjs-springboot-workshop/\n\u251c\u2500\u2500 public-toilet-app/\n\u2514\u2500\u2500 public-toilet-service/\n    |- Dockerfile\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Open the ",(0,o.kt)("inlineCode",{parentName:"li"},"Dockerfile")," in a text editor and add the following content:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'# Use the official OpenJDK 11 image as the base image\nFROM adoptopenjdk/openjdk11:latest\n\n# Set the working directory inside the container\nWORKDIR /app\n\n# Copy the JAR file from the target directory into the container\nCOPY ./target/public-toilet-service-0.0.1-SNAPSHOT.jar app.jar\n\nEXPOSE 8080\n\n# Specify the command to run the Spring app\nENTRYPOINT ["java", "-jar", "app.jar"]\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Save the ",(0,o.kt)("inlineCode",{parentName:"li"},"Dockerfile"),".")),(0,o.kt)("h3",{id:"step-3-build-docker-image"},"Step 3: Build Docker Image"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Make sure Docker Desktop application is installed and running (installed in the previous step)")),(0,o.kt)("li",{parentName:"ol"},"Open a terminal or command prompt."),(0,o.kt)("li",{parentName:"ol"},"Navigate to your SpringBoot app project directory (public-toilet-service)."),(0,o.kt)("li",{parentName:"ol"},"Build the Spring project using Maven to ensure a new deployable Spring's executable Jar file is created:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"./mvnw clean package\n"))),(0,o.kt)("li",{parentName:"ol"},"Build the Docker image by running the following command:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker build -t public-toilet-service .\n"))),(0,o.kt)("li",{parentName:"ol"},"Wait for the Docker image to be built. This may take a few minutes.")),(0,o.kt)("h3",{id:"step-4-run-docker-container"},"Step 4: Run Docker Container"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run the Docker container using the following command:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker run -p 8080:8080 public-toilet-service\n"))),(0,o.kt)("li",{parentName:"ol"},"The Spring app will start running inside the Docker container."),(0,o.kt)("li",{parentName:"ol"},"Access the Spring app by opening a web browser and navigating to ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:8080"),". You should see the API endpoints provided by your Spring app.")),(0,o.kt)("p",null,"Now you have successfully Dockerized your Spring app and tested it locally as a Docker container."),(0,o.kt)("h3",{id:"testing-spring-rest-api---locally"},"Testing Spring Rest API - Locally"),(0,o.kt)("p",null,"To test the Spring REST API, you can use tools like cURL or Postman to make requests to the API endpoints provided by your app. "),(0,o.kt)("p",null,"For example, you can send a GET request to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/api/public-toilets")," to retrieve the list of public toilets."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://localhost:8080/api/public-toilets\n")),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/labs/workshops/react-springboot-Workshop/springboot-rest-services-part-2#testing"},"Chapter 2: Building a Spring Boot Backend REST API for CRUD Operations - Part-2")," for more testing examples."),(0,o.kt)("p",null,"In the next steps, we will proceed with deploying the Spring app to AWS Lambda as a Docker container and exposing the endpoint using AWS API Gateway."))}u.isMDXComponent=!0}}]);