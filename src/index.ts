// import packages
import express from "express";
import { paymentRoutes } from "./routes";

// declare const vars
const PORT = process.env.PORT || 5008;

// create an instance of express
const app = express();
app.use(express.json());

// attach routes to server instance
app.use("/payments", paymentRoutes);

app.listen(PORT, () =>
  console.log("🚀🚀🚀 Server is up and running on: ", PORT)
);
