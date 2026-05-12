# pinia

install

```sh
bun add pinia
```


basic

```sh
import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useUserStore =  defineStore("user",()=>{
    const name = "jim"
    const age = ref(5)
    const bigAge = computed(()=> age.value*5)
    const increment = ()=>{
        age.value +=1
    }
    return {
        name,
        age,
        bigAge,
        increment
    }

})
```

