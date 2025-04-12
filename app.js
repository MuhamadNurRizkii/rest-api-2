require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const routerProducts = require("./routers/products");

// middleware
app.use(express.json());

app.use("/", routerProducts);

// jalankan server
app.listen(port, () => {
  console.log("Server listening on port:", port);
});
