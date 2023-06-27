import { io } from 'socket.io-client';

//Socket Client
const socket = io('http://e364-67-175-166-148.ngrok-free.app');
socket.on('connect', () => {
  console.log('CONNECTED!')
})
socket.on('message', (msg: string) => {
  console.log('amessagefromsocket', msg)
})
export default defineNuxtPlugin(() => {
    return {
        provide: {
            io: socket
        }
    }
});
