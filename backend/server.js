require("dotenv").config();
const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");
//const crypto = require("crypto");
//const authenticateToken = require("./middleware/authentication");

const listingRouter = require("./routers/listing");
const signinRouter = require("./routers/signin");
const signupRouter = require("./routers/signup");
const usersRouter = require("./routers/users");

const middlewareCustom = require("./middleware/middlewareCustom");
const app = express();
const port = process.env.PORT || 3000;
/*const secretKey =
  process.env.JWT_SECRET || crypto.randomBytes(32).toString("hex");
console.log(secretKey);*/

connectDB();

app.use(cors());

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
