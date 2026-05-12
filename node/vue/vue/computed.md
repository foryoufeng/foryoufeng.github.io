# computed

basic

```sh
<script setup lang="ts">
import {computed, ref} from "vue";

let name = ref("jim")
let lastName = ref("bob")
let fullName = computed(() => {
  return name.value.slice(0,1).toUpperCase()+name.value.slice(1) +" "+ lastName.value
})
</script>
<template>
  <div>
    <div>
      name:<input type="text" v-model="name">
    </div>
    <div>
      lastName:<input type="text" v-model="lastName">
    </div>
    <p>
      {{fullName}}
    </p>
  </div>
</template>
```

setter and getter


```sh
<script setup lang="ts">
import {computed, ref} from "vue";

let name = ref("jim")
let lastName = ref("bob")
let fullName = computed({
  get(){
    return name.value.slice(0,1).toUpperCase()+name.value.slice(1) +" "+ lastName.value
  },
  set(val){
    name.value = "jim"
    const [name1,lastName1]=val.split("-")
    lastName.value=lastName1 as string
    name.value=name1 as string
  }
})
function changeName() {
  fullName.value = "li-si"
}
</script>
<template>
  <div>
    <div>
      name:<input type="text" v-model="name">
    </div>
    <div>
      lastName:<input type="text" v-model="lastName">
    </div>
    <p>
      {{fullName}}
    </p>
    <p>
      <button @click="changeName" type="button">change name</button>
    </p>
  </div>
</template>

```