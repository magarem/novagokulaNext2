<template>
    <section v-if="!id.includes('.md')">
        <h5 class="bread text-left" > 
            <router-link to="/">home</router-link> / {{ id.replace('content:','') }}
        </h5>
            <div v-if="true" class="pt-4 pb-4">
                <div class="pt-1" style="padding-left: 50px; padding-right: 50px;">
                    <div class="row shadow-sm_ "  >
                        <div  _class="pt-1" style="padding-left: 50px; padding-right: 50px;">
                            <div class="row shadow-sm_" v-if="data" >
                                <h4 class="_text-center mb-3 _pt-4">{{ meta.title }}</h4>
                                <p> {{ meta.description }} </p>
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
        <img v-if="data.imgs" :src="data[0].imgs[0]" style="width: 100%;" class="img-fluid"/> 
        <div class="container">
            <div class="pt-1">
                <section>
                    <h4 class="pb-3 mt-3">{{data[0].title}}</h4>
                    <div class="container ">
                        <div v-if="data[0].textImg" class="row ">
                            <div class="col-12 col-md-4 text-end">
                                <img :src="data[0].textImg[0]" style="_float: left; max-width:100%;" _style="width: 100%; " class="mb-3 img-fluid"/>
                            </div>
                            <div class="col-12 col-md-8">
                                <ContentRenderer :value="data2[0]" />
                            </div>
                        </div>
                        <div v-else class="row">
                            <div class="col-12" >
                                <ContentRenderer :value="data2[0]" />
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
</style>
<script setup lang="ts">

    const getBrad = (str) => {
        let aux = str.replaceAll(':','/').replace('content/','').replace('.md','')
        let arrayAux = aux.split('/')
        // arrayAux.map(x=>{

        // })
        let ret = []
        if ( arrayAux.length ) ret.push(['/', 'home'])
        if ( arrayAux.length > 0 ) ret.push(['content' + ':' + arrayAux[0], arrayAux[0]])
        if ( arrayAux.length > 1 ) ret.push(['content' + ':' + arrayAux[0] + ':' + arrayAux[1], arrayAux[1]])
        return ret
    }

    const getSubStr = (str, charInit, charEnd) => {
        var mySubString = str.substring(
            str.indexOf(charInit) + 1, 
            str.lastIndexOf(charEnd)
        );
        return mySubString
    }

    function montaBradCrumbs(atual){
        atual = atual.replaceAll(':','/')
        atual = atual.replace('content', '')
        let x
        let arr_final = []
        let x1 = atual.split('/').reverse()
        for (let t=0; t<x1.length; t++){
            x = atual.lastIndexOf('/')
            atual = atual.substring(0, x);
            arr_final.push([x1[t].replaceAll('/',':'), atual+'/'+x1[t]])
        }
        return arr_final.reverse()
    }

    const getBreadCrumbs = (str) => {
        let aux1, last
        aux1 = str.replaceAll(':','/')
        aux1 = aux1.replace('content/','')
        last = aux1.split('/')[length]
        // aux1 = getSubStr(aux1, '-', '.md')
        return last
    }
    
    function _montaBradCrumbs(atual){
        atual = atual.replace('content', '')
        let x
        let arr_final = []
        let x1 = atual.split('/').reverse()
        for (let t=0; t<x1.length; t++){
            x = atual.lastIndexOf('/')
            atual = atual.substring(0, x);
            arr_final.push([x1[t], atual+'/'+x1[t]])
        }
        return arr_final.reverse()
    }

    const route = useRoute()
    let id = route.params.id
    let _meta = ref([])
    const _file = id.replaceAll(':', '/').replace('content','')
    const _index = _file + '/_index'
    const { data: data, refresh } = await useFetch('/api/readDir?id=' + _file)
    const { data: data2, refresh: refresh2 } = await useAsyncData('data1', () => queryContent(data.value[0].path).find())
    
   
    console.log('_index', _index);
    
    const { data: meta, refresh: meta_refresh } = await useAsyncData('meta', () => queryContent(_index).findOne())
    // _meta.value = [...meta.value[0]]
    // console.log(meta.value?.title);

    async function refreshDo(val) {
       refresh()
       refresh2()
       meta_refresh()
    }

    if (process.client) {
        if (window.parent){
            window.parent.postMessage({type: 'file', id: id}, '/');
        }
        window.addEventListener("message", refreshDo, false);
    }

</script>
