export default (io) => {
  io.on('connection', (socket) => {
    socket.on('message', (message) => {
      console.log(message)
    })
  })
}