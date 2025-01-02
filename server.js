const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // For working with file paths
const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

// Serve static files from /var/www/html/login_page
app.use(express.static('/var/www/html/login_page'));

// Root route to avoid 'cannot GET /' error
app.get('/', (req, res) => {
  res.send('Welcome to the server!');
});

// Login API endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Mock user validation (replace with actual DB logic)
  const users = [
    { username: 'user1', password: 'password1', role: 'admin' },
    { username: 'user2', password: 'password2', role: 'user' },
    { username: 'user3', password: 'password3', role: 'user' }
  ];

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.status(200).json({
      message: 'Login successful!',
      user: {
        username: user.username,
        role: user.role
      }
    });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

