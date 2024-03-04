const express = require("express");

const pageController = require("../controllers/pageController");

const router = express.Router();

router.route("/").get(pageController.getIndexPage);
router.route("/about").get(pageController.getaAboutPage);
router.route("/register").get(pageController.getRegistertPage);
router.route("/login").get(pageController.getLoginPage);

module.exports = router;
