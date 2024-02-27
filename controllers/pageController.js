exports.getIndexPage = (req, res) => {
  res.status(200).render("about", {
    page_name: "index",
  });
};

exports.getaAboutPage = (req, res) => {
  res.status(200).render("about", {
    page_name: "about",
  });
};
