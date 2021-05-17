const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/index.html"));
})

app.get("/producto", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/product.html"));
})

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/register.html"));
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/login.html"));
})

app.get("/cart", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/cart.html"));
})

app.listen(3030, () => {
    console.log("El servidor ya está corriendo en el puerto 3030.");
})

