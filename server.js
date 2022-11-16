const express = require('express');
const { required } = require('nodemon/lib/config');
const connectDB = require('./config/connection');
const routes = require('./routes');
require('dotenv').config();

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


const start = async() =>{
  try{
    await connectDB(process.env.MONGO_URI)
        app.listen(PORT, ()=>{
            console.log(`Listening at port ${PORT}`)
        })
    }
    catch(error){
        console.log(error)
    }
}

start()