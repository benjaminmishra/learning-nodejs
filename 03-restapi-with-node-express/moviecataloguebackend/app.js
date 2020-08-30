const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const movieRouter = require('./movieRouter');

// Middleware
app.use(bodyParser.json())
app.use('/api/movies',movieRouter);


app.get('/', (req, res) => {
    res.send("Hello World!!");
});

const port = process.env.PORT || 3000;

app.listen(port);
console.log(`listening on port ${port}...`);