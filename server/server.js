const express = require("express");
const app = express();
const cors = require("cors");
// require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 8080;

// middleware
app.use(cors());
app.use(express.json());
app.use(require("./routes/ticket"));
app.use(require("./routes/auth"));
app.use(
  express.urlencoded({
    extended: true,
  })
);

// get driver connection
// const dbo = require("./db/conn");

app.listen(port, () => {
  // perform a database connection when server starts
  // dbo.connectToServer(function (err) {
  //   if (err) console.error(err);
  // });
  console.log(`Server is running on port: http://localhost:${port}`);
});
