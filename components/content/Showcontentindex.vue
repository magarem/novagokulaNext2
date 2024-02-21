<template>
    <!-- <div class="_container-fluid"> -->
        <div class="row">
            <div  :class="auxProps.params_data.sideimage?'col-md-8':'col-12'" >
                <div class="_text-center">
                    <!-- <div >
                        <p>Window Width: {{ windowWidth }}</p>
                        <p>Window Height: {{ windowHeight }}</p>
                    </div> -->
                    <draggable _class="text-center" v-model="files" :_class="tipo==0?'grid-container':'grid-container1'" item-key="id" >
                    <!-- <template v-if="tipo==0" #item="{ element }" class="text-center">
                        <div v-if="!element.id.includes('_index')" class="grid-item text-center"><Cardgrid class="text-center" :item="element"/></div>
                    </template> -->
                    <template v-if="tipo==0" #item="{ element }">
                        <div v-if="element" _class="card border-3 shadow-none rounded-3" style="width: 100%; border-radius: 20%;">
                            <NuxtLink :to="'/masterpage/' + element.id" >
                                <div v-if="element.sideimage" class="row mb-3">
                                    <div class="col-3">
                                        <img v-if="element.topimage" style="width: 80px;" _class="card-img card-img-top text-center" :src="element.topimage" alt="Card image cap"/>
                                        <img v-if="element.sideimage" class="rounded" _class="card-img card-img-top" :src="element.sideimage" alt="Card image cap" style="width: 100%;"/>
                                    </div>
                                    <div class="col-9">
                                        <h3>{{element.title}}</h3>
                                        <p class="card-text">{{element.description}}</p>
                                        <button class="btn btn-success">Saiba mais</button>
                                    </div>
                                </div>
                                <div v-else class="row mb-4">
                                    <div class="col-12"><h3>{{element.title}}</h3>
                                        <p class="card-text"><cite>{{element.description}}</cite></p>
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </template>
                    <template v-if="tipo==1" #item="{ element }">
                        <div v-if="element" _class="card border-3 shadow-none rounded-3" style="width: 100%; border-radius: 20%;">
                            <NuxtLink :to="'/masterpage/' + element.id" >
                                <div class="row mb-3">
                                    <div class="col-2">
                                        <!-- <img v-if="element.params_data.topimage" style="width: 80px;" _class="card-img card-img-top text-center" :src="(element.params_data.topimage.charAt(0)=='/')?element.params_data.topimage:'/'+element.params_data.topimage" alt="Card image cap"/> -->
                                        <img v-if="element.params_data?.sideimage" _class="card-img card-img-top" :src="(element.params_data.sideimage.charAt(0)=='/')?element.params_data.sideimage:'/'+element.params_data.sideimage" alt="Card image cap"/>
                                    </div>
                                    <div :class="showimage?'col-10':'col-12'"><h3>:: {{element.title}}</h3>
                                        <p class="card-text">{{element.desc}}</p>
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </template>
                    </draggable>
                </div>
            </div>
        </div>
    <!-- </div> -->
</template>
<script setup>
import draggable from "vuedraggable";
import yaml from "js-yaml";
const props = defineProps(['id', 'showimage', 'tipo', 'limit'])

let files = ref([])
let auxTxt = ref()
let auxProps = ref()
const tipo = ref(0)
const route = useRoute()
const id = route.params.id||props.id

console.log('idid:', id);

let windowWidth = ref()
let windowHeight = ref()
       
        function handleResize(){
            // if (process.client){
                // alert(window.innerWidth)
            windowWidth.value = window.innerWidth
            windowHeight.value = window.innerHeight
            // }
            
        }
onMounted(() => {
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})
// const listaFiles = computed(() => {
//   console.log('auxProps.value.limit:', auxProps.value.limit);
//   return files.value.slice(0, auxProps.value.limit||3)
// })
const getContentIndex = (files) => {
    var rs = []
    files.map(x=>{
        let a = datax.value.filter(function (el) {
            return el._id == x
        })
        if (a.length>0) {
            rs.push({
            id: a[0]._id, 
            topimage: a[0].params_data?.topimage, 
            description: a[0].params_data?.description, 
            sideimage: a[0].params_data?.sideimage, 
            title: a[0].params_data?.title, 
            _path: a[0]._path })
        }
    })
    return rs //.map(item=>({id: item[0]._id, topimage: item[0].topimage, sideimage: item[0].sideimage, title: item[0].title, _path: item[0]._path }))
}
 
