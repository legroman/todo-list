const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.use(cors());
app.use(express.json());

mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;

connection.once("open", () => console.log("MongoDB database connection established successfully..."));

const todoListRouter = require('./routes/todo-list');
const userRouter = require('./routes/auth');

app.use('/api/todo-list', todoListRouter);
app.use('/api', userRouter);

app.listen(port, () => console.log(`Server has been stared on port: ${port}...`));