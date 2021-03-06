const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const serverPath = 3000; // localhost server

// importing routers
const userRouter = require('./routing/user.js');
const dataRouter = require('./routing/data');

// middleware
app.use(express.json());
app.use(cors());

// database
mongoose
  .connect(
    'mongodb+srv://shal1231:Shal1231@cluster0-wlagw.mongodb.net/test?retryWrites=true',
    // 'mongodb+srv://jorge-31:fKwkXN4mXJ3KArqT@cluster0-vgeeq.mongodb.net/test?retryWrites=true',
    // "mongodb+srv://elvis992035:8xIsLt5pI8AzZhiS@cluster0-wvkpb.mongodb.net/test?retryWrites=true",
    // "mongodb://localhost/testauth",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(err => {
    console.log('Connection failed!', err);
  });

// to get rid of this error
// (node:66003) DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
mongoose.set('useCreateIndex', true);

// routers
app.use('/', userRouter); // login && logout routers
app.use('/', dataRouter); // data router

// running it on the localhost:3000
app.listen(serverPath, () => {
  console.log('the project is running on ' + serverPath);
});
