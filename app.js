const http = require("http");
const port = process.env.PORT;
const hosName = '127.0.0.1';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content/type", "text/plain");
  res.end("Hello world");
});

server.listen(port , hosName , () => {
   `The node js server is runing under ${hosName} in port ${port}`
})