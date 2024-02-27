const express = require("express");
const mongoose = require("mongoose");
const pageRoute = require("./routes/pageRouter");
const courseRoute = require("./routes/courseRouter");

const app = express();

//connect db
mongoose.connect("mongodb://localhost/smartedu-db", {
    userNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("db connect succesfuly");
  });
//template engine
app.set("view engine", "ejs");

//midleware
app.use(express.static("public"));
//Routers
app.use("/", pageRoute);
app.use("/courses", courseRoute);


const port = 3000;

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
