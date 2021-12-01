const express = require('express')
const cors = require('cors');
const { dbConnetion } = require('../database/config');


class Server {
  constructor() {
    this.app = express()
    this.middleware()
    //conectar a base de tados 
    this.baseDatos();
    this.port = process.env.PORT

    this.routes()
  }

  async baseDatos() {
    await dbConnetion();
  }
  middleware() {
    this.app.use(cors())
    this.app.use(express.json())
  }
  routes() {
    this.app.use('/api/usuarios', require('../router/usuarios'))
    this.app.use('/api/avances', require('../router/avances'))
    this.app.use('/api/proyectos', require('../router/proyectos'))

  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server connect IN PORT ${this.port}`)
    })
  }
}

module.exports = Server
