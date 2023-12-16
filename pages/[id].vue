<template>
  <div class="px-5" style="padding-top: 100px;" >
    <h2>{{ ret.env.frontmatter.title }}</h2>
    <div v-html="ret.body">
    </div>
  </div>
 

</template>

<script setup>
  const route = useRoute()
  console.log(route.params.id) // { id: '123' }
  const { data: ret } = await useFetch('/api/le?id='+route.params.id)
  console.log(ret.value);
</script>