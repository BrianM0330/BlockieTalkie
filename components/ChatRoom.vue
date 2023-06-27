<template>
  <div class="messageBox bg-red bg-slate-50 h-1/2 flex w-96 flex-col-reverse gap-2 px-1">
    <div class="w-96 bg-slate-50 p-1" v-for="(message, index) in messages" :key="index">
      {{message }}
    </div>
  </div>
    <input v-model="currentMessage" />
    <button @click.prevent="insertMessage" type="submit"> Send Message </button>
</template>

<script setup>
const messages = reactive([])
const currentMessage = ref('')

function insertMessage () {
  messages.push(currentMessage.value)
}
</script>

<style>
.messageBox {
height: 600px;
}
</style>
