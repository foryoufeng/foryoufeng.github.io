# customRef


```sh
<script setup lang="ts">
import {customRef} from "vue";
let v = 'hello'
let timer:number
let msg = customRef((track, trigger)=>{
  return {
    set(value:string){
      clearTimeout(timer)
      timer = setTimeout(()=>{
        v = value
        trigger()
      },1000)
    },
    get(){
      track()
      return v
    }
  }
})
</script>

<template>
 {{ msg}}
  <input type="text" v-model="msg">
</template>
```