<script setup lang="ts">
 definePageMeta({
        layout: ''
    })
const { data: ret } = await useFetch('/api/list')
console.log(ret.value);
let editedTxt = ref()
let contentToSave = ref("zero")
const showContent = () => {
  contentToSave.value = editedTxt.value
  // console.log(editedTxt.value);
  
  // contentToSave.value = "asfasdsadsadsadsadasd"
}



</script>

<template>
  <div style="height: 400px; padding-top: 200px; background-color: white; color: darkblue;">
    <div>{{ contentToSave }}</div>
    <textarea id="insert1" v-model="editedTxt" style="width: 400px; height: 200px;">teste</textarea>
    <!-- <img :src="'/img/'+ret[0]"> -->
    
    <button @click="showContent">Save</button>
  </div>
  
</template>