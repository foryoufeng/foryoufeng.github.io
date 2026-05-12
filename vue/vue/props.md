# props

`Parent.vue`

```sh
<script setup lang="ts">
import {ref} from "vue";
import Child from "./Child.vue";

const car = ref("car")
const toy = ref('')
function getToy(value:string){
  toy.value = value
}
</script>

<template>
  <n-card title="Parent">
    {{ car }}
    <p v-if="toy">Child give {{ toy }}</p>
    <Child :car="car" @update="getToy"/>
  </n-card>
</template>
```

`Child.vue`

```sh
<script setup lang="ts">
import {ref} from "vue";

defineProps(['car'])
const toy = ref('toy')
const emit = defineEmits(['update'])
</script>

<template>
  <n-card title="Child">
    {{ car }}
    <n-button @click="emit('update',toy)">give to Parent</n-button>
  </n-card>
</template>

<style scoped>

</style>
```

### v-model

```sh
<Child v-model="car"/>

`Child.vue`
<script setup lang="ts">

defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

</script>

<template>
  <n-card title="Child">
    <input :value="modelValue" @input="emit('update:modelValue',($event.target as HTMLInputElement).value)">
  </n-card>
</template>
```

### v-model:update

```sh
<Child v-model:update="car"/>

<script setup lang="ts">
const emit = defineEmits(['update:update'])

</script>
<input :value="modelValue" @input="emit('update:update',($event.target as HTMLInputElement).value)">
```