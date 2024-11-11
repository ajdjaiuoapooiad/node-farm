const fs = require('fs');
const http = require('http');


// const textIn = fs.readFileSync('./txt/input.txt','utf-8');
// console.log(textIn);

//Server




const tempOverview = fs.readFileSync(`${__dirname}/templates/overview.html`,'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/product.html`,'utf-8');



const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);




const server = http.createServer((req,res) => {
    
    const pathname = req.url;


    // Overview page
    if (pathname === '/' || pathname === '/overview') {
        res.writeHead(200, {
        'Content-type': 'text/html'
        });

        res.end(tempOverview);

        // Product page
    } 

});




server.listen(8000,'127.0.0.1',() => {
    console.log('Listening to request on port 8000');
    
});
