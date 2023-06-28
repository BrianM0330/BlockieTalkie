import { io } from 'socket.io-client';

//Socket Client
const socket = io('http://e364-67-175-166-148.ngrok-free.app'); //REPLACE ME

socket.on('message', (msg: string) => {
  console.log('amessagefromsocket', msg)
})

socket.on('userjoined', () => {
  console.log('USER JOINED')
})
export default defineNuxtPlugin(() => {
    return {
        provide: {
            io: socket
        }
    }
});
