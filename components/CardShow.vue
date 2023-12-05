<template>
    <section class="products  _section-padding"> 
            <div class="container_">
                <div class="card shadow-sm_ mb-3 bg border-0" style="100%;">
                    <h2 class="card-title">{{item.title}}</h2>

                    <div class="row g-0">
                        <div class="col-md-4">
                            <div v-if="item.imgs.length>0" v-for="img in item.imgs" _class="mb-4" >
                                <!-- <img :src="img" class="_img-fluid _rounded-start" style="width: 100%; height: 100%;"> -->
                                <!-- <div class="crop"> -->
                                    <img :src="img" class="card-img-top" />
                                <!-- </div> -->
                            </div>

                            <!-- <img :src="items[index].imgs[0]" style="max-width: 100%" class="img-fluid rounded-start" alt="..."> -->
                        </div>
                        <div class="col-md-8">
                            
                        <div class="card-body pt-3 pt-md-0 parag" >
                            <!-- {{ item.body }} -->
                            <p v-if="item.body.type!=='root'" class="card-text" v-html="item.body"></p>
                            <ContentRenderer v-else :value="item" />
                        </div>
                        </div>
                    </div>
                </div>

                <!-- <div class="media">
                        <img class="align-self-start mr-3" :src="items[index].imgs[0]" style="max-width: 64px" alt="Generic placeholder image">
                        <div class="media-body">
                            <h5 class="mt-0">{{items[index].title}}</h5>
                            <p class="card-text" v-html="items[index].body"></p>
                        </div>
                    </div> -->
                <div class="row">
                    <!-- <div class="col-12">
                        <h2 class="mb-5">{{sessiontitle}}</h2>
                    </div>  -->
                   

                    <!-- <div class="row mb-5">
                        <div class="col-md-4 col-sm-12 bg-slate-400">
                            <div style="max-width: 400px">
                                <img :src="items[index].imgs[0]" class="img-fluid product-image" alt=""/>
                            </div>
                        </div>
                        <div class="col-md-8 col-sm-12 bg-gray-950">
                            <h4>{{items[index].title}}</h4>
                            <p v-html="items[index].body"></p>
                        </div>
                    </div> -->
                        <!-- <div class="row mt-3">

                            <li v-for="item in items">
                                <a :href="'eventos?id='+item.id">
                                    {{ item.title }}
                                </a>
                            </li>
                            <br/><br/><br/>
                        </div> -->
                </div>
            </div>
        </section>
</template>
<script setup>
    const props = defineProps(['sessiontitle', 'item'])
    console.log(55, props.item);
    // const index = props.items.findIndex(x=>x.id==(props.id||1))
    // console.log('index:', index)
    // console.log(props.sessiontitle, props.items, props.id);
</script>
<style scoped>
 .p {
    font-size: 100px !important;
 }
.crop {
 height: 100%;
 width: 100%;
 overflow: hidden;
}
.crop img {
 height: auto;
 width: 100%;
}
 .bg {
    background-color: #F1D2A3;
 }
 .card-text {
    font-size: 18px;
 }
 .card-body {
    /* padding-top: 0px; */
    color:#535a42;
 }
 .card-title {
    /* color: #824b3b; */
    font-size: 22px;
    padding-bottom: 8px;
 }
 img {
    height: 100%;
    object-fit: cover;
}
 
/* img {
    width: 100%;
    height: 100%;
    object-fit: cover;
} */
/* img {
    float: left;
    width:  100px;
    height: 100px;
    background-size: cover;
} */
</style>