const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/userdata", function (req, res) {
  const { fullname, email, password } = req.body;
  if (!fullname) {
    return res.send("fullname is required");
  }
  if (!email) {
    return res.send("email is required");
  }
  if (!password) {
    return res.send("password is required");
  }
  console.log(req.body);
  // res.send(req.body); 
});

app.listen(8000, (req, res) => {
  console.log("Server is running");
});
