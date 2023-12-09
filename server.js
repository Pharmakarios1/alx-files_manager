#!/usr/bin/env node
const server = require("express");
const router = require('./routes/index')
const dotenv = require("dotenv").config();
const app = server();
const PORT = process.env.PORT || 3000;





app.use(server.json());
app.use("/", router)

app.get("/hello", (req, res) => {
    res.send("Hello World");
    });


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})