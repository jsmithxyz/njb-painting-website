var express = require("express");
var router = express.Router();
var cors = require("cors");
const creds = require("./config/config");
const path = require("path");
const sendMail = require("./mail");

const app = express();
const log = console.log;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.use("/", router);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => log("Server is starting on PORT,", 3001));

router.post("/send", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  sendMail(name, email, message, (err, data) => {
    if (err) {
      res.status(500).json({ message: "Internal Error" });
    } else {
      res.json({ message: "success" });
    }
  });
});
