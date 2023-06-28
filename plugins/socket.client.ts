import { io } from 'socket.io-client';
import { useMessagesStore } from '~/store/messages'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const messageStore = useMessagesStore()
  const { addMessage, setUserCount } = messageStore

  //Socket Client
  const socket = io(config.public.SOCKET_URL)

  socket.on('message', ({ data }: { data: string}) => {
    addMessage(data)
  })

  socket.on('usercount', (data) => {
    setUserCount(data)
  })

  socket.sendMessage = (msg: string) => {
    addMessage(msg)
    socket.emit('message', msg)
  }

  return {
    provide: {
      io: socket
    }
  }
});
