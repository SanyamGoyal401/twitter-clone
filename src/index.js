const express = require('express');
const { ConnectDB } = require('./config');
const cors = require('cors');
const app = express();
const routes = require('./routes');
const {ServerConfig} = require('./config');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api',routes);
app.use(cors());

app.listen(ServerConfig.PORT, ()=>{
    //mongoDB connection
    ConnectDB();
    console.log(`Server is up at ${ServerConfig.PORT}`);
})