import express from "express";
import Cors from "cors";
import bodyParser from "body-parser";

const Port = process.env.Port || 8001;

const app = express();

app.use(Cors());
app.use(bodyParser.json());
c;
app.use(express.json());

app.post("/api/data", (req, res) => {
  console.log(req.body);
  res.send("received!!");
});

app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(Port, console.log(`server is listening on port ${Port}`));
