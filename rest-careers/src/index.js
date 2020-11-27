const express = require('express');
const moongose = require('mongoose');
const cors = require('cors')

const app = express();

// Connecting to DataBase
moongose.connect('mongodb://localhost/careers', {useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('Db Connected'))
    .catch(error => console.log(error))

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(express.json()); 
app.use(cors());

// Routes
app.use(require('./routes/career'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});