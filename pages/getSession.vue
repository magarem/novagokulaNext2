<template>
    <h5 class="bread text-left pl-5"><a href="/">Home</a> / <a :href="'generic?type='+type">{{type}}</a></h5>
    <div class="pt-4 pb-4">
        <div class="pt-1" style="padding-left: 50px; padding-right: 50px;">
            <div class="row shadow-sm_ "  >
                <div  _class="pt-1" style="padding-left: 50px; padding-right: 50px;">
                    <div class="row shadow-sm_ " v-if="itens" >
                        <h4 class="_text-center mb-3 _pt-4">{{ id }}</h4>
                        <p> {{ meta.description }} </p>
                        <div class="col-md-3 mb-3" v-for="item1 in itens">
                            <Cardgrid target="templos" :item="item1" :type="type"/>
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

    const forceRerender = () => {
        componentKey.value += 1;
    };
  
    let componentFlag = ref(true)

//    let rr = ref(true)
    const route = useRoute()
    const id = route.query.id
   
    const { data: meta } = await useAsyncData('home', () => queryContent('/' + id + '/meta').findOne())

    const { data: data, refresh } = await useAsyncData('page-data', () => {
            return queryContent('/' + id).find()
    })

    data.value = data.value.filter(function( obj ) {
        return obj._path !== '/' + id + '/meta';
    });

    const itens = data.value
</script>
