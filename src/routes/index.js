import express from "express";
import { convert } from "../util/convert";

var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { title: "Express" });
});

/* GET convert page. */
router.get("/convert", function(req, res, next) {
    const result = convert(4, 4);
    res.render("index", { title: `convert(4,4)=${result}` });
});

module.exports = router;
