<template>
    <section class="pb-5 mx-0 px-0" style="padding-top: 0px; ">
        <Breadcrumbs />
        <div>
        <ShowContent  :refresh="refreshCount"/>
        </div>
        
    </section>
</template>
<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  /* background-color: #2196F3; */
  padding: 10px;
}
.grid-item {
  /* background-color: rgba(255, 255, 255, 0.8); */
  /* border: 1px solid rgba(0, 0, 0, 0.8); */
  /* margin: 5px; */
  max-width: 250px;
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
.imgSided {
    /* height: 280px;  */
    max-width: 300px;
    object-fit: cover;
    border-radius: 2%;
}
</style>
<script setup lang="ts">

import yaml from "js-yaml";
const route = useRoute()

let id = ref(route.params.id)
let type = ref(route.params.id.includes("_index")?'dir':'file')
let refreshCount = ref(0)
async function refreshDo(event) {
    // alert(event.data)
    refreshCount.value++
}

if (process.client) {
    if (window.parent){
        window.parent.postMessage({type: type.value, url: route.fullPath, id: id.value.replaceAll(':','/'), fileList: ''}, '/');
    }
    window.addEventListener("message", refreshDo, false);
}
</script>
