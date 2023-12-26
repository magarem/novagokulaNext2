<template>
    <div v-if="type=='dir'">
        <h5 class="bread text-left pl-5"><a href="/">Home</a> / <a :href="'generic?type='+id">{{id}}</a></h5>
        <div class="pt-4 pb-4">
            <div class="pt-1" style="padding-left: 50px; padding-right: 50px;">
                <div class="row shadow-sm_ "  >
                    <div  _class="pt-1" style="padding-left: 50px; padding-right: 50px;">
                        <div class="row shadow-sm_ " v-if="itens" >
                            <h4 class="_text-center mb-3 _pt-4">{{ meta.title }}</h4>
                            <p> {{ meta }} </p>
                            <div class="col-md-3 mb-3" v-for="item1 in itens">
                                <Cardgrid target="templos" :item="item1" :type="type"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button :disabled="refreshing" @click="refreshAll">
        Refetch All Data
        </button>
        </div>
    </div>
    <div v-else>
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

    const refreshing = ref(false)
    const type = ref('dir')
    const refreshAll = async () => {
    refreshing.value = true
    try {
        await refreshNuxtData()
    } finally {
        refreshing.value = false
    }
    }
   
    const route = useRoute()
    const id = route.query.id
   
    if (true) {
        const { data: meta, refresh } = await useAsyncData('home', () => queryContent('/' + id + '/meta').findOne())
        const { data: data } = await useAsyncData('page-data', () => {
                return queryContent('/' + id).find()
        })
        data.value = data.value.filter(function( obj ) {
            return obj._path !== '/' + id + '/meta';
        });
        const itens = data.value
    }
   



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
