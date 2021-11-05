const http = require("http");
const fs = require("fs");

const port = 8080;
const hostname = "localhost";

const server = http.createServer((req, res) => {
  console.log("request recevied");
  res.statusCode = 200;
  //set header content type
  res.setHeader("Content-type", "text/html");

  let path = "./public/";
  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    case "/contact":
      path += "contact.html";
      break;
    default:
      path += "404.html";
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}`);
});
