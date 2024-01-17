<template>
    <section class="pb-0" style="padding-top: 0px;">
        <h5 class="bread text-left" > 
            <!-- <router-link :to="item[0]" v-for="item in getBrad(id)">{{item[1]}} / </router-link> -->
            <router-link to="/" >
            Home
            </router-link>
            
            <router-link v-if="!id.split(':')[1].includes('.md')" :to="dirName.link" >
            / {{ capitalizeFirstLetter(dirName.label) }}
            </router-link>
            
            <router-link v-if="!id.includes(':_index.md')" :to="'/' + id.replaceAll(':', '/')" >
             / {{ capitalizeFirstLetter(getTitle(id).title) }}
            </router-link>
           
        </h5>
        <div v-for="item in data" >
            <img v-if="item.imgs" :src="item.imgs[0]" style="width: 100%;" class="img-fluid"/> 
            <div class="container">
                <div class="pt-1">
                    <section>
                        <h4 class="pb-3 mt-3">{{item.title}}</h4>
                        <div class="container ">
                            <div class="row">
                                <div v-if="item.textImg" class="col-12 col-md-4 text-end">
                                    <img :src="item.textImg[0]" style="_float: left; max-width:100%;" _style="width: 100%; " class="mb-3 img-fluid"/>
                                </div>
                                <div class="col-12" :class="item.textImg&&'col-md-8'">
                                    <div v-if="item.files">
                                            <draggable :disabled="!authenticated" v-model="ff" class="grid-container" item-key="id" >
                                                     <template  #item="{ element }">
                                                           <div class="grid-item"><Cardgrid :item="element"/></div>
                                                    </template>
                                            </draggable>
                                            <!-- <div class="col" v-for="i in getContentIndex(item.files)"> -->
                                                  <!-- <Cardgrid :item="i"/> -->
                                            <!-- <img :src="i.img[0]" style="width: 100px;"/>
                                            <NuxtLink :to="'/' + i._id ">{{ i._path }}</NuxtLink> -->
                                            <!-- </div> -->
                                           
                                    </div>
                                    <ContentRenderer v-if="item.body.children.length>0" :value="item" />
                                </div>
                            </div>
                        </div>
                    </section>   
                </div>
            </div>
        </div>
    </section>
</template>
<!-- <Cardgrid :item="element"/> -->

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
// const getTitle2 = (x) => {
//     return '[['+x+']]'
// }


import draggable from "vuedraggable";
import yaml from "js-yaml";
import { useAuthStore } from '~/store/auth';

const route = useRoute()
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive

// if (!authenticated) {
//   router.push('/login');
// }

let id = ref(route.params.id)
let type = ref('dir')
let fileList = ref([])
let ff = ref([])
let dirName = ref({})
if (!id.value.includes('_index.md')) type.value = 'file'

console.log('id:', id.value);
console.log('type', type.value);

const { data: datax, refresh } = await useFetch('/api/readDir')
console.log('datax:', datax.value);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
const getTitle = (id) => {
    console.log(datax.value?.find((x) => {
        console.log(x._id);
        console.log(id);
        
        if (x._id == id) return true
    }));
    
    return datax.value?.find((x) => x._id == id)
}

const getTitleOfDir = (dir) => {
    return datax.value?.find((x) => x._dir == dir)
}
// console.log(getTitle('content:templos:santuariodetulasi.md'));

const getBrad = (str) => {
    let aux = str.replaceAll(':','/').replace('content/','').replace('.md','')
    let arrayAux = aux.split('/')
    let ret = []
    if ( arrayAux.length ) ret.push(['/', 'home'])
    if ( arrayAux.length > 0 ) ret.push(['content' + ':' + arrayAux[0] + ':_index.md', getTitle('content' + ':' + arrayAux[0] + ':_index.md')])
    if ( arrayAux.length > 1 ) ret.push(['content' + ':' + arrayAux[0] + ':' + arrayAux[1] + ':_index.md', getTitle(arrayAux[1].replace('_index', ''))   ])
    return ret
}

watch(ff, (newValue) => {
   
       useFetch('/api/read?filename=' + id.value.replaceAll(':', '/')).then((dataRaw)=>{
            
            const auxProps = dataRaw.data.value.trim().split('---')[1].trim()
            const auxPropsYml = yaml.load(auxProps);
            const auxTxt = dataRaw.data.value.trim().split('---')[2].trim()
            
            auxPropsYml.files = newValue.map(i=>i.id)

            const aux2Content = "---\n"+JSON.stringify(auxPropsYml, null, 2)+"\n---\n" + auxTxt
            console.log(aux2Content);
           
            window.parent.postMessage({type: type.value, id: id.value, content: aux2Content, fileList: ''}, '/');
          
       }) 
})

const getContentIndex = (files) => {
    console.log('files:', files);
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
    const { data: data, refresh: refreshMain } = await useFetch('/api/readDir?id=' + id.value)
    console.log('data:', data.value);
    console.log('type.value:', type.value);
    dirName.value.label = id.value.split(':')[1]
    dirName.value.link = 'content:' + id.value.split(':')[1] + ':_index.md'
    if (type.value=='dir') ff.value = getContentIndex(data.value[0].files)






const getFilesYmlContent = async (fileArray: any) => {
    fileArray = Object.values(fileArray)
    let ret = []
    console.log('fileArray:', fileArray);
    fileArray.map(async (v: any)  =>  {
        console.log('v', v);
        
        const { data: data2, refresh: refresh2 } = await useAsyncData("file2_"+v, () => queryContent('/').where({_path: { $contains: v }}).find())
        console.log('data2:', data2.value);
        ret.push(data2.value)
    })
    console.log(ret);
    xtela.value = ret
}

async function refreshDo(event) {
    if (!event.data.id.includes(':home:')){
        if (event.data.op == 'redirect'){
            await navigateTo('/' + event.data.id)
        }
        refreshMain()
    }
}

if (process.client) {
    if (window.parent){
        window.parent.postMessage({type: type.value, id: id.value, fileList: ''}, '/');
    }
    window.addEventListener("message", refreshDo, false);
}


</script>
