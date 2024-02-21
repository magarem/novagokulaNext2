<template>
    <div id="slide" :style="{'height':height + 'px'}" @mouseover="pause" @mouseleave="start">
        <div class="inside box">
            <img :style="{'max-height':height-25 + 'px'}" :src="item" />
        </div>
    </div>
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
const props = defineProps(['refresh', 'images', 'limitNumber', 'height', 'time'])
// const images, limitNumber, height, time] = props.parameters
console.log('props:', props.parameters);
const {title, images, limitNumber, height, time} = props

// console.log('mydata:', items);
let b = ref(0)
let item = ref()
let a = 0
const INTERVAL = 5000;
let timerId = null
let timer = 0
let count = 0

const aaa = () => {
    timerId = setInterval(() => {
        item.value = images[timer]
        timer++;
        if (timer == limitNumber||timer == images.length) {timer=0}
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
   item.value = images[0]
aaa() 
})

</script>