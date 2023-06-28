<template>
  <div class="flex flex-col gap-2 p-1 messageBox bg-red bg-white border-2 border-black h-1/2 w-96">
    <div id= "title" class="flex w-full h-10 border border-black items-center justify-self end">
      <div id="numberOfPeople" class="flex w-full p-1 "> Users ({{ userCount }}) </div>
      <div id="minimizeIcon" class="h-6 w-6 margin-left justify-center items-center">
        <img src="~/assets/icons/minus.png" /> 
      </div>
    </div>

    <div id="subRow"></div>

    <div id="messageContainer" class="flex flex-col gap-1 mt-auto overflow-y-scroll">
      <Message
        class="p-1 w-full bg-white" v-for="(message, index) in messages"
        :key="index"
        :message="message"
      />
    </div>
    
    <form @submit.prevent="$emit('send', message); message = ''" id="submissionArea" class="flex w-full gap-0.5">
      <input
        id="messageBox"
        class="w-full h-10 p-1 border border-black"
        v-model="message"
      />
      <button type="submit" class="w-10 h-10 margin-left flex justify-center items-center border border-black">
        <img src="~/assets/icons/corner-down-right.png" />
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import Message from './Message.vue'

const message = ref('')

export interface Props {
  messages: string[],
  userCount: number
}
const props = withDefaults(defineProps<Props>(), {
  messages: () => [''],
  userCount: 0
})

</script>

<style>
.messageBox {
height: 600px;
}
</style>
