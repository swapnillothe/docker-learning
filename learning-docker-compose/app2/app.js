const app = require('express')();

const request = require('request');

app.get('/', (req, res) => {
    request('http://app1container:8080/', (err, _res, body) => {
        res.send(body);
    });
});

app.listen(8000, () => console.log('Listening on 8000'));
