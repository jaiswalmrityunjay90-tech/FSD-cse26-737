// const fs = require('node:fs');
// try{
//     const content = 'this is written synchronously.';
//     fs.writeFileSync('output.txt',content, 'utf8');
//     console.log('file wrritten successfully!');

// }
// catch(err){ 
//     console.error(err);
// }
const http = require('http');

http.createServer((request, response) => {

    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    response.write('Hello, world!\n');

    response.end();

}).listen(3000);

console.log('Server running on port 3000');