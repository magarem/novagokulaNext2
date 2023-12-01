<template>
    <div class="container pt-5 "  >
        <h4>Templos</h4>
        <section class="pt-0 products _section-padding ">
            <div v-if="id" class="row mb-4">
                <CardShow sessiontitle="Templos" :item="item" /> 
            </div>
        </section>    
    </div>
    <div class="container align-items-md-stretch mb-4 mt-5">
        <div class="col-md-12">
        <div class="h-100 p-4 bg-light border rounded-3">
            <!-- <h5>Opções</h5> -->
            <!-- <div class="row"> -->
            <div class="row" v-if="itens">
                <div class="col-md-4 mb-4" v-for="item in itens">
                <Cardgrid target="templos" :item="item" />
                </div>
            </div>
            <!-- </div> -->
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
        layout: 'default2'
    })

    const route = useRoute()
    const id = route.query.id
   
    console.log(11, id)
    let hasLoaded = false
  
    const { data } = await useAsyncData('page-data', () => {
            return queryContent('/templos').find()
        }
    )

    const itens = data.value
    hasLoaded = true
                 

    const item = data.value.filter( x => 
    x._path == id
    )[0];

    console.log('id-->', item);
                
</script>
