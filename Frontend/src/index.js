require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const PUERTO = process.env.PUERTO||5500;
app.use(express.json());
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
// routes
app.use(require('./routes'));
// archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));
app.listen(PUERTO,()=>{
    console.log('Puerto: ',PUERTO, ' habilitado');
});