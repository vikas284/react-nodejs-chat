const express = require('express')
const app = express();
var path = require('path');
var port = process.env.PORT || 3000;
app.use(express.static(path.resolve(__dirname, 'client/build')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});
app.get('/users', (req, res) => {
    res.json([{ email: "email@localhost", password: "password" }]);
})

server = app.listen(port,function(){
    console.log(`Server is  listening on port num 12390  :${port}`)
})
