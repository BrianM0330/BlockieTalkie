<template>
  <div class="font-lores flex flex-col gap-2 p-1 messageBox bg-red bg-white border-2 border-black h-1/2 w-96">
    <div id= "title" class="flex w-96 h-12 -m-1.5 border-2 border-black items-center justify-between">
      <div id="numberOfPeople" class="flex w-auto p-2 text-xl"> Chat ({{ userCount }}) </div>
      <div class="flex gap-2 items-center justify-center">
        <div :class="indicatorClass" />
        <div> {{ statusMessage }} </div>
      </div>
      <div id="minimizeIcon" class="h-6 w-6 margin-left mr-2 justify-center items-center">
        <img src="~/assets/icons/minus.png" /> 
      </div>
    </div>

    <div id="subRow"></div>

    <div id="messageContainer" class="flex flex-col gap-1 mt-auto overflow-y-scroll">
      <Message
        class="p-1 w-full bg-white" v-for="(msg, index) in messages"
        :key="index"
        :ad="msg?.ad"
        :new-post="msg?.newPost"
        :message="msg?.message"
        :sender="msg?.sender?.username"
        :icon="msg?.sender?.icon"
      />
    </div>
    
    <form @submit.prevent="$emit('send', message); message = ''" id="submissionArea" class="flex w-full h-10 gap-1">
      <input
        id="messageBox"
        class="w-full h-10 p-1 border-2 border-black justify-top
        hover:border-blockblue
        focus:border-blockblue focus:outline-none focus:caret-blockblue"
        v-model="message"
      />
      <button type="submit" class="
      w-12 h-10 margin-left flex justify-center 
      items-center border-2 border-black
      hover:border-blockblue">
        <img src="~/assets/icons/corner-down-right.png" />
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import Message from './Message.vue'

const message = ref('')

interface Message {
  newPost: boolean,
  ad: boolean,
  message: string,
  sender: string,
}

export interface Props {
  messages: Message[],
  userCount: number
  user: {
    isConnected: boolean,
    hasAccess: boolean,
    username: string
  }
}
const props = withDefaults(defineProps<Props>(), {
  messages: () => [{
    newPost: false,
    ad: false,
    message: '',
    sender: ''
  }],
  userCount: 0,
  user: {
    isConnected: false,
    hasAccess: false,
    username: ''
  }
})

const indicatorClass = computed(() => {
  return {
    'h-3': true,
    'w-3': true,
    'bg-blockgreen': !props.user.isConnected,
    'bg-blockblue': props.user.isConnected,
  }
});

const statusMessage = computed(() => {
  return props.user.isConnected ? props.user.username : 'Connect Wallet'
});

</script>

<style>
.messageBox {
height: 600px;
}
</style>
