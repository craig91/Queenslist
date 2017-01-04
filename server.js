import express from 'express';
const path = require('path');
const bodyParser = require('body-parser');


let app = express();

// app.use(express.static('public'));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));


app.get('/api/tags', (req, res) => {
  // Do Something
  //
});




app.listen(3000);
