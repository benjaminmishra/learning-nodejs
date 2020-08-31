const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const movieRouter = require('./movieRouter');

// Middleware
app.use((req,res,next)=>{
    // log into console
    console.log(`${req.method}: ${req.path} @ ${new Date().toDateString()}`);
    next(); // pass on the request to next middlware
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