const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const movieRouter = require('./movieRouter');
const reqLoggingMw = require('./loggingMiddleware');

// Middleware

app.use((req,res,next)=>{
    console.log(`${req.method}: ${req.path} @ ${new Date().toDateString()}`);
    next();
});
app.use(bodyParser.json())
app.use('/api/movies',movieRouter);


// Routes
app.get('/', (req, res) => {
    res.send("Hello World!!");
});

const port = process.env.PORT || 3000;

app.listen(port);
console.log(`listening on port ${port}...`);