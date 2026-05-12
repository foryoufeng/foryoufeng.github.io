# pinia

install

```sh
bun add pinia
```

add to project

```sh
import {createPinia} from "pinia";

const pinia = createPinia()
app.use(pinia)
```

basic use

```sh
import {defineStore} from "pinia";

export const useCountStore = defineStore('count',{
    state(){
        return {
            count:0,
        }
    },
    actions:{
        increment(value:number){
            if(value<10){
                this.count+=value
            }
        }
    },
    getters:{
        bigSum(state){
            return state.count*10
        }
    }
})


import {useCountStore} from "./store/count.ts";

const countStore =  useCountStore()

function add(){
  countStore.increment(n.value)
}
countStore.$subscribe((mutation, state)=>{
  console.log(mutation)
  console.log(state.count)
})

```

