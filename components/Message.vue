<template>
  <div v-show="message" class="p-1 w-full bg-white">
    <div v-if="!newPost && !ad" class="normalMessage flex">
      <div class="text-blockblue"> {{ sender }}:</div>
      <div class="ml-1 text-black"> {{ message }}</div>
    </div>
    <div v-else :class="bannerColor">
      <div> &lt;{{ specialMessage }}&gt; </div>
      <div> {{ message }} </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  newPost: boolean,
  ad: boolean,
  message: string,
  sender: string
}
const props = withDefaults(defineProps<Props>(), {
  newPost: false,
  ad: false,
  message: '',
  sender: '0x491491941'
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
