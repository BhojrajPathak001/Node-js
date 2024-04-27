const mongodb = require("mongodb");
const { getDb } = require("../util/database");

class Product {
  constructor(title, price, imageUrl, description) {
    this.title = title;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
  }
  save() {
    const db = getDb();
    return db
      .collection("products")
      .insertOne(this)
      .then((result) => {
        console.log(result, "product.js");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection("products")
      .find() //yeh cursor return krta jo ki ek obj hai prov by mongodb yeh data ko step by step retrive krta hai
      .toArray() //small data chaheye tou directly toArray method use kr skte hai yeh phir promise return krega
      .then((products) => {
        return products;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static findById(id) {
    const db = getDb();
    return db
      .collection("products")
      .find({ _id: new mongodb.ObjectId(id) })
      .next()
      .then((product) => {
        console.log("single product", product);
        return product;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Product;
