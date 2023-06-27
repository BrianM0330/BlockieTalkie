<template>
  <div>
    <form @submit.prevent="sendMessage">
      <button type="submit" class="btn btn-primary">Send Message</button>
      <input v-model="message" />
    </form>
    <h1 v-for="message in messages">
      {{ message }}
    </h1>
  </div>
</template>

<script setup lang="ts">
  const { $io } = useNuxtApp();
  import { useMessagesStore } from '~/store/messages'

  const messageStore = useMessagesStore()
  const { addMessage, messages } = messageStore
  const message = ref('')


  onMounted(() => {
    $io.on('message', ({ data }: { data: string}) => {
      console.log('gotamessage', data)
      addMessage(data)
    })
  })

  const sendMessage = (tosend: string) => {
    const stamp = Date.now().toString()
    $io.emit("message", message.value || stamp)
  };
  
</script>
