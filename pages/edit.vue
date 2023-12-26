<template>
  <div class="bg-dark container-fluid pb-4" style="height: 100%;">
      <div class="row">
        <div class="col-12 col-lg-8 pt-2">
          <iframe id="iframe" name="iframe" src="/" width="100%" height="650"></iframe>	
        </div>
        <div class="col-12 col-lg-4" style="background-color: blueviolet;">
          <div class="row mb-1" style="background-color: blueviolet;">
            <div class="col-4" style="padding-top: 20px; padding-left: 25px; color: white; font-size: 25px;">
              MWnotes
            </div>
            <div class="col-8" style="padding-bottom: 15px;">
              <div class="row">
              <div class="col-9">
                <div class="input-group input-group-sm mb-0 mt-4">
                  <input type="text" class="form-control" v-model="filename" placeholder=""  aria-describedby="button-addon2">
                  <button class="btn btn-dark" @click="readFile" type="button" id="button-addon2">Editar</button>
                </div>
              </div>
              <div class="col-3 pt-4">
                <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16">
                      <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                      <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                </button>
              </div>
            </div>
            </div>
          </div>
          <textarea v-if="txt" class="txt" spellcheck="false" v-model="txt" style="width: 100%; height: 85%;"></textarea>
        </div>
      
      </div>
      
  </div>
  <!-- Modal -->
<div class="modal fade modal-xl" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Banco de imagens</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <iframe id="iframe" name="iframe" src="/list" width="100%" height="650"></iframe>	
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
      </div>
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: ''
})

const route = useRoute()
const id = route.query.id||''
let filename = ref(id)
let txt = ref()
let aleradySaved = ref(false)
let showModal = ref(true)
async function read(filename) {
  try {
     if (filename) {
      const { data: ret } = await useFetch('/api/read?filename=' + filename)
      txt.value = ret.value
     }
  } catch (error) {
      console.log("Load file error");
  }
}

async function save(data) {
  if (!aleradySaved.value){
     try {
      const config = {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
      }
      const response = await fetch('/api/save', config)
      if (response.ok) {
          console.log(response.body);
          console.log("Retorna info");
          
          document.getElementById('iframe').contentWindow.postMessage({"refresh": true}, '/');
          aleradySaved.value = true
        } else {
        console.log("save file error");
      }
  } catch (error) {
    console.log("save api error");
  }
  }
 
}

const saveHandler = (name, content) => {
  console.log({filename: name, txt: content});
  save({filename: name, txt: content})
  console.log("edition saved")
}

const readFile = () => {
  read(filename.value)
  watch(txt, (count) => {
    aleradySaved.value = false
    saveHandler(filename.value, txt.value)
  })
 
}

const iframeEvent = (event) => {
  //Verify App Domain
  // if(event.origin !== 'http://localhost:3000') return;
  if (event.data.sessionid){
    filename.value = event.data.sessionid + "/meta.md"
  }else{
     console.log('data received:  ' + event.data.pageid);
     filename.value = event.data.pageid + ".md"
  }
 
  readFile()
}

if (process.client){
    //Event Listener for Iframe
    window.addEventListener("message", iframeEvent, false);
}	
</script>

<style scoped>
  .txt {
    font-size: 18px;
    padding: 6px;
    color:aliceblue;
    background-color:rgb(42, 41, 41);
    outline: none;
  }
</style>