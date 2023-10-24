// Simple http server

const http = require('node:http');
const path = require('node:path');
const fs = require('node:fs');

const content_root = path.resolve(__dirname, "game");

content_types = {
    "html": "text/html",
    "js": "text/javascript",
    "css": "text/css",
    "png": "image/png",
    "woff": "font/woff" 
}

const server = http.createServer((req, res) => {
    const requested_path = path.resolve(path.join(content_root, req.url));

    if(fs.existsSync(requested_path) && fs.statSync(requested_path).isFile()) {
        console.log(`${requested_path}`)
        const file_extension = path.extname(requested_path).replace(".", "");
        const file_contents = fs.readFileSync(requested_path);

        const content_type = file_extension in content_types ? content_types[file_extension] : "text/plain";

        res.writeHead(200, { 'Content-Type': content_type });
        res.end(file_contents);
    return;
    }
   
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end("File Not Found");
});

server.listen(8000);
