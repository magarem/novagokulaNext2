<template>
    <h5 class="bread text-left pl-5"><a href="/">Home</a> / <a :href="'generic?type='+type">{{type}}</a></h5>
    <div class="pt-4 pb-4">
        <div v-if="id" class="container" _style="padding-left: 50px; padding-right: 50px;">
            <section class="pt-0 products _section-padding ">
                <div  class="row mb-4">
                    <CardShow sessiontitle="Templos" :item="item" /> 
                </div>
            </section>    
        </div>
        <div v-else _class="pt-1" style="padding-left: 50px; padding-right: 50px;">
            <div class="row shadow-sm_ " v-if="itens" >
                <h5 class="_text-center mb-3 pt-4" v-if="id">Opções</h5>
                <h4 class="_text-center mb-3 _pt-4" v-else>{{ type }}</h4>
                <div class="col-md-3 mb-3" v-for="item1 in itens">
                    <Cardgrid target="templos" :item="item1" :type="type"/>
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

    definePageMeta({
        layout: 'default'
    })

    const route = useRoute()
    const id = route.query.id
    const type = route.query.type
    
    console.log(11, id)
    let hasLoaded = false

    const { data: meta } = await useAsyncData('home', () => queryContent('/' + type + '/meta').findOne())
  
    console.log('meta:', meta.value);
    
    const { data: data } = await useAsyncData('page-data', () => {
            return queryContent('/' + type).find()
        }
    )

    data.value = data.value.filter(function( obj ) {
        return obj._path !== '/' + type + '/meta';
    });

    // console.log('data:', data.value);
    

    const itens = data.value
    hasLoaded = true
                 
    const item = data.value.filter( x => 
    x._path == id
    )[0];

    console.log('id-->', item);
                
</script>
