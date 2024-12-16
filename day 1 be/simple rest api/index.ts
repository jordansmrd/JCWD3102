/** @format */
//node index.js  --javascript
//ts-node index.ts --typescript
//nodemon menjalan file lewat node/ts-node dan selalu listen ke perubahan filenya

import http, { IncomingMessage, ServerResponse } from "http";

const PORT = 8000;

const server = http.createServer(
  async (req: IncomingMessage, res: ServerResponse) => {
    if (req.url == "/api" && req.method == "GET") {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.write("hi there, this is vanilla Node.js API");
      res.end();
    } else if (req.url == "/api" && req.method == "POST") {
      res.writeHead(201, {
        "Content-Type": "application/json",
      });
      res.write("ini method post");
      res.end();
    } else if (req.url == "/api" && req.method == "PATCH") {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.write("ini method PATCH");
      res.end();
    } else if (req.url == "/api" && req.method == "DELETE") {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.write("ini method DELETE");
      res.end();
    }

    if (req.url == "/api/users" && req.method == "GET") {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.write("ini get users");
      res.end();
    }
  }
);

server.listen(PORT, () => {
  console.log("server is running on PORT", PORT);
});
