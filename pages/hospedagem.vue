<template>
    <div class="container pt-5"  >
        <h5>Hospedagem</h5><br/>
        <section v-if="id" class="pt-0 products _section-padding">
            <!-- {{ filteredItem }} -->
            <div class="row" v-if="filteredItem">
                <div v-if="filteredItem.imgs" class="col-md-5 mt-3">
                    <div v-for="item in filteredItem.imgs" class="mb-4" >
                    <img :src="item" style="width: 450px;">
                    </div>
                </div>
                <!-- <div class="col-1 "></div> -->
                <div class="col-md-7 ">
                    <div class="row">
                        <!-- <CardShow sessiontitle="Hospedagem" :items="hospedagens" :id="id" />  -->
                        <h3>{{filteredItem.title}}</h3>
                        <ContentRenderer :value="filteredItem" />
                    </div>
                </div>
            </div>
        </section>

        <section v-else class="pt-0 products _section-padding">
            <div class="row">
                <div class="col-12mt-3">
                    <div class="container">
                        Seja bem-vindo a Central de Reservas de Nova Gokula. Consulte nossas opções de hospedagem, escolha a que melhor lhe agradar e nos informe através do e-mail: reservas@novagokula.com.br ou pelo whatsapp (12) 99680-1318.
                    Obs: não há sinal de celular na área da fazenda.
                    </div>
                </div>
            </div>
        </section>

        
    </div>
    <div class="container align-items-md-stretch mb-4 mt-5">
        <div class="col-md-12">
        <div class="h-100 p-4 bg-light border rounded-3">
            <h5>Opções</h5>
            <!-- <div class="row"> -->
            <div class="row" v-if="hospedagens">
                <div class="col-md-4 mb-4" v-for="item in hospedagens">
                <Cardgrid target="hospedagem" :item="item" />
                </div>
            </div>
            <!-- </div> -->
        </div>
        </div>
    </div>
</template>
<script setup>
    // import hospedagens from '../data/hospedagens.json'
    const route = useRoute()
    const id = route.query.id
    // const content = route.query.content
    console.log(11, id)
    let hasLoaded = false
  
        const { data } = await useAsyncData('page-data', () => {
                 return queryContent('/hospedagem').find()
                }
        )
                const hospedagens = data.value
                console.log(5, hospedagens);
                hasLoaded = true
                 
            // if (id){

                const filteredItem = data.value.filter( x => 
                x._path == id
                )[0];

                console.log('id-->', filteredItem);
            // }
                
</script>
