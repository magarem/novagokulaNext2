<!-- components/content/Card.vue -->
<script setup>
import draggable from "vuedraggable";

defineProps(['tipo', 'showimage'])
let ff = ref([])
let auxTxt = ref()
let auxProps = ref()
const state = useCookie('state')
console.log('state:', state.value.id);
const getContentIndex = (files) => {
    console.log('files22:', files);
    var rs = []
    let a 
    files.map(x=>{
        a = datax.value.filter(function (el) {
            return el._id == x
        })
        if (a.length>0) rs.push(a) 
        
    })
    return rs.map(c=>({id: c[0]._id, img: c[0].textImg, title: c[0].title, _path: c[0]._path }))
}
  
const { data: datax, refresh } = await useFetch('/api/readDir')
useFetch('/api/read?filename=' + state.value.id.replaceAll(':','/')).then((dataRaw)=>{
    auxProps.value = JSON.parse(dataRaw.data.value.trim().split('---')[1].trim())
    console.log(22221, auxProps.value.files)
    auxTxt.value = dataRaw.data.value.trim().split('---')[2].trim()
    ff.value = getContentIndex(auxProps.value.files)
    console.log(1111, ff.value)
}) 

if (process.client){

 watch(ff, (newValue) => {
    auxProps.value.files = ff.value.map(x=>x.id)
    const aux2Content = "---\n"+JSON.stringify(auxProps.value, null, 2)+"\n---\n" + auxTxt.value
    window.parent.postMessage({type: 'file', id: state.value.id, content: aux2Content, fileList: ''}, '/');
})   
}


</script>
<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  /* background-color: #2196F3; */
  padding: 10px;
}
.grid-container1 {
  /* display: grid; */
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
<template>
    <div _class="p-2 border bg-dark text-light dark:bg-black dark:border-gray-700 rounded">
        <draggable v-model="ff" :class="tipo==0?'grid-container':'grid-container1'" item-key="id" >
          <template v-if="tipo==0" #item="{ element }">
              <div v-if="!element.id.includes('_index')" class="grid-item"><Cardgrid  :item="element"/></div>
          </template>
          <template v-if="tipo==1" #item="{ element }">
            <div v-if="element" _class="card border-3 shadow-none rounded-3" style="width: 100%; border-radius: 20%;">
                <NuxtLink :to="'/masterpage/' + element.id" >
                    <div class="row mb-3">
                        <div class="col-2" v-if="showimage">
                            <img v-if="element.img" style="width: 80px;" _class="card-img card-img-top text-center" :src="(element.img.charAt(0)=='/')?element.img:'/'+element.img" alt="Card image cap"/>
                            <img v-if="element.textImg" _class="card-img card-img-top" :src="(element.textImg.charAt(0)=='/')?element.textImg:'/'+element.textImg" alt="Card image cap"/>
                        </div>
                        <div :class="showimage?'col-10':'col-12'"><h3>:: {{element.title}}</h3>
                            <p class="card-text">{{element.desc}}</p>
                        </div>
                    </div>
                      
                </NuxtLink>
                
                <h5 class="card-title text-center">
                    <!-- <NuxtLink :to="'/' + element.id" style="color: rgb(45, 15, 15);" > -->
                    <!-- {{element.title}} -->
                    <!-- </NuxtLink> -->
                </h5>
                
            </div>
          </template>
        </draggable>
      
    </div>
  </template>