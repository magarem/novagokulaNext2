<template>
    <div class="bg">
    <div class="container pt-5 mt-5 ">
        <h3 class="text-center pb-3">Atrativos</h3>
        <section class="pt-0 products _section-padding">
            <div class="container">
                <div v-if="id" class="row mb-4">
                    <CardShow sessiontitle="Atrativos" :item="data[index]" /> 
                </div>
                <div class="row">
                    <div class="col-md-4 mb-4" v-for="item in data">
                        <Cardgrid target="atrativos" :item="item" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
</template>
<style scoped>
 .bg {
    background-color: #E7B884;
 }
</style>
<script setup>
    definePageMeta({
        layout: 'default2'
    })
    let index 
    import data from '../data/atrativos.json'
    const route = useRoute()
    let id = route.query.id
    // if (!id) {id = data.length-1}
    index = data.findIndex(x=>x.id==(id||1))
    console.log(11, id, index)
</script>