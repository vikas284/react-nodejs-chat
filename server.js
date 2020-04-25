const express = require('express')
const app = express();
var path = require('path');
app.set('port',(process.env.prt || 5000))
app.use(express.static(path.resolve(__dirname, './client/build')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'./client/build/index.html'));
});
app.get('/users', (req, res) => {
    res.json([{ email: "vish1u@gmail.com", password: "Vishu29@" }]);
})

server = app.listen(app.get('port'),function(){
    console.log(`Server is  listening on port num  :${app.get('port')}`)
})
