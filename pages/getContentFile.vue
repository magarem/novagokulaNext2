<template>
    <section class="pb-0">
        <h5 class="bread text-left" > 
            
            <router-link to="/">home</router-link> <span v-if="!id.split('/')[1].includes('.md')"> / <router-link :to="'/getContentDir?id=content/' + id.split('/')[1]">{{id.split('/')[1]}}</router-link></span>
            / {{data.title}}
            
            <!-- <span v-for="item in montaBradCrumbs(id)">
                <a :href="'/getContentDir?id='+item[1]">{{ item[0] }}</a> /
            </span> -->
    
    
    </h5>
       
        <img v-if="data.imgs" :src="data.imgs[0]" style="width: 100%;" class="img-fluid"/> 
        <div class="container">
            <div class="pt-1">
                <section>
                    <h4 class="pb-3 mt-3">{{data.title}}</h4>
                    <div class="container ">
                        <div v-if="data.textImg" class="row ">
                            <div class="col-12 col-md-4 text-end">
                                <img :src="data.textImg[0]" style="_float: left; max-width:100%;" _style="width: 100%; " class="mb-3 img-fluid"/>
                            </div>
                            <div class="col-12 col-md-8">
                                <ContentRenderer :value="data" />
                            </div>
                        </div>
                        <div v-else class="row">
                            <div class="col-12" >
                                <ContentRenderer :value="data" />
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
    // definePageMeta({
    //     layout: ''
    // })
    function splitLastOccurrence(str, substring) {
        const lastIndex = str.lastIndexOf(substring);
        const before = str.slice(0, lastIndex);
        const after = str.slice(lastIndex + 1);
        return [before, after];
    }

    const route = useRoute()
    let id = route.query.id
    console.log('id da session:', id);
    
    const _file = id
    const _dir = splitLastOccurrence(id,'/')[0]
    console.log("_file:", _file);
    console.log("_dir:", _dir);
    
    let path = id.replace('content','')
    path = path.replace('.md','')
    console.log('path:', path);
    
    const { data: data, refresh } = await useAsyncData('home', () => queryContent( path ).findOne())
    // console.log('data--->',data.value);

    async function refreshDo(val) {
        // console.log(val);
        
        // console.log("recebido na iframe");
        refresh()
    }

    function montaBradCrumbs(atual){
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

    if (process.client) {

        if (window.parent){
            // alert('client run script!')
            window.parent.postMessage({type: 'file', id: id}, '/');
        }
        window.addEventListener("message", refreshDo, false);

    }

</script>
