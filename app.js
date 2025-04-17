require("dotenv").config();
const express = require("express");
const { connectDB } = require("./config/database");
const app = express();
const port = process.env.PORT;
const routerProducts = require("./routers/products");

// middleware
app.use(express.json());

app.use("/", routerProducts);

// jalankan server
connectDB().then(() => {
  app.listen(port, () => {
    console.log("Server listening on port:", port);
  });
});
