const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("api route is working!"));

module.exports = router;
