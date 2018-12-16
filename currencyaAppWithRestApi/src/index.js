const express = require('express');
const morgan= require('morgan');
const app = express();
const path = require('path')

//this file configure and start the server
//setting
app.set('port', process.env.PORT || 3000);


//routes
app.use('/cotizacion/dolar', require('./routes/dolar.routes'));

app.use('/cotizacion/euro', require('./routes/euro.routes'));

app.use('/cotizacion/real', require('./routes/real.routes'));


//static
app.use(express.static(path.join(__dirname, 'public')));


//app listen
app.listen(app.get('port'), () => {
    console.log("listening in port 3000");
})