const { data: datax, refresh } = await useFetch('/api/readDir')

console.log('datax:', datax.value);
// Function to test string
function testJSON(text) {
    if (typeof text !== "string") {
        return false;
    }
    try {
        JSON.parse(text);
        return true;
    } catch (error) {
        return false;
    }
}

// onMounted(() => {
    const { data: dataRaw } = await useFetch('/api/read', {
        query: { filename: id.replaceAll(':','/') }
    })

    console.log('dataRaw', dataRaw.value);
    // useFetch('/api/read?filename=' + id.replaceAll(':','/')).then((dataRaw)=>{
       
        let aux1 = dataRaw.value.trim().split('---')[1]
        

        if (testJSON(aux1)){
            auxProps.value = JSON.parse(dataRaw.value.trim().split('---')[1].trim())
        }else{
            auxProps.value = yaml.load(dataRaw.value.trim().split('---')[1].trim())
        }
        console.log('auxProps.value', auxProps.value);
       
        tipo.value = auxProps.value.params_data.tipo
        // console.log('auxProps.value:', auxProps.value);
        // console.log('auxProps.value.files:', auxProps.value.files);
        auxTxt.value = dataRaw.value.trim().split('---')[2].trim()
        files.value = getContentIndex(auxProps.value.params_data.files.split('\n')).splice(0, auxProps.value.params_data.limit)
        console.log('auxTxt.value:', auxTxt.value);
    // })
// })
 

if (process.client){
    watch(files, async (newValue) => {
      
        console.log('!watch!');
        auxProps.value.params_data.files = files.value.map(x=>x.id).join('\n')
        console.log('8files:', auxProps.value.params_data.files);
        // window.parent.postMessage({type: 'file', command: 'save', id: id.replaceAll(':', '/'), content: aux2Content, fileList: ''}, '/');
        
        // const { data: fileData } = await useFetch('/api/read?filename=' + id.replaceAll(':', '/'))
        // let txt = fileData.value
        // let params = txt.split('---')[1]
        // let aux1 = yaml.load(params)
        // console.log('aux1:', aux1);
        // aux1.params_data = auxProps.value
       
       
       
        let aux2 = yaml.dump(auxProps.value)
        console.log('aux2:>>', aux2);
        const aux2Content = "---\n"+aux2+"\n---\n" + auxTxt.value
        console.log('aux2Content:', aux2Content);
        try {
            const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({filename: id.replaceAll(':', '/'), txt: aux2Content})
        }
            const response = await fetch('/api/save', config)
    
        } 
        catch (error) {
            console.log("save api error");
        }
    })   
}


</script>
<style scoped>
 @media only screen 
  and (min-width: 200px) 
  and (max-width: 650px){
.grid-container {
        display: grid;
        /* grid-template-columns: auto auto auto; */
        grid-template-areas: "1";
        grid-auto-columns: auto;
        /* background-color: #2196F3; */
        /* padding: 10px; */
    }
  }

 @media only screen 
  and (min-width: 650px) 
  and (max-width: 900px){
.grid-container {
        display: grid;
        /* grid-template-columns: auto auto auto; */
        grid-template-areas: "1 2";
        grid-auto-columns: auto;
        /* background-color: #2196F3; */
        /* padding: 10px; */
    }
  }

 @media only screen 
  and (min-width:900px) 
  and (max-width: 1200px){
.grid-container {
        display: grid;
        /* grid-template-columns: auto auto auto; */
        grid-template-areas: "1 2 3";
        grid-auto-columns: auto;
        /* background-color: #2196F3; */
        /* padding: 10px; */
    }
  }

 @media only screen 
  and (min-width:1200px) {
.grid-container {
        display: grid;
        /* grid-template-columns: auto auto auto; */
        grid-template-areas: "1 2";
        /* grid-template-areas: auto; */
        grid-auto-columns: auto;
        /* background-color: #2196F3; */
        /* padding: 10px; */
        /* gap: 1rem; */
    }
  }


.grid-container1 {
  /* display: grid; */
  grid-template-columns: auto auto auto;
  /* background-color: #2196F3; */
  /* padding: 10px; */
}
.grid-item {
  /* background-color: rgba(255, 255, 255, 0.8); */
  /* border: 1px solid rgba(0, 0, 0, 0.8); */
  /* margin: 5px; */
  _max-width: 250px;
  /* padding: 20px; */
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
