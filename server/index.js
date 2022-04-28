const express = require("express");
const chalk = require("chalk");
const cors = require("cors");
const morgan = require("morgan");
const debug = require("debug")("index");
require("dotenv").config();
const port = process.env.PORT || 3035;
const app = express();
const { getInputs, createInput } = require("./controller");

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.get("/api/info", getInputs);
app.post("/api/info", createInput);

app.listen(port, () => {
  debug(`Server listening on port ${chalk.green(port)}`);
});
