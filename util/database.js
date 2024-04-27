const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const uri = `mongodb+srv://bhojrajpathak:kcucA3wliearQpM4@cluster0.90qm6ik.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0`;

let _db;
const mongoConnect = (callback) => {
  MongoClient.connect(uri)
    .then((client) => {
      console.log("mogodb connected");
      _db = client.db();
      console.log('typeof',typeof _db);
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) return _db;
  throw "No databse found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
