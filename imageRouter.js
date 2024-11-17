const express = require("express");
const path = require("path");
const router = express.Router();

// Route to serve images dynamically from the 'image' directory
router.get("/:imageName", (req, res) => {
  const imagePath = path.join(__dirname, "..", "image", req.params.imageName); // Correct path
  res.sendFile(imagePath, (err) => {
    if (err) {
      console.error("Error serving image:", err); // Log the error to the console
      res.status(404).send("Image not found!");
    }
  });
});

module.exports = router;
