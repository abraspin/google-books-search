const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

// const routes = require("./routes"); TODO: ADD ROUTES TODO:

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
// TODO: add compression?

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

// Connect to MongoDB Atlas DB with Mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/google-search",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

// Send every other request to the React app FIXME: Is this right? FIXME:
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
