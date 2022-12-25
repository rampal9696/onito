const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const db = async (URL) => {
  try {
    await mongoose.connect(URL);

    console.log("connect the database successful");
  } catch (error) {
    console.log({ err: error });
  }
};

module.exports = db;
