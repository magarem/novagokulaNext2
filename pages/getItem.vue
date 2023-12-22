<template>
    <h5 class="bread text-left pl-5"><a href="/">Home</a><a :href="'generic?type='+id">{{id}}</a></h5>
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
    
    const { data: data, refresh } = await useAsyncData('home', () => queryContent( id  ).findOne())
    console.log(data);

    async function refreshDo() {
        console.log("recebido na iframe");
        
        refresh()

        // forceRerender()
        // componentFlag.value = true
        // componentFlag.value = true
        // rr.value=2
        // refreshComponent()
    }

    if (process.client) {

        if (window.parent){
            // alert('client run script!')
            window.parent.postMessage({"pageid": id}, '/');
        }
        window.addEventListener("message", refreshDo, false);

    }

</script>
