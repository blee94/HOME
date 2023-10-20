const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", function (req, res) {
  res.send("hello there");
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}! http://localhost:${PORT}`);
});
