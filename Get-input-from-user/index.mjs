import http from "http";

const server = http.createServer((req, res) => {
    res.write("Hello from Node.js HTTP server!");
    res.end();
});

server.listen(3000, () => {
    console.log("HTTP server listening on port 3000!");
});