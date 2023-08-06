const mongoose = require("mongoose");

const formData = new mongoose.Schema({
  name: String,
  email: { type: String, required: true },
  phoneNumber: String,
  status: String,
  plan: { type: String, required: true },
  addOn: Array,
  totalPrice: Number,
});

const dataModel = mongoose.model("multipageData", formData);

module.exports = { dataModel };
