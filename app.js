const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended:false}));


const units = [
  "Celcius",
  "Fahrenheit",
  "Kelvin"
];

app.get('/',(req,res)=>{
  res.render('index');
});

app.post('/message',(req,res)=>{
  res.locals.message = "This is a rendered message";
  res.locals.howMuch = "Way cool!";
  res.locals.table = units;
  res.render('message');
});

app.listen(3000, ()=>console.log('The application is running on localhost:3000!'));
