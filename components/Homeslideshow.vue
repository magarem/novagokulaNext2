<template>
    <!-- <div class="mt-5">
        {{  data  }}
    </div> -->
<div id="carouselExampleControls" class="carousel slide cycle carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item" :class="index==0&&'active'" v-for="(item, index) in data.images" >
      <img :src="item" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<!-- 
    <div id="slide" :style="{'height':data.height + 'px'}" @mouseover="pause" @mouseleave="start">
        <div class="inside box">
            <img :style="{'max-height':data.height-25 + 'px'}" :src="item" />
        </div>
    </div> -->
</template>
<style scoped>
    .box {
        /* margin: 5px; */
        overflow: hidden;
        display: flex;
        justify-content: center;
    }
    .inside {
        padding-top: 25px;
    }
    #slide {
        width: 100%;
        height: 710px;
    }
    img_ {
        /* max-width: 100%; */
        /* max-height: 100%; */
        object-fit: cover;
    } 
</style>
<script setup>
// import items from '/public/homeSlide.json'
// const props = defineProps(['parameters'])
const props = defineProps(['refresh', 'datafile'])
// const images, limitNumber, height, time] = props.parameters
console.log('props:', props.datafile);

// const {refresh, datafile} = props
import yaml from "js-yaml";
// console.log('mydata:', items);

const ret = await useFetch('/api/read?filename=' + props.datafile)
console.log('ret:', ret.data.value.split('---')[1]);
let data = yaml.load(ret.data.value.split('---')[1]).params_data
data.images = data.images.split('\n')
let b = ref(0)
let item = ref()

let a = 0
const INTERVAL = 5000;
let timerId = null
let time = +data.time
let timer = 0
let count = 0

// const { data: data, refresh: refresh } = await useAsyncData(
//     'data', () => queryContent(props.datafile).findOne()
//     // 'bemvindo', () => queryContent().where({_id: props.file.replaceAll('/',':')}).findOne()
// )


watch(
    () => props.refresh,
    () => {
        refresh()
    }
)

const aaa = () => {
    timerId = setInterval(() => {
        item.value = data.images[timer]
        timer++;
        if (timer == +data.limitNumber||timer == data.images.length) {timer=0}
    }, time);
}

const start = () => {
    clearInterval(timerId);
    aaa()
}

const pause = () => {
    clearInterval(timerId);
}

onMounted((x)=>{
    item.value = data.images[0]
    // aaa() 
})

</script>