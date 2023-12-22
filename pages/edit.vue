<script setup lang="ts">
 definePageMeta({
        layout: ''
    })
// const { data: ret } = await useFetch('/api/save', {data: 'testando'})
// console.log(ret.value);

  // console.log(editedTxt.value);
  
  // contentToSave.value = "asfasdsadsadsadsadasd"
// }
const route = useRoute()
const id = route.query.id||''
let filename = ref(id)
let txt = ref()
let filename_load = ref()

async function read(filename) {
  try {
     if (filename) {
      const { data: ret } = await useFetch('/api/read?filename=' + filename)
      txt.value = ret.value
     }
  } catch (error) {
          //
  }
}
async function save(data) {
  try {
      const config = {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          // body: data
          body: JSON.stringify(data)
      }
      const response = await fetch('/api/save', config)
      //const json = await response.json()
      if (response.ok) {
          //return json
          console.log(response.body);
          document.getElementById('iframe').contentWindow.postMessage({"refresh": true}, '/');
          
      } else {
          //
      }
  } catch (error) {
          //
  }
}

const saveHandler = (name, content) => {
  console.log({filename: name, txt: content});
  save({filename: name, txt: content})
}

const readFile = () => {
  read(filename.value)
  watch(txt, (count) => {
    console.log('Saved!');
    
    saveHandler(filename.value, txt.value)
  })
  // const timerStart = () => {
  //   setInterval(() => {
  //       saveHandler(filename.value, txt.value)
  //   }, 3500);
  // }
  // timerStart()
}

  const iframeEvent = (event) => {
    //Verify App Domain
    // if(event.origin !== 'http://localhost:3000') return;
    console.log('data received:  ' + event.data.pageid);
    filename.value = event.data.pageid + ".md"
    readFile()
  }
  if (process.client){
			//Event Listener for Iframe
      window.addEventListener("message", iframeEvent, false);
      // console.log(22, document.getElementById('iframe').contentWindow);
  
    }	


</script>

<template>
  <div class="bg-dark container-fluid pb-4" style="height: 100%;">
      <div class="row">
        <div class="col-12 col-lg-8 pt-2">
          <iframe id="iframe" name="iframe" src="/" width="100%" height="650"></iframe>	
        </div>
        <div class="col-12 col-lg-4" style="background-color: blueviolet;">
          <div class="row mb-1" style="background-color: blueviolet;">
            <div class="col-4" style="padding-top: 13px; padding-left: 25px; color: white; font-size: 25px;">MWnotes</div>
            <div class="col-8" style="padding-bottom: 15px;"><input class="mt-3" v-model="filename" style="width: 237px;"/><button @click="readFile">>></button></div>
          </div>
          <textarea class="txt" spellcheck="false" v-model="txt" style="width: 100%; height: 85%;"></textarea>
        </div>
      
      </div>
      
  </div>
  
</template>
<style scoped>
  .txt {
    font-size: 18px;
    padding: 6px;
    color:aliceblue;
    background-color:rgb(42, 41, 41);
    outline:none;
  }
</style>