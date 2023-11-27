const {getDb}=require('../../utils/database')
class CreateDatabase{
   static async createDatabase(){
    const db=getDb()
    let createDbQuery='CREATE DATABASE ingestor'
    db.query(createDbQuery,(err,result)=>{
        if(err){
            console.log(err)
            throw err
        }
        console.log(result,"db created")
      }) 
   }
   static async createTable(){
    const db=getDb()
    let createTableQuery=`CREATE TABLE logs (
        level varchar(255),
        message varchar(255),
        resourceId varchar(255),
        timestamp TIMESTAMP,
        traceId varchar(255),
        spanId varchar(255),
        commit varchar(255),
        parentResourceId varchar(255)
    );`

    db.query(createTableQuery,(err,result)=>{
        if(err){
            console.log(err)
            throw err
        }
        console.log(result,"table created")
    }) 
   }
}
module.exports=CreateDatabase
