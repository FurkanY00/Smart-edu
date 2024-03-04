const express = require("express");
const mongoose = require("mongoose");
const pageRoute = require("./routes/pageRouter");
const courseRoute = require("./routes/courseRouter");
const categoryRoute = require("./routes/categoryRoute");

const app = express();

try {
  //connect db
  mongoose.connect("mongodb://localhost/smartedu-db").then(() => {
    console.log("db connect succesfuly");
  });
} catch {
  console.log("hata");
}

//template engine
app.set("view engine", "ejs");

//midleware
app.use(express.static("public"));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Routers
app.use("/", pageRoute);
app.use("/courses", courseRoute);
app.use("/categories", categoryRoute);

const port = 3000;

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
