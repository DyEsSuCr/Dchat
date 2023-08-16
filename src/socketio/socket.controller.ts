import { Server, Socket } from 'socket.io'

export const connect = async (socket: Socket, io: Server) => {
  console.log('🔗 New Connection: ' + socket.id)

  // example
  socket.on('message', (body) => {
    console.log(body)

    socket.broadcast.emit('message', {
      body,
      from: socket.id.slice(8)
    })
  })
}
