import { io } from 'socket.io-client';

//Socket Client
const socket = io('http://localhost:3001');
socket.on('connect', () => {
  console.log('CONNECTED!')
})
export default defineNuxtPlugin(() => {
    return {
        provide: {
            io: socket
        }
    }
});
