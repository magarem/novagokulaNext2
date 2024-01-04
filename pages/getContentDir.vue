<template>
    <h5 class="bread text-left" > <span v-for="item in montaBradCrumbs(id)">
            <a :href="'/getContentDir?id='+item[1]">{{ item[0] }}</a> /
        </span></h5>
        <div v-if="meta" class="pt-4 pb-4">
        <div class="pt-1" style="padding-left: 50px; padding-right: 50px;">
            <div class="row shadow-sm_ "  >
                <div  _class="pt-1" style="padding-left: 50px; padding-right: 50px;">
                    <div class="row shadow-sm_ " v-if="itens" >
                        <h4 class="_text-center mb-3 _pt-4">{{ meta.title }}</h4>
                        <p> {{ meta.description }} </p>
                        <div class="col-md-3 mb-3" v-for="item1 in itens">
                            <Cardgrid target="templos" :item="item1" :type="id"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.bg {
    background-color: #E7B884;
 }

</style>
<script setup lang="ts">
   
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
   
    const route = useRoute()
    let id = route.query.id
    console.log('id da session:', id);
    
    id = id.replace('/_index.md', '')
    const _dir = id
    const _index = _dir + '/_index.md'
    const _index_cleaned = _index.replace('content','').replace('.md','')

    console.log('_dir', _dir);
    console.log('_index', _index);
    console.log('_index_cleaned', _index_cleaned);

    let dirToScan = id.replace('content','')
    dirToScan = dirToScan.replace('/_index.md','')
    console.log('dirToScan::', dirToScan);
    console.log(dirToScan + '/_index')
    const { data: meta, refresh } = await useAsyncData('meta', () => queryContent(_index_cleaned).findOne())
    const { data: data } = await useFetch('/api/readDir?id=' + _dir)

    // console.log('data ret:', data.value);

    // data.value = data.value.filter(function( obj ) {
    //     return obj._path !== '/' + id + '/meta';
    // });

    const itens = data.value
    
    // console.log('meta ret:', meta.value);

    const reload = () => {
        // console.log("chamou refresh");
        // console.log(meta);
        refresh()
    }

    if (process.client) {
        if (window.parent){
            // console.log('getContentDir - emitindo uma mensagem', id);
            
            window.parent.postMessage({type: 'dir', id: id}, '/');
        }
        window.addEventListener("message", reload, false);

    }

</script>
