const express = require('express');

const app = express();
app.use(express.json());
app.use(express.raw());
app.use(express.urlencoded({ extended: true }));

app.post('/PostNotification', (req, res) => {
    console.log("Source IP: " + requestIp.getClientIp(req));
    console.log(req.body.pernr);
    res.send(JSON.stringify(req.body));
});

// Default IP control with a whitelist
app.get('/', (req, res) => {
    res.send("Hello Nodejs App.");
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});