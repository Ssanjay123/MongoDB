// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;

// let _db;

// const mongoConnect = callback =>{
//   MongoClient.connect("mongodb+srv://Balajiii123:Balajii123@cluster0.cjk1b9i.mongodb.net/?retryWrites=true&w=majority")
//   .then(client=>{
//    _db = client.db();
//     callback();
//   })
//   .catch(err=>{
//     console.log(err);
//     throw err;
//   });
// };

// const getDb = ()=>{
//   if(_db){
//     return _db;
//   }
//   throw "no database found"
// }

// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb

const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://Balajiii123:Balajii123@cluster0.cjk1b9i.mongodb.net/?retryWrites=true&w=majority", { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log("connection successful"))
.catch((err)=> console.log(err))