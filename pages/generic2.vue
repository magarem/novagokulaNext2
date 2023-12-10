<template>
    <section class=" pb-5">
        <h5 class="bread mb-5_ text-left" ><a href="/">Home</a> > {{data.title}}</h5>
        <img v-if="data.imgs" :src="data.imgs[0]" style="width: 100%; " class="mb-3 img-fluid"/> 
        <div class="container pb-5 _pt-4">
            <div class="pt-0" _style="margin-top: 20px;">
                <section class="pt-0 products _section-padding ">
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

    definePageMeta({
        layout: 'default2'
    })

    const route = useRoute()
    const id = route.query.id
    // const type = route.query.type
    
    console.log(11, id)
    let hasLoaded = false

    const { data: data } = await useAsyncData('home', () => queryContent('/' + id).findOne())
  
    console.log('data:', data.value);
    
    // console.log('data:', data.value);

    // const item = data.value
    hasLoaded = true
                 
   
                
</script>
<style scoped>

 img {
    max-height: 400px;
 }

</style>
