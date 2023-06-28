<template>
  <ChatRoom
    :messages="messages"
    :user-count="userCount"
    @send="(msg) => $io.sendMessage(msg)"
  />
</template>

<script setup lang="ts">
  const { $io } = useNuxtApp()
  import { storeToRefs } from 'pinia';

  import { useMessagesStore } from '~/store/messages'
  const messageStore = useMessagesStore()
  const { messages, userCount } = storeToRefs(messageStore)
</script>
