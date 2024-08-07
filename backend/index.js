const express = require("express");
const authRoute = require("./routes/auth/index");

const app = express();

app.use(express.json());
app.use("/user/auth", authRoute);

app.listen(3000, () => {
  console.log(`server listening`);
});
