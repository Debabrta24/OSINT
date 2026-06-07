const mongoose = require("mongoose");

const dbConnection =async () => {
    await mongoose.connect(process.env.DBURL);
    console.log("mongodb connected");
}

module.exports =dbConnection;