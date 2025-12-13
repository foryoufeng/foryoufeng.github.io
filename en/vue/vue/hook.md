# hook

`useSum.ts`

```ts
import {ref} from "vue";

export default function (){
    let sum = ref(0)

    function add(){
        sum.value++
    }

    return {sum, add}
}
```


```vue
<script setup lang="ts">
import useSum from "@/hooks/useSum";
const {sum,add} = useSum()
</script>

<template>
  <button @click="add">{{ sum }}</button>
</template>
```