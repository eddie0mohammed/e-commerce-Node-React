const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

//import router
const userRoutes = require('./routes/user');

// app
const app = express();

// db
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
    
}).then(() => {
    console.log("Connection to Database Successful");
})


// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());


// routes middleware
app.use("/api", userRoutes);





// server
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})