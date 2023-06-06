const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();
const router = express.Router();
const axios = require("axios");

// const routes = require("./routes/index.js");

const PORT = process.env.PORT;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const IMGUR_BASE = "https://api.imgur.com/";
const ALBUM_HASH = "OTwrAK2";
const ALBUM_HASH2 = "taUE9V4";

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../build")));

app.get("/images", (req, res) => {
  axios
    .get(`${IMGUR_BASE}3/album/${ALBUM_HASH}`, {
      headers: {
        Authorization: `Client-ID ${CLIENT_ID}`,
      },
    })
    .then((response) => {
      // console.log(response);
      res.send(response.data.data.images);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send();
    });
});

// router.use("/", routes);

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
