<template>
  <div class="p-1 w-full bg-white">
    {{ message }}
  </div>
</template>

<script setup lang="ts">
export interface Props {
  color: string,
  message: string,
  sender: string
}
const props = withDefaults(defineProps<Props>(), {
  color: 'black',
  message: '',
  sender: ''
})

</script>
