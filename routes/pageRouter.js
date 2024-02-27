const express = require("express");

const pageController = require("../controllers/pageController");

const router = express.Router();

router.route("/").get(pageController.getIndexPage);
router.route("/about").get(pageController.getaAboutPage);

module.exports = router;
