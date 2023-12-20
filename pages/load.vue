<template>
    <div class="second-row">
        <div>{{ aa }}</div><br/>
        <button @click="confere">Confere</button>
        <!-- <iframe src="/testesave" frameborder="0" scrolling="yes"  style="height: 100%; 
            width: 40%; float: left; " height="100%" width="40%"  align="left">
        </iframe>   -->
        <iframe id="iframe" ref="iframe" :src="iframeTarget" frameborder="0" scrolling="yes"  style="overflow: hidden; height: 95%;
            width: 60%; " height="95%" width="60%" align="right">
        </iframe>
        <!-- <button>{{ iframe }}</button> -->
    </div>
</template>

<script setup>
    definePageMeta({
        layout: ''
    })
    // const { data: data, refresh  } = await useAsyncData('')
    const iframeTarget = "https://www.cnnbrasil.com.br/politica"
    const iframe = ref(null)
    // iframe.src = "http://terste.com"
    // console.log(iframe.location.href);
    let aa = ref(null)

    const confere = () => {
        if (process.client) {
        //   aa = parent.iframe.location.href
        // aa = document.getElementById("iframe").contentWindow.location.href
        }
        console.log(iframe.contentWindow.location.href);
        aa = "testando!!!"
    }
    
//    const a = $refs.iframeRef.getAttribute('src')
</script>
<style>

body, html {width: 100%; height: 100%; margin: 0; padding: 0}
.first-row {position: absolute;top: 0; left: 0; right: 0; height: 100px; background-color: lime;}
.second-row {position: absolute; top: 0px; left: 0; right: 0; bottom: 0; background-color: red }
.second-row iframe {display: block; width: 100%; height: 100%; border: none;}</style>