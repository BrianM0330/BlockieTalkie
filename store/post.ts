import { defineStore } from 'pinia'
import dummy from '../public/dummypost.json'

export const usePostStore = defineStore('post', {
  state: () => ({
    post: dummy
  }),
})
