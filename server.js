const express = require("express");
const router = require('./router.js');


const app = express();

app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index.html");
    // response.send("<h1>Atulya Kaushik</h1>");
});

app.listen(5500, function () {
    console.log("Server Initiated !!");
});

app.get('/style.css', function (req, res) {
    res.sendFile(__dirname + "/" + "style.css");
});

app.get('/script.js', function (req, res) {
    res.sendFile(__dirname + "/" + "script.js");
});


app.use(express.static('public'));
app.use('/images', express.static('images')); 