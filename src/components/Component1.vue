<template>
    <h1>Component 1 <span v-show="loading">is loading...</span></h1>
    <div>Hello from cart {{ count }} ({{ store.getTimes }})</div>
    <div>{{ name }}</div>
    <div class="btn-content">
        <ButtonVue @click="changeCount">Increment</ButtonVue>
        <ButtonVue @click="incrementAndChange">Change Two</ButtonVue>
        <ButtonVue @click="store.random()">Random</ButtonVue>
        <ButtonVue @click="store.$reset">Reset</ButtonVue>
    </div>
    <div>
        {{ store.whoClicked }}
    </div>
</template>
<script setup lang="ts">
import ButtonVue from './Button.vue';
import { useStore } from '../store/cart';
import { storeToRefs } from 'pinia';
const store = useStore()

let { count, name, loading } = storeToRefs(store)

function changeCount () {
    count.value++
}

function incrementAndChange () {
    store.$patch({
        count: count.value + 1,
        name: name.value === 'Alvaro' ? 'Jonh' : 'Alvaro'
    })
}

store.$subscribe((mutation, state) => {
    // console.log('type', mutation.type)
    // console.log('storeId', mutation.storeId)
    // console.log(mutation)
    // console.log(state)
})

store.$onAction((params) => {
    console.log('Params', params)
})

</script>

<style scoped>
.btn-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
}


</style>