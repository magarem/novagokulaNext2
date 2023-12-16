<template>
  <div class="px-5" style="padding-top: 100px;" >
    <h2>{{ ret.yml.title }}</h2>
    <div v-html="body">
    </div>
  </div>
 

</template>

<script setup>

  import MarkdownIt from "markdown-it";
  const markdown = new MarkdownIt();


  const route = useRoute()
  console.log(route.params.id) // { id: '123' }
  const { data: ret } = await useFetch('/api/le?id='+route.params.id)
  // console.log(ret.value);
  // console.log(matter(ret.value));
  const body = markdown.render(ret.value.content);

  
</script>