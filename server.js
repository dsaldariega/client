require("dotenv").config();
Object.keys(process.env).forEach((key) => (global[key] = process.env[key]));

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const users = require("./controllers/users");


app.use(bodyParser.json());
app.use("/users", users);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
 