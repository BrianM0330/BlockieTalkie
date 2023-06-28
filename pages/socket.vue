<template>
  <div>
    <form @submit.prevent="sendMessage(message)">
      <button type="submit" class="btn btn-primary">Send Message</button>
      <input v-model="message" />
    </form>
    <div> {{ userCount }} </div>
    <h1 v-for="message in messages">
      {{ message }}
    </h1>
  </div>
</template>

<script setup lang="ts">
  const { $io } = useNuxtApp()
  import { storeToRefs } from 'pinia';

  import { useMessagesStore } from '~/store/messages'
  const messageStore = useMessagesStore()

  const { messages, userCount } = storeToRefs(messageStore)

  const { addMessage, setUserCount } = messageStore
  const message = ref('')


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
    addMessage(message.value)
    $io.emit("message", message.value || stamp)
  };
  
</script>
