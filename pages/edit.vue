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
  <div class="bg-dark">
    <div class="_container mx-2" >
      <div class="row">
        <div class="col-12 col-lg-5">
          <span style="font-size: 20px;">Editar página:</span> <input class="mt-3" v-model="filename"/><button @click="readFile">>></button><br/>
        <!-- <div class="mx-lg-5 mt-3"> -->
          <textarea v-model="txt" style="width: 100%; height: 600px;"></textarea>
        <!-- </div> -->
        <!-- <img :src="'/img/'+ret[0]"> -->
        <!-- <br/><br/> -->
        <!-- <button @click="saveHandler">Salvar</button> -->
        </div>
        <div class="col-12 col-lg-7">
          <iframe id="iframe" name="iframe" src="/" width="100%" height="650"></iframe>	
        </div>
      </div>
    </div>
  </div>
  
</template>