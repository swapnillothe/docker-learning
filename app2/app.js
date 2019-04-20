const app = require('express')();
const name = process.env.NAME;
const http = require('http');

app.get('/', (req, res) => {
    console.log('idhar toh aya');
    http.get('http://localhost:7999', (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
            data += chunk;
        });
        resp.on('end', () => {
            res.send('hey docker is working ' + data + name);
        });
    });
});

app.listen(8000, () => {
    console.log('server is listening on 8000');
});
