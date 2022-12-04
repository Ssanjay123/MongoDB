

// class Product{
//   constructor(title,price,description,imageUrl){
//     this.title = title;
//     this.price = price;
//     this.description = description;
//     this.imageUrl = imageUrl;

//   }

//   save(){
//     const db = getDb();
//    return db.collection('products')
//     .insertOne(this)
//     .then(result=>{
//       console.log(result)
      
//     })
//     .catch(err=>{
//       console.log(err);
//     })

//   }

//   static fetchAll(){
//     const db = getDb();
//     return db
//     .collection('products')
//     .find()
//     .then(products=>{
//       console.log(products);
//     })
//     .catch(err=>{
//       console.log(err);
//     })
//   }
// }

const mongoose = require('mongoose');


const Product = new mongoose.Schema({
    title: { type: String, default: null},
    price:{type:String,default:null},
    description: { type: String, default: null },
    imageUrl: { type: String, default: null},
});

module.exports = new mongoose.model("product",Product);



// module.exports = Product;
