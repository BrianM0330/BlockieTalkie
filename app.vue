<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup lang='ts'>
  import { storeToRefs } from 'pinia';

  import { usePostStore } from '~/store/post'
  const messageStore = usePostStore()
</script>
