const express = require("express");
const cors = require("cors");
class server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.userRouterPath = "/api/user";
    this.listen();
    // middlewares
    this.midlewares();
    //rutas de mi aplicacion
    this.router();
  }
  midlewares() {
    //cors
    this.app.use(cors());
    //Lectura y parseo del body
    this.app.use(express.json());
    //Directorio publico
    this.app.use(express.static("public"));
  }
  router() {
    this.app.use(this.userRouterPath, require("../routes/user"));
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening at http://localhost:${this.port}`);
    });
  }
}

module.exports = server;
