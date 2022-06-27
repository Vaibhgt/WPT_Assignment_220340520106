// const { response } = require('express');
const express = require('express');
const app = express();

app.get('/additem',(req, resp) => {
    resp.send("add items need to be done");
});

app.get('/updateitem',(req, resp) => {
    resp.send("update items need to be dones");
});

app.listen(80,function () {
    console.log("Listening to server with port number 80");
});

app.use(express.static("cp"));