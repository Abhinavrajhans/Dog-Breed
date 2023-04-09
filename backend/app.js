const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose.set("strictQuery", false);
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");
//middlewares
app.use(bodyParser.json());
app.use(cors());
//Routes
const UsersRoute = require("./routes/users");

app.use("/users", UsersRoute);

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("Connected to DB")
);
//how to we start listening to the server
app.listen(8000);
