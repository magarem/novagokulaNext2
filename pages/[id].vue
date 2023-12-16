<template>
    <div style="padding-top: 200px;" v-html="ret">
    </div>
    
  </template>
  
  <script setup>
//   import * as matter from 'gray-matter';
  const route = useRoute()
  console.log(route.params.id) // { id: '123' }
  // const { data: ret } = await useFetch('/api/le?id='+route.params.id)
  const { data: ret } = await useFetch('https://novagokula.com.br/teste/' + route.params.id + '.md')
  
  console.log(ret.value);

//   const { data: ret2 } = await useAsyncData('home', () => queryContent(ret).findOne())

//   console.log(matter(ret.value));
  </script>