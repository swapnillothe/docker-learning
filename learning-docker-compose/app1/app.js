const app = require('express')();

app.get('/', (req, res) => {
    res.send('Hello from app1');
});

app.listen(8080, () => console.log('Listening on 8080'));
