const express = require("express");

const app = express();

//template engine
app.set("view engine", "ejs");
//midleware
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).render("index",{
    page_name:"index"
  });
});

//about
app.get("/about", (req, res) => {
  res.status(200).render("about",{
    page_name:"about"
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
