<template>
  <div v-show="message" class="p-1 w-full bg-white flex gap-1">
    <img v-if="icon" :src="`/${icon.toLowerCase()}.png`" />
    <div v-if="!newPost && !ad" class="normalMessage flex gap-1">
      <div class="text-blockblue"> {{ sender }}:</div>
      <vue-writer :array="[message]" :iterations="1" :typeSpeed="50"/>
    </div>
    <div v-else :class="bannerColor">
      <div> &lt;{{ specialMessage }}&gt; </div>
      <vue-writer :array="[message]" :iterations="1" :typeSpeed="50"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueWriter from 'vue-writer'

export interface Props {
  newPost: boolean,
  ad: boolean,
  message: string,
  sender: string,
  icon: string,
}
const props = withDefaults(defineProps<Props>(), {
  newPost: false,
  ad: false,
  message: '',
  sender: '0x491491941',
  icon: ''
})

const specialMessage = computed(() => {
  return props.newPost ? 'New Article' : 'A Message From Our Sponsor'
})

const bannerColor = computed(() => {
  return {
    'flex': true,
    'flex-col': true,
    'items-center': false,
    'justify-center': true,
    'text-l': true,
    'text-blockred': props.newPost && !props.ad,
    'text-blockgreen': !props.newPost && props.ad,
  }
});

</script>
