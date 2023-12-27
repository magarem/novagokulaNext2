<template>
    <section class="pb-0">
        <h5 class="bread text-left" ><a href="/">Home</a> > {{data.title}}</h5>
        <img v-if="data.imgs" :src="data.imgs[0]" style="width: 100%;" class="img-fluid"/> 
        <div class="container">
            <div class="pt-1">
                <section>
                    <h4 class="pb-3 mt-3">{{data.title}}</h4>
                    <div class="container ">
                        <div v-if="data.textImg" class="row ">
                            <div class="col-12 col-md-4 text-end">
                                <img :src="data.textImg[0]" style="_float: left; max-width:100%;" _style="width: 100%; " class="mb-3 img-fluid"/>
                            </div>
                            <div class="col-12 col-md-8">
                                <ContentRenderer :value="data" />
                            </div>
                        </div>
                        <div v-else class="row">
                            <div class="col-12" >
                                <ContentRenderer :value="data" />
                            </div>
                        </div>
                    </div>
                </section>   
                <!-- <button @click="refresh">refresh</button> -->
            </div>
        </div>
    </section>
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

    const route = useRoute()
    const id = route.query.id
    
    const { data: data, refresh } = await useAsyncData('home', () => queryContent( id  ).findOne())
    console.log(data);

    async function refreshDo(val) {
        console.log(val);
        
        console.log("recebido na iframe");
        refresh()
    }

    if (process.client) {

        if (window.parent){
            // alert('client run script!')
            window.parent.postMessage({"pageid": id}, '/');
        }
        window.addEventListener("message", refreshDo, false);

    }

</script>
