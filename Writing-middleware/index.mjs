import express from 'express';

const app = express();
const port = 3000;

function myLogger(req, res, next) {
    console.log("New request: ", req.method, req.url);
    next();
}
app.use(myLogger);


app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.get('/bye', (req, res) => {
    res.send("Good bye!");
});

app.get('/bye', (req, res) => {
    res.send("Good bye!");
});

app.get('/say-hello/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`);
});

app.listen(port, () => {
    console.log(`Our server is listening on port ${port}!`);
});