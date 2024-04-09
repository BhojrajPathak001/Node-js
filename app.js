const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
//   res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My firset page</title></head>");
  res.write("<body>Hello from node </body>");
  res.write("</html>");
});

server.listen(3000);
