import { defineStore } from "pinia";

export const useMessagesStore = defineStore('messages', {
  state: () => ({
    messages: [],
    userCount: 1
  }),
  actions: {
    addMessage(msg: string) {
      this.messages.push(msg)
    },
    setUserCount(count: number) {
      this.userCount = count
    }
  },
  getters: {
    allMessages: state => state.messages
  }
})
