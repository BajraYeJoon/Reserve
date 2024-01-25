# Reserve - A Hotel Room Booking Platform

Check the live site [here](https://reserve-phi.vercel.app/)

![](https://github.com/BajraYeJoon/Reserve/blob/main/frontend/src/assets/homepage.png)

Reserve — is for you if you **want to book premium hotels** in easy way with intuitive UI interfaces.
[Screenshots And Demo](#screenshots-and-demo)

## Features:
  * Check for Availability of Room 
  * No Conflicting of Bookings, Bookings will be shown if customer has booked the room for specific date range,
  * Room Details, Multiple Room Bookings
  * Offer: 5% of discount applied on booking of 3 or more room

Table of contents
=================

<!--ts-->
  * [Installation](#installation)
     * [Backend](#backend)
     * [Frontend](#frontend)
  * [Tech Stack](#tech-stack)
  * [Code Flow](#code-flow)
  * [FlowChart](#flowchart)
  * [Api Documentation](#api-documentation)
  
<!--te-->

<hr />
<br />

> [!IMPORTANT]
> The site has been uploaded into vercel. The live site is `active`.
> For backend the api is also uploaded on `render.com`.
> The project can be run without the need to download and run it locally. To run it locally, please see [Installation](#installation)

<hr />
<br />

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
      The backend will now be running on `PORT : 8000` which is specified on the .env

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
      The frontend will run on `port 5173`

Tech Stack
============

     * Frontend: React, Typescript, TailwindCSS, Redux Toolkit, Router
     * Backend: Node, Express, Mongoose, Mongodb

Code Flow 
============

   * Implementation
     - Firstly, I worked on the backend as it will be easier to develop the frontend if i know the structure of the data I require. Then, I 
       created schema models and  API endpoints required by the frontend.
       - After model and schema are done, I manually created some room data to populate the rooms that will be used for booking.
       - The image below shows the data present in mongodb
         ![](https://github.com/BajraYeJoon/Reserve/blob/main/frontend/src/assets/room.png)
         
     - Adhering to the requirement provided, I had created 6 endpoints. Get to know the Enpoints   
       [here](https://github.com/BajraYeJoon/Reserve?tab=readme-ov-file#api-documentation))
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
       - store - I used Redux here to control the state of the count of the reserved room, removal of the room from the cart and clearing the \                   cart after booked by the user.
      
     - For resolving the problem of conflicts within same date range or if any date exists on the booked room, I had used the `lte: endDate` and `gte: startDate` methods from mongodb. The code checks if a new booking starts before an existing booking has ended , or if the new booking ends after an existing booking has started, resulting in a conflict. 
       ![](https://github.com/BajraYeJoon/Reserve/blob/main/frontend/src/assets/conflict.png)
       ![image](https://github.com/BajraYeJoon/Reserve/assets/25260689/9a0311eb-3213-47d9-a7ad-b90fff37bb84)

    
     - I had also keep in mind about disabling the button until the fields for check in date, checkout date or any other field are either not           populated. Proper logging of error and message to user has been implmented with `try` and `catch` block.
     - For users to see if the room has already been booked on certain dates, I had made use of package like `react-big-calendar` and    
       implemented to show for which dates the room has been booked.
       
     - For multiple booking of room, instead of booking the room at first, I had made use of Reserving the room first which will be added into         the cart and if the user books 3 or more room, a discount of 5% is applied.
     - To generate the invoice, I had implemented `jsPDF` where the use can download the invoice of the booking.

FlowChart
============

  1. The image below show how I interact with the backend from the frontend through apiservice to make call to the api and get the different results.
     ![](https://github.com/BajraYeJoon/Reserve/blob/main/frontend/src/assets/apiinteract.png)

  2. The image below is how i structure my frontend to connect with the backend and also different component to be reusable and modular.
     ![](https://github.com/BajraYeJoon/Reserve/blob/main/frontend/src/assets/frontend.png)

Api Documentation
==========================
  ## Get Rooms from the database

   + ## fetchRooms
     Fetches all rooms from the API.
       * **Endpoint**: `GET /allrooms`
       * **Returns**:  a Promise that resolves to an array of room objects. Each room object contains the room details.
     
   + ## roomDetails
     Fetches the details of a specific room from the API.
       * **Endpoint**: `GET /rooms/{id}`
       * **Parameters**: `id` (string): The ID of the room to fetch.
     
   + ## checkRoomAvailability
     Checks the availability of rooms for a specific date range and room type.
       * **Endpoint**: `GET /rooms?startDate={startDate}&endDate={endDate}&type={type}`
       * **Parameters**: `dates` (object): An object containing the `startDate` and `endDate` for which to check room availability. Both  
       * `startDate` and `endDate` should be strings in the format 'YYYY-MM-DD'.
       * `type` (string): The type of room to check availability for.
    
  ## Book Rooms Endpoints

   + ## bookRoom
      * **Endpoint**: `POST /book`
      * **Parameters**: - `roomId` (string): The ID of the room to book.
      * `checkIn` (string): The check-in date in 'YYYY-MM-DD' format.
      * `checkOut` (string): The check-out date in 'YYYY-MM-DD' format.
      * `guestName` (string): The name of the guest.

   + ## getBookingsForRoom
      Fetches all bookings for a specific room.
      * **Endpoint**: `GET /bookings/{id}`
      * **Parameters**: - `roomId` (string): The ID of the room to book.
      * `checkIn` (string): The check-in date in 'YYYY-MM-DD' format.
      * `checkOut` (string): The check-out date in 'YYYY-MM-DD' format.
      * `guestName` (string): The name of the guest.

  ## Invoice Endpoints
  
   + ## createInvoice
     Creates an invoice for a booking.
      * **Endpoint**: `POST /invoice`
      * **Parameters**: id (string): The ID of the room.

### Screenshots And Demo
1. Video Demo on searching and booking the room .
   
   * Search the room
   * Reserve the room
   * Click the reserved room Cart
   * Book the room by giving check in anc check out date
   * Invoice generated
   * Download the invoice
   * [You can access the video here](https://github.com/BajraYeJoon/Reserve/issues/4)
   * https://github.com/BajraYeJoon/Reserve/assets/25260689/600639a6-a0b4-4aae-a246-4345b567c9ca

 3. Conflicting Dates;
    
    As in the video I have created the booking from that specific date range and again querying for the room in which the conflicting dates 
    exist for which i only get the other room result.
    ![](https://github.com/BajraYeJoon/Reserve/blob/main/frontend/src/assets/conflictingdates.png)

 4. Updates in Calendar
    
    After the room has been booked, if another user view details of the same room, the prevoisly set booked dates will be reflected in the calendar
    ![](https://github.com/BajraYeJoon/Reserve/blob/main/frontend/src/assets/alreadybooked.png)

 6. Discount for 3 or more room to be booked
    
     As per requirement, if the user reserves 3 or more room, a discont of 5% will be applied .
    ![](https://github.com/BajraYeJoon/Reserve/blob/main/frontend/src/assets/discount.png)

 8. Invoice creation
    
    Preview of invoice will be generated after the room has been booked.
    ![](https://github.com/BajraYeJoon/Reserve/blob/main/frontend/src/assets/invoicecreation.png)

 10. No room in case of no room available for the given dates.
     
   ![](https://github.com/BajraYeJoon/Reserve/blob/main/frontend/src/assets/noroom.png)
    
