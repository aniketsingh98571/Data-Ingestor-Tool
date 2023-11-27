//importing the express 
const express = require('express');
const databaseController=require('../../controller/Database/database')

//importing the router
const router = express.Router();
router.post('/create',databaseController.createDatabase)
router.post('/create/table',databaseController.createTable)
module.exports=router