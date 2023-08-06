const express = require("express");
const cors = require("cors");
const { connectDB } = require("./DB/connect");
const app = express();
const { dataModel } = require("./DB/schema");
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.post("/data", async (req, res) => {
  try {
    const data = req.body;
    await dataModel.create(data);
    res.status(200).json({ message: "ok" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

const PORT = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`server listening at port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
