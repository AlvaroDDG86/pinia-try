<template>
    <h1>Component 2</h1>
    <div>
        {{ count }} - 
        {{ name }}
    </div>
</template>

<script setup lang="ts">
import { useStore } from '../store/cart';
import { storeToRefs } from 'pinia';

const store = useStore()

let { count, name } = storeToRefs(store)
</script>