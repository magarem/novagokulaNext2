<template>
    <div id="slide" @mouseover="pause"
    @mouseleave="start">
        <div class="inside box">
            <img :src="item" >
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
        height: 710px;
    }
    img_ {
        /* max-width: 100%; */
        /* max-height: 100%; */
        object-fit: cover;
    } 
</style>
<script setup>
let b = ref(0)
const items = [
    [0, "/img/homeslideshow/slide1.jpeg"],
    [1, "/img/homeslideshow/slide12.jpg"],
    [2, "/img/homeslideshow/slide17.jpg"],
    [3, "/img/homeslideshow/slide10.jpg"],
    [4, "/img/homeslideshow/slide11.jpg"],
    [0, "/img/homeslideshow/slide21.jpg"],
    [1, "/img/homeslideshow/slide22.jpg"],
    [2, "/img/homeslideshow/slide23.jpg"]
]
let item = ref(items[0][1])
let a = 0
const INTERVAL = 5000;
let timerId = null
let timer = 0
let count = 0

const pauseSlide = () => {
    clearInterval(aa)
}

const restartSlide = () => {
    const aa = setInterval(function(){ 
    item.value = items[a][1]
    a++
    if (a==items.length) a=0
}, 3000);
}

const aaa = () => {
    timerId = setInterval(() => {
        item.value = items[timer][1]
        timer++;
        if (timer==items.length) {timer=0}
    }, 3500);
}

const start = () => {
    clearInterval(timerId);
    // timer = timer > 0 ? timer : INTERVAL / 1500;
    aaa()
}
const pause = () => {
    clearInterval(timerId);
}
aaa()
</script>