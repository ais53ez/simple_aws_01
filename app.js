const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to the homepage");
});

app.listen(8080, () => {
    console.log("Waazzza");
});
