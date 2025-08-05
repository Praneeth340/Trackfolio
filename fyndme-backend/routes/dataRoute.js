const express = require("express");
const path = require("path");
const xlsx = require("xlsx");

const router = express.Router();

router.get("/data", (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "employees.xlsx");
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const jsonData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    res.json(jsonData);
  } catch (error) {
    console.error("Error reading Excel:", error);
    res.status(500).json({ error: "Failed to read Excel file" });
  }
});

module.exports = router;
