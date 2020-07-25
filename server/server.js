// Catch hold (import) of the Express Library.
const express = require("express");
// Import morgan and cors.
const morgan = require("morgan");
const cors = require("cors");
// Now create an instance of the Express Library to do our app.
const app = express();
// Define a port for Express App to listen to.
const port = 3100;
// Get routes.
const root = require("./routes/root");
const users = require("./routes/users");

// Let's add some middleware.
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Use the routes.
app.use("/", root);
app.use("/users", users);

// Listen to 3100 port.
app.listen(port, () => {
  console.log("Successfully started the server on port " + port);
});