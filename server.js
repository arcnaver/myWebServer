/*
    myWebServer
    A simple webserver for Raspberry Pi3
    @author: Adam Tipton
    @version: 1.0
    @date: 3/9/2020
*/

//create a port to use locally(5000) and remotely
const PORT = process.env.PORT || 5000;
//get express
const express = require("express");
const app = express();
//require path
const path = require('path');
//we want to use static files in the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));


//Tell console where we are listening
app.listen(PORT, ()=> console.log('myWebServer is Listening on ${PORT]'));