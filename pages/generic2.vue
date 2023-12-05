<template>
    <h5 class="mb-5_ text-left py-3" style="padding-left: 120px; margin-top: 70px; margin-bottom: 0px; background-color:antiquewhite; font-size: 17px;"><a href="/">Home</a> > {{data.title}}</h5>
   
    <img v-if="data.imgs" :src="data.imgs[0]" style="width: 100%; " class="mb-3 img-fluid"/> 
   
    <div class="container pb-5">
        <div class=" pt-0" style="margin-top: 20px;">
            <!-- <h4>{{data.title}}</h4> -->
            <section class="pt-0 products _section-padding ">
                <div class="container">
                    <img v-if="data.textImgs" :src="data.textImgs[0]" style="float: left;" _style="width: 100%; " class="mb-3 img-fluid"/>

                    <div class="row mb-4">
                        <ContentRenderer :value="data" />
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
