const express = require('express');
const cors = require('cors')

const app = express();

// Settings
app.set('port', process.env.PORT || 4200);

// Middlewares
app.use(express.json()); 
app.use(cors());

// Routes
app.use(require('./routes/student'));

// Starting the server

app.listen(app.get('port'), () => {
    console.log('Server on Port', app.get('port'));
});