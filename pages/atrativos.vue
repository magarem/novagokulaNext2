<template>
    <div class="container pt-5">
        <h5>Atrativos</h5>
        <section v-if="id" class="pt-0 products _section-padding">
            <div class="container">
                <div class="row">
                    <CardShow sessiontitle="Atrativos" :items="atrativos" :id="id" /> 
                </div>
            </div>
        </section>
    </div>
    <div class="container align-items-md-stretch mb-4">
        <div class="col-md-12">
        <div class="h-100 p-4 bg-light border rounded-3">
            <!-- <h5>Opções</h5> -->
            <!-- <div class="row"> -->
            <div class="row">
                <div class="col-md-4 mb-4" v-for="item in atrativos">
                <Cardgrid target="atrativos" :item="item" />
                </div>
            </div>
            <!-- </div> -->
        </div>
        </div>
    </div>
</template>
<script setup>
    import atrativos from '../data/atrativos.json'
    const route = useRoute()
    const id = route.query.id
    console.log(11, id)
</script>
