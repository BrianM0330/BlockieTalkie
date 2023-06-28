<template>
  <div class="p-1 w-full bg-white" :style="{ color }">
    {{ message }}
  </div>
</template>

<script setup lang="ts">
export interface Props {
  message: string,
  sender: string
}
const props = withDefaults(defineProps<Props>(), {
  color: 'black',
  message: '',
  sender: ''
})

const color = computed(() => {
  return ''
});

</script>
