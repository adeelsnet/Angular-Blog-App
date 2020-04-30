const http = require('http');

// http.createServer((req, res) => {
//     res.write('hello world!');
//     res.end();
// }).listen(3000);

const server = http.createServer((req, res) => {
    res.end('hello world!');
});

server.listen(3000, () => {
    console.log('server is running on port 3000 . . .')
});