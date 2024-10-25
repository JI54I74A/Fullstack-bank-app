# Fullstack-Banking-Application
This is an online banking application developed using MERN technology stack, pre-built based on JavaScript technologies consists of MongoDB, Express, React, and Node.js.
- **React** used to create the client side/UI. React offers reusable UI components, manages the application state, handles rendering views & updates the UI - `Presentation layer`
- **Express & Node.js** used for server-side scripting, handles HTTP requests, defines routes, and manages middleware for processing requests and responses - `Middle/Application layer`
- **MongoDB** serves as the database for storing and retrieving data. It's a NoSQL document-oriented db with flexible and scalable storage. Data is stored in JSON object-like format - `Database layer`</br>

This project is a part of MITxPro's MERN stack development course and by developing this project I learned in-depth knowledge related to the MERN stack technologies.</br>
Fullstack-Banking-Application is a simple bank app where people can log in and view their balance, also deposit and withdraw money. If the user is new, they can create a new account.
At the end, the user can log out from the app.</br>
This app is a perfect example model for beginner full-stack developers who are interested in learning more about MERN stack technologies. It has simple logic, and clear & concise coding. 

## How to Run
Used **npx**(npm package runner tool) to create the React app</br>

`npx create-react-app <my-app>` </br>
 `cd <my-app>` </br>
 `npm start` to execute the React app</br>
 
Follow this link to understand more about creating a React app - https://create-react-app.dev/docs/getting-started

Make sure you have Node.js and npm installed on your system. Install necessary packages using npm **express**, **cors**, **MongoDB**, **jQuery**, and **path** using npm.</br>

`npm install express cors mongodb jquery path`</br>

I installed **nodemon**,  it monitors changes in the application and restarts the server.</br>

Downloaded **MongoDB** msi package from https://www.mongodb.com/try/download/community</br>
and GUI for Mongo DB - **MongoDB Compass** from https://www.mongodb.com/try/download/compass
 
In this project, I am running MongoDB inside a **Docker** container. Make sure that you have **Docker Desktop** in your system. Keep it open all the time. </br>
To create Docker Container run the below command in the terminal which has the app path</br>

`docker run -p 27017:27017 --name <my-container-name> -d mongo`</br>

To check container up & running command `docker ps`</br>

Created a **server.js** file in the root of the React project directory for Express server scripts</br>
In the same location created **dal.js** file for the Data Abstraction Layer(separates the data access logic from the business logic in an application) to write DB-related code.</br>

To watch the code(nodemon) and run the server simultaneously in the same terminal I added package **concurrently** in package.json and ran code by command</br>
`npm run dev`

Code changes are detected and the server restarts & creates build, so no need to `run npm build` separately </br>
To view the front-end part of the app open the browser client, Chrome in my case and paste the URL as `http://localhost:3001`, where 3001 is the port number I gave to the server to listen.


## Roadmap

Create,read,update,delete operations are doing using http GET,POST,DELETE & PUT </br>
Using specific API paths you can GET all restaurants data, GET a single restaurant by ID, POST a new restaurant, DELETE a restaurant by ID and PUT to update a restaurant by ID</br>
**swagger** specifications are writing separatly in a file - **swagger.json** </br>
To learn more about writing swagger specifications, please follow this link [Swagger Editor](https://editor.swagger.io/)</br>
The Swagger documentation for project has created in http://localhost:4000/api-docs(given path for swagger) , where you can see all the GET,POST,DELETE & PUT tabs</br>
There is a button for 'Try It Out' and and we can execute the API and see the responses. </br>
**swagger** is a very helpful tool for designing, building, documenting, and consuming RESTful web services
## License
MIT License

Copyright (c) 2020 John Williams

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Support

If you have any questions or suggestions, feel free to reach out to me at jishithamp@gmail.com.





