<template>
    <section class="pb-0">
        <h5 class="bread text-left" ><a href="/">Home</a> > {{data.title}}</h5>
        <img v-if="data.imgs" :src="data.imgs[0]" style="width: 100%;" class="mb-4 img-fluid"/> 
        <div class="container">
            <div class="pt-1">
                <section>
                    <h4 class="pb-3">{{data.title}}</h4>
                    <div class="container">
                        <div v-if="data.textImg" class="row mb-4">
                            <div class="col-12 col-md-4 text-end">
                                <img :src="data.textImg[0]" style="_float: left; max-width:100%;" _style="width: 100%; " class="mb-3 img-fluid"/>
                            </div>
                            <div class="col-12 col-md-8">
                                <ContentRenderer :value="data" />
                            </div>
                        </div>
                        <div v-else class="row mb-4">
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
<script setup lang="ts">
    const id = useRoute().query.id
    let alreadyRefresh = ref(false)
    const { data: data, refresh  } = await useAsyncData('home', () => queryContent('/' + id).findOne())
    const refreshDo = (event) => {
        console.log("recebido na iframe");
        // if (!alreadyRefresh) refresh()
    }
    if (process.client){
        if (window.parent){
            // alert('client run script!')
            window.parent.postMessage({"pageid": id}, '/');
        }
        window.addEventListener("message", refreshDo, false);

    }
</script>
<style scoped>

.bg {
        background-color: #E7B884;
    }
 img {
    max-height: 400px;
 }
</style>
