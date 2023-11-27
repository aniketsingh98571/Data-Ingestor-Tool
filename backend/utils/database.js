const mysql=require('mysql')
let _db;
const connectToDb=(callback)=>{
    //create connection of mysql
const db=mysql.createConnection({
    host:"localhost",
    user:'root',
    "password":"Aniket@123",
    database:"ingestor"
  });
  //connect to db
 db.connect((err)=>{
    if(err){
      console.log(err)
      throw  err;
    }
      _db=db
      callback()
     
 })

}
const getDb=()=>{
    if (_db) {
        return _db;
    }
    throw "Sorry no database found!!";
}
exports.connectToDb=connectToDb
exports.getDb=getDb