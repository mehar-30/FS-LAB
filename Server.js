const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (like validate.js)
app.use(express.static(path.join(__dirname)));

// Serve the form HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'app.html'));
});

// Handle form submission
app.post('/register', (req, res) => {
  console.log('Form submission received:');
  console.log(req.body);

  res.send(`
    <h2>Thank you for registering, ${req.body.name}!</h2>
    <p><a href="/">Back to form</a></p>
  `);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
