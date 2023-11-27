const Database=require('../../model/Database/CreateDatabase')
exports.createDatabase=async(req,res,next)=>{
    const responseDB=await Database.createDatabase()
}
exports.createTable=async(req,res,next)=>{
    const responseTable=await Database.createTable()
}