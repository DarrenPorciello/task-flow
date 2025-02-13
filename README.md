# Task Flow

## Overview

A full-stack Project Management application built using Next.js for the front end and Node.js for the back end.  

The app is designed to help users create, manage, and track projects efficiently.  

It is deployed on AWS, utilizing various AWS services such as Cognito for authentication, EC2 for hosting the backend, RDS with PostgreSQL for database management, and S3 for file storage.

## Deployment architecture

![Project-management-cloud-diagram](https://github.com/user-attachments/assets/21b8d588-f0d2-4c68-be75-86b4cabb9a03)

AWS Amplify (Hosting) -> Frontend (Next.js)   
AWS EC2 Instance -> Backend (Node.js)   
AWS RDS -> Database (PostgreSQL)   
AWS Cognito -> User Authentication  
AWS S3 -> File Storage  
AWS API Gateway ->  Handle Requests


## Data Model

![ProjectManagement_Diagram-1](https://github.com/user-attachments/assets/e575be72-d81f-4d6a-b4a9-217751f76785)



## Features

**User authentication with AWS Cognito:**

   ![AWS_PM_Auth (1)](https://github.com/user-attachments/assets/cd64e368-08c9-43b6-9d48-355bd96a6a37)

- Role-based access control (Admin, Manager, Team Member)
- CRUD operations for projects and tasks
- Team collaboration with comments and status updates
- Task assignment and progress tracking
- AWS-hosted backend using EC2
- PostgreSQL database hosted on AWS RDS
- Secure API endpoints using JWT authentication
- Responsive and modern UI with Tailwind CSS


## Technologies used
**Frontend**: Next.js, Tailwind, Redux, React  
**Backend**: Node.js, Express.js, PostgreSQL, Prisma  
**AWS**: Lambda, Cognito, EC2, S3, RDS, Amplify, API Gateway

## Application

![PM_Ss](https://github.com/user-attachments/assets/d423ab02-384f-4a85-9c54-c30562b538d3)
![PM_ss2](https://github.com/user-attachments/assets/8e3a8997-461f-4778-8e97-d1d04d8cc07b)

## How to run
This application is configured to run on AWS, and is not set up for local use.
Due to the constraints of AWS free tier, and my continued pushing of its boundaries, it is unfortunately not feasible to keep the application running indefinitely.
To view a live demo of the code (Amplify Deployment) or if you have any questions on how to deploy on your machine, feel free to email me at:  
[darren.porciello1@gmail.com](mailto:darren.porciello1@gmail.com)
