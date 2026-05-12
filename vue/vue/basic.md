# basic use

watch

```sh
watch(person,(newVal, oldVal) => {
  console.log(newVal, oldVal);
},{deep:true,immediate:true})
```

watch one attr

```sh
watch(()=>person.value.name,(newVal, oldVal) => {
  console.log(newVal, oldVal);
})
```

watch array

```sh
watch([()=>person.value.name,()=>person.value.age],(newVal, oldVal) => {
  console.log(newVal, oldVal);
},{deep:true,immediate:true})
```

### ref


```sh
<p ref="title">title</p>
<button @click="show()">show title</button>


let title = ref()
function show(){
  console.log(title.value)
}
```

### computed


```sh
let name = ref('zhang')
let lastName = ref('san')

// let fullName = computed(() => {
//   return name.value +"-->"+lastName.value
// })
let fullName = computed({
  get(){
    return name.value + ' ' + lastName.value
  },
  set(val){
    console.log(val)
    const [v1,v2] = val.split(' ');
    name.value = v1;
    lastName.value = v2;
  }
})
```

### types

```sh
export interface IPerson {
    name: string,
    age: number,
}

export type Persons = IPerson[];

```

`Person.vue`

```vue
<script setup lang="ts">
import {type IPerson, type Persons} from '@/types'

let person: IPerson = {name:'jim',age:20};

let emit = defineProps<{list?:Persons}>()
</script>

<template>
  <p>{{person.name}}</p>
  <ul>
    <li v-for="item in list">{{item.name}}--->{{item.age}}</li>
  </ul>
</template>
<style scoped>

</style>

`App.vue`
<Person a="haha" :list="persons"/>
```

### lifecycle

```js
onBeforeMount(() => {
    console.log("before");
})
onMounted(()=>{
    console.log("mounted");
})
onBeforeUpdate(()=>{
    console.log("beforeUpdate");
})
onUpdated(()=>{
    console.log("updated");
})
onBeforeUnmount(()=>{
    console.log("beforeUnmount");
})
onUnmounted(()=>{
    console.log("unmounted");
})
```

### defineModel


```sh
const model = defineModel({required:true})

<HelloWorld v-model="countStore.count" />
```