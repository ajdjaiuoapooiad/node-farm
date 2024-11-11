const fs = require('fs');
const http = require('http');


// const textIn = fs.readFileSync('./txt/input.txt','utf-8');
// console.log(textIn);

//Server


const tempOverview = fs.readFileSync(`${__dirname}/templates/orverview.html`,'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/product.html`,'utf-8');

const server = http.createServer((req,res) => {
    console.log(req.url);
    res.end('Hello server');
});

server.listen(8000,'127.0.0.1',() => {
    console.log('Listening to request on port 8000');
    
});
