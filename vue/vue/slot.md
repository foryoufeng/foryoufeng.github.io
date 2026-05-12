# slot

basic

`Home.vue`
```sh
 <Input v-model="name" :count="count" ref="inputRef">
  <template #s1>
    <p><span>你好1</span></p>
  </template>
</Input>
<Input v-model="name" :count="count" ref="inputRef">
  <template #s2>
    <p><span>你好2</span></p>
  </template>
</Input>
```

`Input.vue`

```sh
<script setup lang="ts">
import {ref} from "vue";

defineProps(["modelValue","count"])
const emit = defineEmits(["update:modelValue"])
const inputCount=ref<number>(2);
defineExpose({inputCount})
</script>

<template>
<input type="text" :value="modelValue" @input="emit('update:modelValue', $event.target.value)"/>
  <slot name="s1"></slot>
  <slot name="s2"></slot>

</template>

```