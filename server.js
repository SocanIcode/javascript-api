const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, "public")));

// Example API route
app.get("/api/image/:filename", (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, "public", "images", filename);
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).json({ message: "Image not found!" });
    }
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
