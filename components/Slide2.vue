<template>
    <div id="slide" @mouseover="pause" @mouseleave="start">
        <div class="inside box">
            <!-- <img :src="teste"/> -->
            <img :src="item" />
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


// const stateStore = useState()
let b = ref(0)

const { data: items } = await useAsyncData(
        'mountains',
            () => $fetch('/api/list?dir=public/upload/slideshow', {
                method: 'get'
            }
        ))

        console.log('....', items.value.length);
// stateStore.value


// await populaArray()
// const items = stateStore.value
// console.log('>>>', stateStore.value);
// const items = [
//     "/img/homeslideshow/slide1.jpeg",
//     "/img/homeslideshow/slide10.jpg",
//     "/img/homeslideshow/slide11.jpg",
//     "/img/homeslideshow/slide12.jpg",
//     "/img/homeslideshow/slide13.jpg",
//     "/img/homeslideshow/slide14.jpg",
//     "/img/homeslideshow/slide16.jpg",
//     "/img/homeslideshow/slide17.jpg",
//     "/img/homeslideshow/slide21.jpg",
//     "/img/homeslideshow/slide22.jpg",
//     "/img/homeslideshow/slide23.jpg",
// ]
// async function tt ()  {
//     const teste = await require("/img/mahamantra.png")
// }
// tt()
let item = ref(items.value[0])
let a = 0
const INTERVAL = 5000;
let timerId = null
let timer = 0
let count = 0

const aaa = () => {
    timerId = setInterval(() => {
        item.value = items.value[timer]
        timer++;
        if (timer==items.value.length) {timer=0}
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