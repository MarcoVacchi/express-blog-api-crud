const posts = require("../data/posts");
const express = require("express");
const router = express.Router()


console.log(posts);
router.get("/",(req, res) =>{

    res.send("mannaggiacristo");

});


module.exports = router;