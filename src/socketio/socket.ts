import SocketIO from 'socket.io'
import { Server } from 'http'
import * as SocketController from './socket.controller'

class Socket {
  private readonly io: SocketIO.Server

  constructor (server: Server) {
    this.io = new SocketIO.Server(server, {
      cors: { origin: '*' }
    })

    this.io.on('connection', async (socket) =>
      await SocketController.connect(socket, this.io)
    )
  }
}

export default Socket
