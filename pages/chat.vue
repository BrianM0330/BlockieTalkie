<template>
  <div class="flex gap-16">
    <ChatRoom
      :messages="messages"
      :user-count="userCount"
      :user="userState"
      @send="(msg) => $io.sendMessage({
        message: msg,
        sender: {
          username: userState.username || `0x${Date.now().toString().slice(0, 6)}`,
          icon: userState.icon
        },
      })"
    />
    <div class="flex flex-col p-8 h-auto justify-between" :class="{ 'bg-neutral-100': showPanel}">
      <div class="flex flex-col gap-1 items-center justify-center">
        <div class="font-lores text-4xl"> Blockie Talkie Control Panel</div>
        <button @click.prevent="showPanel = !showPanel" class="font-lores text-3xl hover:text-blockblue"> {{ showPanel ? 'close' : 'open' }} </button>
      </div>

      <div v-if="showPanel" class="font-lores flex flex-col gap-4">
        <form class="border-2 border-black flex flex-col p-4" @submit.prevent="sendPost(); postTitle = ''">
          <h1 class="text-2xl font-bold my-4"> Create a new Sponsor or Publish a Post (Demo Publish)</h1>
          <div>
            <label for="BannerMessage"> Message </label>
            <input class="border-2 border-black" name="BannerMessage" v-model="postTitle" />
          </div>
          <div>
            <label for="adType"> Ad </label>
            <input name="adType" type="radio" v-model="bannerType" value="ad" />
          </div>
          <div>
            <label for="postType"> New Post </label>
            <input name="postType" type="radio" v-model="bannerType" value="post" />
          </div>
          <button type="submit" class="bg-neutral-100"> Send </button>
        </form>

        <div class="border-2 border-black flex flex-col p-4 gap-1">
          <h1 class="text-2xl font-bold mt-4"> Manage your User </h1>
          <div>
            <div class="text-xl font-semibold"> Has Wallet Connected </div>

            <div>
              <label for="walT"> True </label>
              <input name="walT" type="radio" v-model="userState.isConnected" :value="true" />
            </div>
            <div>
              <label for="walF"> False </label>
              <input name="walF" type="radio" v-model="userState.isConnected" :value="false" />
            </div>
          </div>

          <div v-if="userState.isConnected" class="flex flex-col">
            <div class="text-xl font-semibold"> Has Enough ACCESS locked </div>

            <div>
              <label for="acsT"> True </label>
              <input name="acsT" type="radio" v-model="userState.hasAccess" :value="true" />
            </div>
            <div>
              <label for="acsF"> False </label>
              <input name="acsF" type="radio" v-model="userState.hasAccess" :value="false" />
            </div>
          </div>
          <div class="mt-2 flex flex-col" v-if="userState.isConnected && userState.hasAccess">
            <label for="username"> Username </label>
            <input class="border-2 border-black" name="username" :disabled="!userState.hasAccess" v-model="userState.username" />
          </div>
          <div class="flex flex-col gap-2 mt-2" v-if="userState.isConnected && userState.hasAccess">
            <div > Icon (optional) </div>
            <div class="flex gap-2">
              <img v-if="userState.icon" :src="`/${userState.icon}.png`" />
              <select class="border-2 border-black" v-model="userState.icon">
                <option disabled value=""> Select one </option>
                <option> Sun </option>
                <option> Bolt </option>
                <option> Cocktail </option>
                <option> Coin </option>
                <option> Heart </option>
                <option> Money </option>
                <option> Moon </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { $io } = useNuxtApp()
  import { storeToRefs } from 'pinia';

  import { useMessagesStore } from '~/store/messages'
  const messageStore = useMessagesStore()
  const { messages, userCount } = storeToRefs(messageStore)
  const defaultUNAME = `0x${Date.now().toString().slice(0, 6)}`

  const postTitle = ref('')
  const bannerType = ref('')
  const showPanel = ref(false)


  const userState = reactive({
    isConnected: false,
    hasAccess: false,
    username: defaultUNAME,
    icon: ''
  })

  const sendPost = () => {
    $io.sendMessage({
      newPost: bannerType.value === 'post',
      ad: bannerType.value === 'ad',
      message: postTitle.value,
      sender: {
        username: userState.username || `0x${Date.now().toString().slice(0, 6)}`,
        icon: userState.icon
      },
    })
  }
</script>
