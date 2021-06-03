const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World2ddDs34dd4!d");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`${port}번 열림`));
