const express = require('express');
const { ConnectDB } = require('./config');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;


app.listen(PORT, ()=>{
    //mongoDB connection
    ConnectDB();
    console.log(`Server is up at ${PORT}`);
})