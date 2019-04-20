const app = require('express')();
const name = process.env.NAME;

app.get('/', (req, res) => {
    res.send('hey docker is working ' + name);
});

app.listen(7999, () => {
    console.log('server is listening on 7999');
});
