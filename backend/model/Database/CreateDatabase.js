const {getDb}=require('../../utils/database')
class CreateDatabase{
   static async createDatabase(){
    let query='CREATE DATABASE ingestor'
    db.query(query,(err,result)=>{
        if(err){
            console.log(err)
            throw err
        }
        console.log(result,"db created")
    }) 
   }
}