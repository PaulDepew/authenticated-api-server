# Lab 15

# Auth Server

### Author: Paul Depew
#### Acknowledgements: Marlene Rinkler for helping for ebing the smartest among us

- [submission PR](https://github.com/PaulDepew/authenticated-api-server)
- [swagger.io]()
- [Heroku Deployment]()

### Setup

Clone the Git repository
Install Dependencies
  - dotenv
  - express
  - mongoose 
  - cf-supergoose 
  - JSDoc
  - jest
  - bcrypt
  - base-64
  - jsonwebtoken

Run npm start


#### `.env` requirements

set PORT = 3000

set MONGO_ATLAS_URI = mongodb+srv://<yourName>:<yourPassword>@cluster0-ydvvi.mongodb.net/<yourDB>?retryWrites=true&w=majority

set SECRET = A.Secret.String.That.Only.You.Know

#### Running the app

npm start
  - Starts the server on your local host with the port you defined in you .env using nodemon


#### Tests

npm test 
  - runs a jest testing suite to test our DB connections, CRUD functions, middleware and permissions


#### UML

![UML Diagram](./API-SERVER_UML.jpg)
