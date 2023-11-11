<template>
    <div class="container pt-5"  >
        <h4>Templos</h4>
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
                        <h4>{{filteredItem.title}}</h4>
                    </div>
                    <div class="row">
                        <ContentRenderer :value="filteredItem" />
                    </div>
                </div>
            </div>
        </section>

        <!-- <section v-else class="pt-0 products _section-padding">
            <div class="row">
                <div class="col-12mt-3">
                    <div class="container">
                        
                    </div>
                </div>
            </div>
        </section> -->

        
    </div>
    <div class="container align-items-md-stretch mb-4 mt-5">
        <div class="col-md-12">
        <div class="h-100 p-4 bg-light border rounded-3">
            <!-- <h5>Opções</h5> -->
            <!-- <div class="row"> -->
            <div class="row" v-if="hospedagens">
                <div class="col-md-4 mb-4" v-for="item in hospedagens">
                <Cardgrid target="templos" :item="item" />
                </div>
            </div>
            <!-- </div> -->
        </div>
        </div>
    </div>
</template>
<script setup>
    const route = useRoute()
    const id = route.query.id
   
    console.log(11, id)
    let hasLoaded = false
  
        const { data } = await useAsyncData('page-data', () => {
                 return queryContent('/templos').find()
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
