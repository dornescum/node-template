const express = require('express');
const app = express();

const port = 3000;
app.listen(port)
//listen for request || este importanta ordinea in care sunt aranjate
app.get('/', (req,res)=>{
    // este important obiectul (spune de unde porneste)
    res.sendFile('./views/index.html', {root: __dirname})
})
app.get('/dogs', (req,res)=>{
    res.sendFile('./views/dogs.html', {root: __dirname})
})
// redirect
app.get('/dogs-new', (req,res)=>{
    res.redirect('/dogs');
})
// 404 && si trebuie pus ultimul dupa ce trece prin toate
app.use((req,res)=>{
    res.sendFile('./views/404.html', {root: __dirname})

})