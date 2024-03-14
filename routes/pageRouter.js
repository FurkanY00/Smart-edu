const express = require("express");

const pageController = require("../controllers/pageController");
const redirectMiddleware = require("../middlewares/redirectMiddleware");

const router = express.Router();

router.route("/").get(pageController.getIndexPage);
router.route("/about").get(pageController.getaAboutPage);
router.route("/register").get(redirectMiddleware,pageController.getRegistertPage);
router.route("/login").get(redirectMiddleware,pageController.getLoginPage);
router.route("/contact").get(pageController.getContactPage);
router.route("/contact").post(pageController.sendEmail);


module.exports = router;
