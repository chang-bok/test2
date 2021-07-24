const http = require('http');         // 웹서버 모듈 
const hostname = '127.0.0.1';
const port = 1338;
/*
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
var server = http.createServer(function(req, res){
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}) ;
server.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
}
);        // 시간이 걸리는 작업  
