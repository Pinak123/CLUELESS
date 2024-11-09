// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const UserRouter = require('./routes/userRoutes');
const RegisterRouter = require('./routes/registerRoute');
const LogRouter = require('./routes/loginRoute');
// Middleware
app.use(express.json()); // To parse JSON bodies

// Simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});



app.use('/api', UserRouter); //
app.use('/register', RegisterRouter);
app.use('/login', LogRouter); //
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
