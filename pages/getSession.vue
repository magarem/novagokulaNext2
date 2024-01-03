<template>
    <h5 class="bread text-left pl-5"><a href="/">Home</a> / <a :href="'generic?type='+id">{{id}}</a></h5>
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
    // definePageMeta({
    //     layout: ''
    // })
    const componentKey = ref(0);
    const page = ref(1)
    const refreshing = ref(false)
    const refreshAll = async () => {
        refreshing.value = true
        try {
            console.log("refrsh!");
            
            await refreshNuxtData('data')
        } finally {
            refreshing.value = false
        }
    }
   
    const route = useRoute()
    let id = route.query.id.replace('meta.md/meta.md','meta.md')
     id = id.replace('content/','')
   
    console.log('id da session:', id);
    
    const { data: meta, refresh } = await useAsyncData('meta', () => queryContent('/' + id + '/meta').findOne())

    // const { data: data, refresh: refreshList } = await useAsyncData('data', () => {
    //         return queryContent('/' + id).find()
    // } )
    const { data: data } = await useFetch('/api/lecontentdir?id='+id)

    console.log('data ret:', data.value);

    data.value = data.value.filter(function( obj ) {
        return obj._path !== '/' + id + '/meta';
    });

    const itens = data.value
    

    const reload = () => {
        console.log("chamou refresh");
        console.log(meta);
        
        refresh()
    }

    if (process.client) {
        if (window.parent){
            // alert('client run script!')
            window.parent.postMessage({"sessionid": id}, '/');
        }
        window.addEventListener("message", reload, false);

    }

</script>
