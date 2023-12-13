<template>
  <div class="p-5">
    {{ appConfig }}
  </div>
    
</template>
  
<script setup>
const appConfig = useAppConfig()

console.log(appConfig.theme.primaryColor)
</script>
  