# Reserve - A Hotel Room Booking Platform

Reserve — is for you if you **want to book premium hotels** in easy way with intuitive UI interfaces.

## Features: 
  * Check for Availability of Room 
  * No Conflicting of Bookings, Bookings will be shown if customer has booked the room for specific date range,
  * Room Details, Multiple Room Bookings
  * Offer: 5% of discount applied o

Table of contents
=================

<!--ts-->
  * [Installation](#installation)
     * [Backend](#backend)
     * [Frontend](#frontend)
  * [Tech Stack](#tech-stack)
  * [Code Flow](#code-flow)
  * [Api Enpoints Documentation](#api_endpoint)
  
<!--te-->

Installation
============

This project is divided into two parts: frontend and backend. Follow the instructions below to set up both.

### Backend

   1. Navigate to the backend directory:

      ```bash
      cd backend
      ```
   2. Install the necessary packages:
       ```bash
      npm install 
      ```
   3. For backend to run, mongodb url is needed, the .env file is also included in the repo for ease.
      > [!IMPORTANT]
      > Credentials for Mongodb for Viewing, Adding, Updating of Documents.
      > Email: defido9754@ikuromi.com  Password: 2024reserve

   4. Run the Backend: 
      ```bash
         npm run dev
      ```

### Frontend

   1. Navigate to the frontend directory:

      ```bash
      cd backend
      ```
   2. Install the necessary packages:
       ```bash
      npm install 
      ```
   4. Run the frontend: 
      ```bash
         npm run dev
      ```

Tech Stack
============

     * Frontend: React, Typescript, TailwindCSS, Redux Toolkit, Router
     * Backend: Node, Express, Mongoose, Mongodb

Code Flow 
============

   * Implementation
     - Firstly, I worked on the backend as it will be easier to develop the frontend if i know the structure of the data I require. Then, I 
       created schema models and  API endpoints required by the frontend.
     - Adhering to the requirement provided, I had created 6 endpoints. Get to know the Enpoints [here](#api_endpoint)
     - Then, these endpoints are tested in postman and checked if the outputs are correct. After endpoints, The routes are configured in the    
       entry point of the backend.
     - For the clean code, and interacting with the backend, I chose to implement apiService as the middleware in frontend. This would contain 
       all the services and the backend endpoints to use in frontend.
     - The frontend has folders
              - assets - All the required images are present here;
              - components - Reusable components like CustomInput, Button are created to reduce duplicity of code.
              - screen - What the users will see, the Ui and layout is created here.
              - features - Features adhering to the requirement like checking of room, reserving the room, booking of room and creation of  
                           invoice logic are abstracted in this folder
              - store - I used Redux here to control the state of the count of the room reserved, removal 
