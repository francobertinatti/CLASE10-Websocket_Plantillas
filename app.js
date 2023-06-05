// const express = require("express");
// const handlebars = require("express-handlebars");
// const http = require("http");
// const socketio = require("socket.io");
// const utils = require("./utils");

// const port = 3000;

// const app = express();
// const server = http.createServer(app);
// const io = socketio(server);

// // Configurando el motor de plantillas Handlebars
// app.engine("handlebars", handlebars.engine());
// app.set("view engine", "handlebars");

// // Configurando el middleware para servir archivos estáticos
// app.use(express.static(__dirname + "/public"));

// // Rutas
// app.get("/", (req, res) => {
//   res.render("home", { products: utils.getProducts() });
// });

// app.get("/realtimeproducts", (req, res) => {
//   res.render("realTimeProducts", { products: utils.getProducts() });
// });

// // Socket.io
// io.on("connection", (socket) => {
//   console.log("Cliente conectado");

//   // Enviamos la lista de productos al cliente que se conecta
//   io.emit("products", utils.getProducts());

//   // Escuchamos los eventos "new-product" y "delete-product" para actualizar la lista de productos en tiempo real
//   socket.on("new-product", (product) => {
//     utils.addProduct(product);
//     io.emit("products", utils.getProducts());
//   });

//   socket.on("delete-product", (productId) => {
//     utils.deleteProduct(productId);
//     io.emit("products", utils.getProducts());
//   });
// });

// server.listen(port, () =>
//   console.log(`Servidor escuchando en http://localhost:${port}`)
// );

const express = require("express");
const handlebars = require("express-handlebars");
const http = require("http");
const socketio = require("socket.io");
const utils = require("./utils");

const port = 3000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Configurando el motor de plantillas Handlebars
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

// Configurando el middleware para servir archivos estáticos
app.use(express.static(__dirname + "/public"));

// Rutas
app.get("/", (req, res) => {
  res.render("home", { products: utils.getProducts() });
});

app.get("/realtimeproducts", (req, res) => {
  res.render("realTimeProducts", { products: utils.getProducts() });
});

// Socket.io
io.on("connection", (socket) => {
  console.log("Cliente conectado");

  // Enviamos la lista de productos al cliente que se conecta
  io.emit("products", utils.getProducts());

  // Escuchamos los eventos "new-product" y "delete-product" para actualizar la lista de productos en tiempo real
  socket.on("new-product", (product) => {
    utils.addProduct(product);
    io.emit("products", utils.getProducts());
  });

  socket.on("delete-product", (productId) => {
    utils.deleteProduct(productId);
    io.emit("products", utils.getProducts());
  });
});

server.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
