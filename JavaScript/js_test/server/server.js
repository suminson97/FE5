const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "content-Type": "text/html" });
    res.end("<p>hello world</p>");
  })
  .listen(3000, () => {
    console.log("3000번 포트 서버 접속 완료");
  });
