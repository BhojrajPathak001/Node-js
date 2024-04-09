const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"/><button>send</button> </form> </body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message") {
    console.log();
    res.write("<h1>bhojraj</h1>");
  }
});

server.listen(3000);
