<template>
  <div class="flex flex-col-reverse gap-2 p-1 messageBox bg-red bg-white border-2 border-black h-1/2 w-96">
    
    <div id="submissionArea" class="flex w-full gap-0.5">
      <input id="messageBox" class="w-full h-10 p-1 border border-black" v-model="currentMessage" />
      <div> </div>
      <div @click="insertMessage" type="submit" class="w-10 h-10 margin-left flex justify-center items-center border border-black">
        <img src="~/assets/icons/corner-down-right.png" />
      </div>
    </div>

    <div id="messages" class="gap-1 p-1 w-full bg-white" v-for="(message, index) in messages" :key="index">
      {{message }}
    </div>

    <div id="subRow"></div>

    <div id= "title" class="flex w-full h-10 border border-black items-center justify-self end">
      <div id="numberOfPeople" class="flex w-full p-1 "> chat (112) </div>
      <div id="minimizeIcon" class="h-6 w-6 margin-left justify-center items-center">
        <img src="~/assets/icons/minus.png" /> 
      </div>
    </div>
  </div>
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
