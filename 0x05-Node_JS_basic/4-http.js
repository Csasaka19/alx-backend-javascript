const http = require('http');

const PORT = 1245;
const HOSTNAME = 'localhost';
const app = http.createServer();

app.on('request', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === '/') {
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        res.end('This is the list of our students\n');
    } else {
        res.end('');
    }
    });

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});

module.exports = app;