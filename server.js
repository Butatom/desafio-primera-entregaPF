const express = require("express");
const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTERS
const routerProductos = require("./routes/products");
app.use("/productos", routerProductos);

const routerCarrito = require("./routes/carrito.js");
app.use("/carrito", routerCarrito);

// ruta "/" muestra index.html
app.use(express.static("public"));

// manejo de errores de aplicación
app.use((err, req, res, next) => {
  console.error(err.message);
  return res.status(500).send("ocurrio un error");
});

const puerto = process.env.PORT || 8080;

const server = app.listen(puerto, () => {
  console.log(`servidor escuchando en http://localhost:${puerto}`);
});