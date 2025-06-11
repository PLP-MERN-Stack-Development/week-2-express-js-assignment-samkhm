// authMiddleware.js

const API_KEY = process.env.API_KEY || 'your_default_api_key';

const authenticateApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey) {
    return res.status(401).json({ message: 'API key is missing' });
  }

  if (apiKey !== API_KEY) {
    return res.status(403).json({ message: 'Invalid API key' });
  }

  next(); // API key is valid, proceed to the next middleware or route handler
};

module.exports = authenticateApiKey;
