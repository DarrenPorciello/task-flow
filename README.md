# Next.js Project Management App

## Overview

This is a full-stack Project Management application built using Next.js for the front end and Node.js for the back end. The app is designed to help users create, manage, and track projects efficiently.
It is deployed on AWS, utilizing various AWS services such as Cognito for authentication, EC2 for hosting the backend, RDS with PostgreSQL for database management, and S3 for file storage.

## Deployment architecture

![Project-management-cloud-diagram](https://github.com/user-attachments/assets/31000f78-b5a7-469c-8a2c-ae9e3f508f77)

Frontend (Next.js) -> AWS Amplify (Hosting)  
Backend (Node.js) -> AWS EC2 Instance  
Database (PostgreSQL) -> AWS RDS  
User Authentication -> AWS Cognito  
File Storage -> AWS S3  

Features

User authentication with AWS Cognito

Role-based access control (Admin, Manager, Team Member)

CRUD operations for projects and tasks

Team collaboration with comments and status updates

Task assignment and progress tracking

AWS-hosted backend using EC2

PostgreSQL database hosted on AWS RDS

Secure API endpoints using JWT authentication

Responsive and modern UI with Tailwind CSS

Technologies Used

Frontend:

Next.js

React.js

Tailwind CSS

AWS Amplify (for authentication integration with Cognito)

Backend:

Node.js (Express.js)

PostgreSQL (AWS RDS)

Sequelize ORM

AWS Cognito (User authentication)

AWS EC2 (Hosting the backend)

AWS S3 (For storing files and images)

Deployment Architecture

Getting Started

Prerequisites

Ensure you have the following installed on your machine:

Node.js (>=16.x)

PostgreSQL

AWS CLI (Configured with IAM access)

Docker (Optional, for local database setup)

Setup & Installation

Clone the repository

git clone https://github.com/your-repo/project-management-app.git
cd project-management-app

Install dependencies

cd client  # Navigate to frontend
npm install
cd ../server  # Navigate to backend
npm install

Configure environment variables

Create a .env file in both client and server directories

Update the .env files with appropriate values:

Frontend .env (client/.env)

NEXT_PUBLIC_AWS_REGION=us-east-1
NEXT_PUBLIC_COGNITO_USER_POOL_ID=your-user-pool-id
NEXT_PUBLIC_COGNITO_APP_CLIENT_ID=your-app-client-id
NEXT_PUBLIC_API_URL=https://your-backend-api.com

Backend .env (server/.env)

DATABASE_URL=postgres://yourusername:yourpassword@your-rds-endpoint:5432/yourdatabase
AWS_REGION=us-east-1
COGNITO_USER_POOL_ID=your-user-pool-id
COGNITO_APP_CLIENT_ID=your-app-client-id
JWT_SECRET=your-secret-key

Run the development environment

# Start the frontend
cd client
npm run dev

# Start the backend
cd ../server
npm run dev

Access the application

Frontend: http://localhost:3000

Backend API: http://localhost:5000

Deployment on AWS

1. Deploy Backend to AWS EC2

Launch an EC2 instance

Choose an Amazon Linux 2 or Ubuntu AMI

Open ports 5000 (backend) and 5432 (PostgreSQL)

SSH into the instance and install dependencies

ssh -i your-key.pem ec2-user@your-ec2-ip
sudo yum update -y
sudo yum install nodejs npm -y
sudo yum install postgresql -y

Clone the repository and set up the backend

git clone https://github.com/your-repo/project-management-app.git
cd project-management-app/server
npm install

Run the backend

npm start

2. Deploy Frontend to AWS Amplify

Connect the repository to AWS Amplify

Set environment variables in Amplify Console

Deploy the frontend

3. Deploy Database on AWS RDS

