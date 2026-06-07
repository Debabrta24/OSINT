const express = require("express");
const login = require("../controlers/userControlers");
const router=express.Router();
router.post("/login", login); // logi  and signup  is the same url path so use both

module.exports = router;