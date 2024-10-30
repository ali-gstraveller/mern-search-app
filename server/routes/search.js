// server/routes/search.js
const express = require('express');
const Item = require('../models/Item');
const router = express.Router();

router.get('/', async (req, res) => {
  const { query } = req.query;
  try {
    const items = await Item.find({ name: new RegExp(query, 'i') });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
