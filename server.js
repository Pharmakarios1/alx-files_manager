const server = require("express");
const dotenv = require("dotenv").config();
const app = server();




app.use(server.json());
app.get("/", (req, res) => {
    res.send("Hello World");
    });


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
})