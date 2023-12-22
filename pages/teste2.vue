<template>
    {{ x }}
    <button @click="say('teste1')">Say hello</button>
    <button @click="say('teste2')">Say bye</button>
</template>
<script setup>

    definePageMeta({
        layout: ''
    })

    let x = ref("waiting")
    // let x
    function say(message) {
       x.value = message
       console.log(x);
    }

</script>