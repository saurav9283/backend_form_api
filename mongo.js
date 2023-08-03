const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://saurav9283:Saurav2002@cluster0.cccveve.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected");
  })
  .catch((error) => {
    console.error("Error connecting:", error);
  });

//schema
const newSchema = new mongoose.Schema({
  msg: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("collection", newSchema);
module.exports = collection;
