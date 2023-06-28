<template>
  <ChatRoom
    :messages="messages"
    :user-count="userCount"
    @send="(msg) => sendMessage(msg)"
  />
</template>

<script setup lang="ts">
  const { $io } = useNuxtApp()
  import { storeToRefs } from 'pinia';

  import { useMessagesStore } from '~/store/messages'
  const messageStore = useMessagesStore()
  const { messages, userCount } = storeToRefs(messageStore)
  const { addMessage, setUserCount } = messageStore

  onMounted(() => {
    $io.on('message', ({ data }: { data: string}) => {
      addMessage(data)
    })
    $io.on('usercount', (data) => {
      setUserCount(data)
    })
  })

  const sendMessage = (tosend: string) => {
    const stamp = Date.now().toString()
    addMessage(tosend)
    $io.emit("message", tosend || stamp)
  };

</script>
