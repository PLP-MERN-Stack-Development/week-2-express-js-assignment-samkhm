const express = require('express');
const mongoose = require('mongoose');
const productsRoute = require('./routes');
const myLogger = require('./myLooger');
const authenticateApiKey = require('./AuthenticationAPIKEY');
const { validateProduct } = require('./productValidator');
const errorHandler = require('./errorHandler');
const app = express();

const PORT = 5000;

app.use(express.json());
app.use(authenticateApiKey);
app.use(myLogger);
app.use(validateProduct);
app.use('/products', productsRoute);

// Catch-all route for unknown endpoints
app.use((req, res, next) => {
  const error = new Error('Route Not Found');
  error.statusCode = 404;
  next(error);
});

app.use(errorHandler);

const mongoUri = 'mongodb://localhost:27017/productsdatabase';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database error', err));

  

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});