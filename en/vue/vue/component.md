# component

basic

```sh
<script setup lang="ts">
import {onBeforeMount, onMounted, onUnmounted} from "vue";
type Type = "success" | "warning" | "danger";

const props = withDefaults(defineProps<{
  type?: Type;
  count: number;
}>(),{
  type:"success"
})
const emit = defineEmits(['change'])
onBeforeMount(()=>{
  console.log("before mount")
})
onMounted(()=>{
  console.log("button mounted")
})
onUnmounted(()=>{
  console.log("button unmounted")
})
</script>

<template>
<button :type="props.type" class="button" @click="emit('change')">
  <slot></slot>
  {{props.count}}
</button>
</template>

```