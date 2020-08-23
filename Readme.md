### Learning RESTFUL API using nodejs and mongoDB :nerd_face:

#### Usage

- ` git clone https://github.com/inuinsane/nodejs_api.git`
- `cd nodejs_api`
- `npm install`
- `npm start`

#### Configuration

- Create `.env` file contains
  - `PORT` : any port where you want to run this backend
  - `DB_CONNECT` : your mongodb connection link (mongodb atlas or local mongodb on your PC)
  - `JWT_KEY` : your json web token secret key (any string or number you created, [read more..](https://medium.com/jspoint/so-what-the-heck-is-jwt-or-json-web-token-dca8bcb719a6))
- MongoDB atlas configuration
   - Create MongoDB account
   - Create your cluster
   - Set your IP Whitelist
   - Create Database for your cluster
   - Copy and paste your connection link to your `DB_CONNECT` in your `.env` file 
   - if you have a problem with mongodb+srv://.... link, try to use another version of nodejs for example : 2.2.12 (it works on me), or read this [article](https://docs.mongodb.com/manual/reference/connection-string/) or [this](https://stackoverflow.com/questions/49894913/error-at-connecting-to-mongodb-atlas-server/55665459). Hope that will help you.
   - Read full docs in [here](https://docs.atlas.mongodb.com/).
- MongoDB local configuration (MongoDB Compass) is [here](https://codesource.io/build-a-restful-crud-api-using-node-express-and-mongodb/).

#### Happy Coding! :rocket::rocket::rocket:
