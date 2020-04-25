const express = require('express')
const app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '/client/build')))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/client/build', '/index.html'));
});
app.get('/users', (req, res) => {
    res.json([{ email: "vishu@gmail.com", password: "Vishu29@" }]);
})

server = app.listen(8000)