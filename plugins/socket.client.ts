import { io } from 'socket.io-client';
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  console.log('URL:', config.public.SOCKET_URL)

  //Socket Client
  const socket = io(config.public.SOCKET_URL); //REPLACE ME

  socket.on('message', (msg: string) => {
    console.log('amessagefromsocket', msg)
  })

  socket.on('userjoined', () => {
    console.log('USER JOINED')
  })
  return {
      provide: {
          io: socket
      }
  }
});
