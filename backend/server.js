const express = require("express");
const fs = require("fs");
const app = express();
const port = 1000;

app.use(express.json());

app.get("/", (req, res) => {
    console.log("Req: Get Root");
    res.status(200).send();
});

app.get("/get", (req, res) => {
    console.log("Req: Get All REQs");
    //...
});

app.get("/get/:id", (req, res) => {
    console.log("Req: Get REQ");
    //...
})

app.post("/new", (req, res) => {
    console.log("Req: New REQ");
    setNewREQ(req, res);
    //...
});

app.put("/update/:id", (req, res) => {
    console.log("Req: Update REQ");
    //...
});

app.delete("/remove/:id", (req, res) => {
    console.log("Req: Remove REQ");
    //...
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`)
});