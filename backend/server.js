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
    const data = fs.readFileSync("./data.json");
    console.log("Res: Get All REQs Executed");
    res.status(200).send(data);
});

app.get("/get/latest", (req, res) => {
    console.log("Req: Get Latest REQ");
    const data = JSON.parse(fs.readFileSync("./data.json"));
    const latest = data[data.length - 1];
    console.log("Req: Get Latest REQ Executed");
    res.status(200).json(latest);
});

app.get("/get/:id", (req, res) => {
    console.log("Req: Get REQ");
    const id = Number(req.params.id);
    const data = JSON.parse(fs.readFileSync("./data.json"));
    var node = data.find(r => r.id === id);
    if(node === undefined){
        console.log("Err: Get REQ Failed");
        res.status(404).send();
    } else {
        console.log("Res: Get REQ Executed");
        res.status(200).json(node);
    }
});

app.post("/new", (req, res) => {
    console.log("Req: New REQ");
    const data = JSON.parse(fs.readFileSync("./data.json"));
    var newId = 1;
    if(data.length !== 0){
        newId = data[data.length - 1].id + 1;
    }
    var newNode = req.body;
    if(newNode.title === undefined || newNode.description === undefined || newNode.priority === undefined){
        console.log("Err: New REQ Failed");
        res.status(409).send();
    } else {
        newNode.id = newId;
        data.push(newNode);
        fs.writeFileSync("./data.json", JSON.stringify(data, null, 2));
        console.log("Res: New REQ Executed");
        res.status(200).send();
    }
});

app.put("/update/:id", (req, res) => {
    console.log("Req: Update REQ");
    const id = Number(req.params.id);
    const data = JSON.parse(fs.readFileSync("./data.json"));
    var node = data.find(r => r.id === id);
    const newNode = req.body;
    if(newNode.title === undefined || newNode.description === undefined || newNode.priority === undefined){
        console.log("Err: Update REQ Failed");
        res.status(409).send();
    } else {
        node.title = newNode.title;
        node.description = newNode.description;
        node.priority = newNode.priority;
        fs.writeFileSync("./data.json", JSON.stringify(data, null, 2));
        console.log("Res: Update REQ Executed");
        res.status(200).send();
    }
});

app.delete("/remove/:id", (req, res) => {
    console.log("Req: Remove REQ");
    const id = Number(req.params.id);
    const data = JSON.parse(fs.readFileSync("./data.json"));
    const newData = data.filter(r => r.id !== id);
    fs.writeFileSync("./data.json", JSON.stringify(newData, null, 2));
    console.log("Res: Remove REQ Executed");
    res.status(200).send();
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`)
});