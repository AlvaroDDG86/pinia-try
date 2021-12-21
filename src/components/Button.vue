<template>
    <button class="btn" v-on="$listeners">
        <slot></slot>
    </button>
</template>
<style scoped>
.btn {
    padding: 15px 20px;
    background-color: #41b883;
    color: white;
    box-sizing: border-box;
    border: none;
    cursor: pointer;
    font-size: 1.1em;
    transition: 0.4s;
    border-radius: 7px;
    border: solid 1px transparent;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.432);
}

.btn:hover {
    background-color: white;
    color: #35495E;
    border: solid 1px #35495E;
    border: solid 1px #35495E;
}
</style>