const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;

// Import Routes
const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');

// Connect to DB
mongoose.connect(process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Connected to MongoDB Atlas");
    })

// body parser
app.use(express.json());



// Route middlewares (add prefix for all routes)
app.use('/api/user', authRoute);
app.use('/api/posts', postsRoute);



app.listen(PORT, () => {
    console.log(`Server is up and running on port : ${PORT} `);
}) 