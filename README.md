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
I used **npx**(npm package runner tool) to create the React app
`npx create-react-app <my-app> </br>
 cd <my-app> </br>
 npm start`</br>

In this excersise first you need to install 'node_modules' folder</br>
`npm init`</br>
 then add libraries for **swagger**</br>
 `npm install swagger-jsdoc swagger-ui-express express nodemon`</br>
 To run the code</br>
 `nodemon index.js`
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

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
