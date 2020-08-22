const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;

// Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
    console.log("Connected to MongoDB Atlas");
})

// body parser
app.use(express.json());

// Import Routes
const authRoute = require('./routes/auth');


// Route middlewares (add prefix for all routes)
app.use('/api/user', authRoute);



app.listen(PORT, () => {
    console.log(`Server is up and running on port : ${PORT} `);
}) 