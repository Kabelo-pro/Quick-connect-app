const http = require('http');
const express = require('express');
const app = express();
const port = 5500; // Choose a port number that is not already in use
const path = require('path');

// Set the "views" directory
app.set('views', path.join(__dirname, 'views'));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static('public'));


// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));


app.route('/*').get(function(req, res) { 
  return res.sendFile(path.join(__dirname, 'public/index.html')); 
});
// Define routes
app.get('/', (req, res) => {
    res.render('index');
    
});

app.get('/connections', (req, res) => {
  res.render('connects');
});

app.get('/edit info', (req, res) => {
  res.render('edit');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/login', (req, res) => {
  res.sendFile('login');
});

app.get('/signup', (req, res) => {
  res.render('signup');
});


// Use the existing server
const server = http.createServer(app);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});