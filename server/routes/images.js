require("dotenv").config();
const express = require("express");
const router = express.Router();

const IMGUR_BASE = "https://api.imgur.com/";

router.get("/", (req, res) => {
  console.log("inside images endpoint");
  res.send("hi");
});

module.exports = router;
