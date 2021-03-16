const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/connectDB");
const app = express();

/*connect DB*/
dbConnect();

/*body parser*/

app.use(express.json());

/*create route*/

app.use("/api/contact", require("./routes/contacts"));

const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log("server is running on port 5000")
);
