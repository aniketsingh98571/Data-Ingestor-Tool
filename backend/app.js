const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const {connectToDb}=require('./utils/database')
const databaseRoutes=require('./routes/DbRoutes/createDb')
const app = express();

//using the cors package
app.use(cors());

//function to set headers for the cors
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

//using the bodyParser
app.use(bodyParser.json()); //application/json


// Solving the CORS errors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //Allowing the access from all the domains
  //allowing the following methods
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  //allowing the all headers
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});
connectToDb(()=>{
  app.listen(8080);
})
app.use("/database",databaseRoutes)