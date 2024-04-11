const fs = require("fs");

const route = (req, res) => {
  const url = req.url;
  const method = req.method;
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
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      console.log(body);
      const semiParsedBody = Buffer.concat(body);
      console.log(semiParsedBody, "semiParsedBody");
      const parsedBody = semiParsedBody.toString();
      console.log(parsedBody, "parsedBody");
      const message = parsedBody.split("=")[1];

      fs.writeFileSync("message.txt", message); //blocking code
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      }); //non blocking code
    });
  }
  res.write("<h1>no condition route </h1>");
  res.end();
};

module.exports = route;
