import http from "http";
import url from "url";
const server = http.createServer((req, res) => {
    const urlData = url.parse(req.url, true);
    const { name } = urlData.query;

    const message = name
        ? `Hello ${name}!`
        : "Hello from Node.js HTTP server!"

    res.write(message);
    res.end();
});

server.listen(3000, () => {
    console.log("HTTP server listening on port 3000!");
});