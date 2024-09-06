


const http = require('http');
const fs = require('fs');

const port = process.env.PORT || process.env.NODE_PORT || 3000;
const index = fs.readFileSync(`${__dirname}/../client/client.html`);

const onRequest = (request, response) => {
    switch(request.url){
        case '/':
            response.writeHead(200, {
                'Content-Type': 'text/html',
            });
            response.write(index);
            response.end();
            break;
        default:
            response.writeHead(200, {
                'Content-Type': 'text/plain',
            });
            response.write('Wrong Page');
            response.end();
            break;
    }
    
};

http.createServer(onRequest).listen(port, () => {
    console.log(`Server running on port ${port}`);
});