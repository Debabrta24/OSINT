const express = require("express")

const login = (req, res) => {
    try {
        console.log(req.body);

    } catch (error) {
        res.status(500).json({
            message: error.message
        })

    }
}

module.exports = login;