import express from "express";

const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.get('/bye', (req, res) => {
    res.send("Good Bye!");
});

app.listen(port, () => {
    console.log(`Our app listening on port ${port}!`);
});
