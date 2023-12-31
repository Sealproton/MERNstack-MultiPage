const mongoose = require("mongoose");

async function connectDB(url) {
  try {
    await mongoose.connect(url);
    console.log("connect to db complete");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connectDB };
