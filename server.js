const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const path = 3000; // localhost server


// middleware 
app.use(express.json());
app.use(cors());


// database 
mongoose
  .connect(
    "mongodb+srv://shal1231:Shal1231@cluster0-wlagw.mongodb.net/test?retryWrites=true", 
    {useNewUrlParser: true}
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });



app.listen(path, () => {
    console.log('the project is running on ' + path)
})