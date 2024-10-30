// pages/api/search.js
export default async function handler(req, res) {
    const { query } = req.query;
    const response = await fetch(`http://localhost:5000/api/search?query=${query}`);
    const data = await response.json();
    res.status(200).json(data);
  }
  