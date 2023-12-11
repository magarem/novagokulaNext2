<template>
    <!-- <div id="slide" >
       <img :src="item" _class="img-fluid" _style="width: 100%; max-height: 500px;"/>
    </div> -->
    <div id="slide" class=" img-wrapper" @mouseover="pause"
    @mouseleave="start">
            <div class="card horizontal">
                <Transition name="bounce">
                    <img :src="item" _class="img-fluid" _style="width: 100%; max-height: 500px;"/>
                </Transition>
                </div>
        </div>
</template>
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

// const aa = setInterval(function(){ 
//     item.value = items[a][1]
//     a++
//     if (a==items.length) a=0
// }, 3000);


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
<style scoped>
 #slide {
    width: 100%;
    height: 640px;
 }

 /* img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
} */

.img-wrapper {
    margin-right: 2rem;
}

.card {
    height: 640px;
    width: 100%;
    position: relative;
    overflow: hidden;
    float: left;
}

/* My image inside the above div wrapper */

.card img {
    top: 50%;
    left: 50%;
    position: relative;
    transform: translate(-50%, -50%);
    -webkit-transition: all 3s ease;
  transition: all 3s ease;
}

/* To display horizontal block */

.card.horizontal {
    height: 640px;
    width: 100%;
}

.card.horizontal img {
    height: auto;
    width: 100%;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
0% {
    transform: scale(0);
}
50% {
    transform: scale(1.25);
}
100% {
    transform: scale(1);
}
}

</style>