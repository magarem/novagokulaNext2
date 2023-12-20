<template>
    <section class="pb-0">
        <h5 class="bread text-left" ><a href="/">Home</a> > {{data.title}}</h5>
        <img v-if="data.imgs" :src="data.imgs[0]" style="width: 100%;" class="mb-4 img-fluid"/> 
        <div class="container">
            <div class="pt-1">
                <section>
                    <h4 class="pb-3">{{data.title}}</h4>
                    <div class="container">
                        <div v-if="data.textImgs" class="row mb-4">
                            <div class="col-12 col-md-4 text-end">
                                <img :src="data.textImgs[0]" style="_float: left; max-width:100%;" _style="width: 100%; " class="mb-3 img-fluid"/>
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
    const { data: data, refresh  } = await useAsyncData('home', () => queryContent('/' + id).findOne())
    const timerStart = () => {
        setInterval(() => {
            console.log('refresh')
            refresh()
        }, 3500);
    }
    // timerStart()
    const refreshDo = (event) => {
        refresh()
    }
    if (process.client){
        if (window.parent){
            window.parent.postMessage({"pageid": id}, '/');
            window.parent.addEventListener("message", refreshDo, false);
        }
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
