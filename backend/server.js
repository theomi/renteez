require("dotenv").config();
const connectDB = require("./config/db");
const express = require("express");

const listingRouter = require("./routers/listing");
const signinRouter = require("./routers/signin");
const signupRouter = require("./routers/signup");
const usersRouter = require("./routers/users");

const middlewareCustom = require("./middleware/middlewareCustom");
const app = express();
const port = process.env.PORT || 3001;

connectDB();

app.use(express.json());

app.use(middlewareCustom.requestLogger);

// Configure user routes
app.use("/api/listings", listingRouter);
app.use("/api/signin", signinRouter);
app.use("/api/signup", signupRouter);
app.use("/api/user", usersRouter);

app.use(middlewareCustom.unknownEndpoint);
app.use(middlewareCustom.errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
