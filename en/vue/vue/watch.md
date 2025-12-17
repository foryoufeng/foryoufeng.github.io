# watch

basic

```sh
<script setup lang="ts">
import {ref, watch} from "vue";

let sum = ref(0)
function changeSum() {
  sum.value++
}
const stopWatch = watch(sum,(newVal, oldVal) => {
  console.log(newVal,oldVal)
  if(newVal>10){
    stopWatch()
  }
})
</script>
<template>
  <div>
    <p>
      <button @click="changeSum" type="button">change sum</button>
    </p>
    <div>{{sum}}</div>
  </div>
</template>

```

watch

```sh
<script setup lang="ts">
import {ref, watch} from "vue";

let person = ref({
  name: "John",
  age: 20
})
function changePerson() {
  person.value = {"name":"John1","age":21}
}
function changeName() {
  person.value.name = "John3"
}
function changeAge() {
  person.value.age = 30
}
watch(person,(newVal) => {
  console.log(newVal)
},{deep:true,immediate:true})
</script>
<template>
  <div>
    <p>
      <button @click="changeName" type="button">change name</button>
    </p>
    <p>
      <button @click="changeAge" type="button">change age</button>
    </p>
    <p>
      <button @click="changePerson" type="button">change person</button>
    </p>
    <p>
      {{person.name}}---{{person.age}}
    </p>
  </div>
</template>
```

use `reactive` watch will auto open `deep:true`


watch a object attribute
```sh
watch(()=>person.name,(newVal) => {
  console.log(newVal)
})
```

watch a object child object

```sh
watch(()=>person.car,(newVal) => {
  console.log(newVal)
},{deep:true})
```

watch more

```sh
watch([()=>person.car,()=>person.name],(newVal) => {
  console.log(newVal)
},{deep:true})
```

watchEffect

```sh

```