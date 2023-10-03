const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://amitkamat918:w6ZVkhYjQRcEcswd@cluster0.apvv4w7.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
      }
    );

    console.log("Database connected successfully");
  } catch (e) {
    console.log("Error while connecting to mongoDB");
    console.log(e);
  }
};

module.exports = { connectDB };
