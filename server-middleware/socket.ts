import { Server } from 'socket.io';

const io = new Server(3001, {
  cors: {
    origin: '*',
  }
});

io.on('connection', (socket) => {
  console.log('Connection', socket.id)
  socket.emit('usercount', io.sockets.server.engine.clientsCount)
})

// Sets listeners for socket after it is CONNECTED to the server
io.on('connect', (socket) => {
  socket.emit('message', `welcome ${socket.id}`)
  socket.broadcast.emit('message', `${socket.id} joined`)
  socket.broadcast.emit('usercount', io.sockets.server.engine.clientsCount)

  socket.on('message', function message(data: any) {
    console.log('message received: %s', data)
    socket.broadcast.emit('message', { data })
  })

  socket.on('disconnecting', () => {
    console.log('disconnected', socket.id)
    socket.broadcast.emit('usercount', io.sockets.server.engine.clientsCount)
    socket.broadcast.emit('message', `${socket.id} left`)
    console.log('total users:', io.sockets.server.engine.clientsCount)
  })
});

export default function (req, res, next) {
  res.statusCode = 200
  res.end()
}
