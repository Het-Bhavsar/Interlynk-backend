const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./route");

routes(app);
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.listen(3000, () => {
        console.log("Listen on the port 3000...");
    });