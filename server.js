const http = require('http');
const fs = require('fs');




const server = http.createServer((req,res)=>{
    console.log(req.url, req.method);
    let path = './views/';
    if (req.url ==='/'){
        res.statusCode = 200;
        path += 'index.html';
    } else if (req.url==='/dogs'){
        res.statusCode = 200;
        path += 'dogs.html'
    } else if (req.url === '/dogs-new'){
        res.statusCode = 301;
        // redirect
        res.setHeader('Location', '/dogs');
        // res.end() da eroare(il inchide)
    } else {
        res.statusCode = 404;
        path += '404.html'
    }

    // setHeader
    res.setHeader('Content-type', 'text/html');
    // sent an html file
    // inlocuiesc hardcoded './views/index.html' cu path
    fs.readFile(path, (err, data)=>{
        if (err){
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            res.end(data);
        }
    })
});

server.listen(3000,'localhost', ()=>{
    console.log('listening on 3000')
});
