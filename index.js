import express from 'express';
//const express = require('express');
import morgan from 'morgan';
// const morgan=require('morgan');
import cors from 'cors';
// const cors=require('cors');
import path from 'path';
import mongoose from 'mongoose';
import router from './routes';


//conexion a la base de datos MongoDB
mongoose.Promise=global.Promise;
const dbUrl='mongodb://localhost:27017/dbsistema';
mongoose.connect(dbUrl, {useCreateIndex:true,useNewUrlParser: true})
.then(mongoose=>console.log('conectando a la base de datos en el puero 27017'))
.catch(err=>console.log(err));

const app=express();
app.use(morgan('dev'));
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/api',router); //cuando yo escriba en mi navega
app.set('port',process.env.PORT|| 3000);

app.get('/hola',function(req,res){
    res.send('hola mundo');
});

app.listen(app.get('port'),()=>{
    console.log('el servidor se esta ejecunta en el puerto '+app.get('port'));
    
});