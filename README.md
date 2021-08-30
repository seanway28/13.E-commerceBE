# 13.E-commerceBE

Description

This application provides the framework for maintaining and updating an e-commerce site from the back end. This application uses MySQL and Sequelize for trusted, efficient creation and maintenance of the datanase for the front-end site going forward.

Table of Contents

• Installation

• Usage

• Contributing

• License

• Questions






Installation

Follow the steps below for installing this particular project:


(1) Clone the repository to your machine


(2) Navigate to the root folder of the application and open your CLI


(3) Run npm install for the necessary dependencies


(4) Create a .env file in the root folder of the application to store your MySQL username and password


(5) From the command line, enter the MySQL shell using mysql -u root -p


(6) Inside the MySQL shell run source db/schema.sql to create the database


(7) Exit the MySQL shell (using "quit") to return to the command line. Proceed to run npm run seed to polulate the tables and data 


(8) Use the command npm start to start the server for testing




// https://github.com/coding-boot-camp/fantastic-umbrella




Usage


To commence running the application, navigate to the folder where the application has been cloned on your computer. Proceed to follow steps 7 & 8 from the Installtion Steps to load the data and start the server. From there, navigate to Insomnia Core to use it to make API requests as needed. Please see the examples further down to see what they will look like in Insomnia!
