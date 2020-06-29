# Lab 15

# Auth Server

### Author: Paul Depew
#### Acknowledgements: Marlene Rinkler for helping me with tests

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

#### Running the app

npm start
  - Starts the server on your local host with the port you defined in you .env


#### Tests

npm test 
  - runs a jest testing suite to test our DB connections, CRUD functions and middleware


#### UML

![UML Diagram]()
