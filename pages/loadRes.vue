<template>
    <div v-if="contentType == 'file'">
        <h5 class="bread text-left pl-5"><a href="/">Home</a><a :href="'getItem?id='+id">{{id}}</a></h5>
        <div class="pt-4 pb-4">
            <div v-if="id" class="container" _style="padding-left: 50px; padding-right: 50px;">
                <section class="pt-0 products _section-padding ">
                    <div class="row mb-4">
                        <!-- {{item.title}} -->
                        <CardShow sessiontitle="Templos" :item="data" /> 
                    </div>
                </section>    
            </div>
        </div>
    </div>
    <div v-else class="pt-5">
        {{ contentType }}
        {{  itens }}
    </div>
</template>
<style scoped>
.bg {
    background-color: #E7B884;
 }

</style>
<script setup lang="ts">
    definePageMeta({
        layout: ''
    })

    const route = useRoute()

    const id = route.query.id
    let contentType = ref("")
   
    if (id?.includes('.md')){
        contentType.value = 'file'
        const { data: data, refresh } = await useAsyncData('home', () => queryContent( id  ).findOne())
        console.log(data);
    }else{
        
        contentType.value = 'dir'
        const { data: meta, refresh: reloadMeta } = await useAsyncData('home', () => queryContent('/' + id + '/meta').findOne())

        const { data: data, refresh: reloadData  } = await useAsyncData('page-data', () => {
            return queryContent('/' + id).find()
        })
        data.value = data.value.filter(function( obj ) {
            return obj._path !== '/' + id + '/meta';
        });
        console.log("dir!", data.value[0]);
        const itens = data.value
    }
    

    async function refreshDo() {
        console.log("recebido na iframe");
        
        if (contentType.value == 'file'){
            refresh()
        }else{
            reloadMeta()
        }
        
        
        // forceRerender()
        // componentFlag.value = true
        // componentFlag.value = true
        // rr.value=2
        // refreshComponent()
    }

    if (process.client) {

        if (window.parent){
            // alert('client run script!')
            window.parent.postMessage({"pageid": id}, '/');
        }
        window.addEventListener("message", refreshDo, false);

    }

</script>
