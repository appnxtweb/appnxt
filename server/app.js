const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const routes = require("./config/allRoutes");

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static(path.join(__dirname, "assets")));
app.use(
  cors({
    origin: "*", // Allow all origins
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow required methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow required headers
  })
);
app.use(routes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on : ${port}`);
});
