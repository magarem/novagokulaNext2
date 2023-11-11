<template>
    <div class="container pt-5">
        <h5>Eventos</h5>
        <section class="pt-0 products _section-padding">
            <div class="container">
                <div class="row">
                    <CardShow sessiontitle="Eventos" :items="eventos" :id="id" /> 
                </div>
            </div>
        </section>
    </div>
    <div class="container align-items-md-stretch mb-4">
        <div class="col-md-12">
        <div class="h-100 p-4 bg-light border rounded-3">
            <h5>Eventos</h5>
            <!-- <div class="row"> -->
            <div class="row">
                <div class="col-md-4 mb-4" v-for="item in eventos">
                <Cardgrid target="eventos" :item="item" />
                </div>
            </div>
            <!-- </div> -->
        </div>
        </div>
    </div>
</template>
<script setup>
    import eventos from '../data/eventos.json'
    const route = useRoute()
    const id = route.query.id
    console.log(11, id)
</script>
<style>
.container2 {
    padding-top: 80px;
    height: 200px;
    width: 100%;
    text-align: center;
    line-height: 400px;
    background-image: url('/images/holi_festival.png');
}
</style>