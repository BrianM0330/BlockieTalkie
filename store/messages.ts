import { defineStore } from "pinia";

export const useMessagesStore = defineStore('messages', {
  state: () => ({ messages: [] }),
  actions: {
    addMessage(msg: string) {
      this.messages.push(msg)
    }
  },
  getters: {
    allMessages: state => state.messages
  }
})
