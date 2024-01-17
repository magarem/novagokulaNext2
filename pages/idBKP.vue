<template>
    <section v-if="type=='dir'">
        <h5 class="bread text-left" > 
            <router-link to="/">home</router-link> / {{ id.replace('content:','') }}
        </h5>
            <div v-if="true" class="pt-4 pb-4">
                <div class="pt-1" style="padding-left: 50px; padding-right: 50px;">
                    <div class="row shadow-sm_ "  >
                        <div  _class="pt-1" style="padding-left: 50px; padding-right: 50px;">
                            <div class="row shadow-sm_" v-if="data" >
                                <h4 class="_text-center mb-3 _pt-4">{{ index.title }}</h4>
                                <p> {{ index.description }} </p>
                                <div class="col-md-3 mb-3" v-for="item1 in data">
                                    <Cardgrid target="templos" :item="item1" :type="id"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    <section v-else class="pb-0">
        <h5 class="bread text-left" > 
            <router-link :to="item[0]" v-for="item in getBrad(id)">{{item[1]}} / </router-link>
        </h5>
        <img v-if="data2.imgs" :src="data2.imgs[0]" style="width: 100%;" class="img-fluid"/> 
        <div class="container">
            <div class="pt-1">
                <section>
                    <h4 class="pb-3 mt-3">{{data2.title}}</h4>
                    <div class="container ">
                        <div v-if="data2.textImg" class="row ">
                            <div class="col-12 col-md-4 text-end">
                                <img :src="data2.textImg[0]" style="_float: left; max-width:100%;" _style="width: 100%; " class="mb-3 img-fluid"/>
                            </div>
                            <div class="col-12 col-md-8">
                                <ContentRenderer :value="data2" />
                            </div>
                        </div>
                        <div v-else class="row">
                            <div class="col-12" >
                                <ContentRenderer :value="data2" />
                            </div>
                        </div>
                    </div>
                </section>   
                <!-- <button @click="refresh">refresh</button> -->
            </div>
        </div>
    </section>
</template>
<style scoped>
    .bg {
        background-color: #E7B884;
    }
    img {
		/* height: 280px;  */
        max-width: 300px;
		object-fit: cover;
		border-radius: 2%;
	}
</style>
<script setup lang="ts">
const getBrad = (str) => {
    let aux = str.replaceAll(':','/').replace('content/','').replace('.md','')
    let arrayAux = aux.split('/')
    let ret = []
    if ( arrayAux.length ) ret.push(['/', 'home'])
    if ( arrayAux.length > 0 ) ret.push(['content' + ':' + arrayAux[0], arrayAux[0]])
    if ( arrayAux.length > 1 ) ret.push(['content' + ':' + arrayAux[0] + ':' + arrayAux[1], arrayAux[1]])
    return ret
}

const route = useRoute()
let id = route.params.id
let type = ref('dir')
const _file = id.replaceAll(':', '/').replace('content','')
const _index = _file + '/_index'
// Create a reactive state and set default value
let tela = useState('tela2', () => null)
let data2_ref = ref({})
let meta_ref = ref({})
if (id.includes('.md')) type.value = 'file'


console.log('_file:', _file);
console.log('_index:', _index);
console.log('type', type.value);

// Get the list dir files
    const { data: data, refresh } = await useFetch('/api/readDir?id=' + _file)
    console.log('data:', data.value);


    const { data: index, refresh: refreshIndex } = await useAsyncData("file2", () => queryContent(_index).findOne())
    console.log('index:', index.value);
// 

// Get the file content
let _file_cleanup = _file.replace('.md','');

console.log('cleanup:', id.replaceAll(':', '/').replace('content','').replace('.md',''));

    const { data: data2, refresh: refresh2 } = await useAsyncData("file", () => queryContent(data.value[0].path).findOne())
    console.log('data2:', data2.value);


async function refreshDo(event) {
    // document.getElementById('iframe').contentWindow.location = "/getContentFile?id=" + newname
    // alert(JSON.stringify(event.data,null,2))
    // alert(event.data.filename.replaceAll('/', ':'))
    if (!event.data.filename.includes('/home/')){
        if (event.data.op=='redirect') navigateTo('/'+event.data.filename.replaceAll('/', ':'))
        refreshIndex()
        refresh()
        refresh2()
    }
}

if (process.client) {
    if (window.parent){
        window.parent.postMessage({type: type.value , id: id, fileList: data.value.map((x: { id: any; })=>'content'+x.id)}, '/');
    }
    window.addEventListener("message", refreshDo, false);
}


</script>
