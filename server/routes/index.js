const express = require("express");
const router = express.Router();

const images = require("./images.js");

router.use("/images", images);

module.exports = router;
