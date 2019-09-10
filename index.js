require("dotenv").config();
const express = require("express");
const app = express();
const json = require("body-parser").json();
const { paymentRouter } = require("./routes");

app.use(json);
app.use("/payments", paymentRouter);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
