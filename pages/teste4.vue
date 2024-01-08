<template>
    <div class="bg-dark  text-light m-0" style="height: 100%; margin-top: 100px;">
    <pre>
      {{ JSON.stringify(data, null, 2) }}
    </pre>
      
    </div>
    
</template>
<script setup>
definePageMeta({
  layout: ''
})
import { useGetContent } from '../composables/useGetContent.js'

const { data, error } = useGetContent('/eventos')
// console.log(JSON.stringify(data, null, 2));

</script>