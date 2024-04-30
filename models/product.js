const mongodb = require("mongodb");
const { getDb } = require("../util/database");

class Product {
  constructor(title, price, imageUrl, description, userId) {
    this.title = title;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
    this.userId = userId;
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
        return product;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static deletebyId(id) {
    const db = getDb();
    return db
      .collection("products")
      .deleteOne({ _id: new mongodb.ObjectId(id) })
      .then(() => {
        console.log("Product deleted");
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static updateById(id, updatedProduct) {
    const db = getDb();
    return db
      .collection("products")
      .updateOne({ _id: new mongodb.ObjectId(id) }, { $set: updatedProduct })
      .then(() => {
        console.log("proudct updated successfully");
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Product;
