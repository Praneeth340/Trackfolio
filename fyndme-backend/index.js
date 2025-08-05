const express = require("express");
const cors = require("cors");
const dataRoute = require("./routes/dataRoute");

const app = express();
app.use(cors());

app.use("/api", dataRoute); // All routes under /api/*

const PORT = 5000;
// Root route - just for confirmation
app.get('/', (req, res) => {
  res.send('API is running!');
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
