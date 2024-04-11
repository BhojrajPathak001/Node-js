const http = require("http");
const express = require("express");
const app = express();
const route = require("./route");

const server = http.createServer(route);

server.listen(3000);
