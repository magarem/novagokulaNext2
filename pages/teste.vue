<template>
 <div class="p-5 m-5">
  <pre>
    {{ Object.entries(obj.params_schema) }}
  </pre>
  
 </div>
</template>

<script setup>
definePageMeta({
        layout: 'default'
    })
import obj from './teste.json'
console.log(Object.entries(obj.params_schema));
// for (const [key, value] of Object.entries(obj.params_schema)) {
//   console.log(`${key}: ${JSON.stringify(value)}`);
// }
 
    // obj.params_schema.map(x=>{
    //   console.log(x);
    // })
</script>
