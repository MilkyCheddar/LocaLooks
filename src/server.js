const data = require('./data.json');
const express = require('express');
const app = express();

// GET all brands
app.get('/api/brands', (req, res) => {
  res.json(data.brands);
});

// GET a specific brand by name
app.get('/api/brands/:name', (req, res) => {
  const brand = data.brands[req.params.name];
  if (brand) {
    res.json(brand);
  } else {
    res.status(404).json({ error: 'Brand not found' });
  }
});

// POST a new item to a brand
app.post('/api/brands/:name', express.json(), (req, res) => {
  const brandName = req.params.name;
  const newItem = req.body;
  if (data.brands[brandName]) {
    data.brands[brandName].push(newItem);
    res.json(newItem);
  } else {
    res.status(404).json({ error: 'Brand not found' });
  }
});

// DELETE an item from a brand
app.delete('/api/brands/:name/:id', (req, res) => {
  const brandName = req.params.name;
  const itemId = req.params.id;
  const brand = data.brands[brandName];
  if (brand) {
    const itemIndex = brand.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
      const deletedItem = brand.splice(itemIndex, 1)[0];
      res.json(deletedItem);
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  } else {
    res.status(404).json({ error: 'Brand not found' });
  }
});