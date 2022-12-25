require("dotenv").config();
const express = require("express");
const db = require("./db/connect");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
const router = require("./routers/Task");
app.use("/api/v1", router);

app.listen(port, (error) => {
  db(process.env.URL);
  console.log(`server running on port ${port}`);
});
