const http = require('http');
const url = require('url');

http.createServer((req, resp) => {

    let sample = url.parse(req.url, true).query;
    resp.write("Radius is : "+sample.radius);
    resp.write("\nDiameter is : "+2 *sample.radius);
    resp.end();
}).listen(800);