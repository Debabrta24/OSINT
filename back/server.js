const express = require("express");
const dbConnection = require("./db/db");
const router = require("./Router/userRouts");
require('dotenv').config()
const app = express();
app.use(express.json())
app.use("/",router);

const main = async () => {
    await dbConnection();
    app.listen(3000, () => {
        console.log("server connected")

    })
}

main();