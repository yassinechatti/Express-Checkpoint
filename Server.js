const express = require("express");

const app = express();

const port = 5000;
app.use(express.static("public"));
const CheckDate = (req, res, next) => {
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();
  if (day >= 1 && day <= 5 && hour >= 9 && hour <= 17) {
    next();
  } else {
    res.send("The web application is not available");
  }
};
app.use(CheckDate);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/HomePage.html");
});
// app.get("/HomePage.css", (res, req) => {
//   res.sendFile(__dirname + "/HomePage.css");
// });
app.get("/ContactUs", (req, res) => {
  res.sendFile(__dirname + "/public/ContactUs.html");
});
app.get("/OurServices", (req, res) => {
  res.sendFile(__dirname + "/public/OurServices.html");
});

app.listen(port, console.log("Server is running"));
