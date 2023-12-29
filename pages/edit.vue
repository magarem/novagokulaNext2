<template id="bodyedit">
  <nav v-if="!editPanel" class="floating-menu">
    <div class="pt-2">
      <a @click="editPanelOpen" style="padding-left:8px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
        </svg>
      </a>
    </div>
  </nav>
  <div class="bg-dark container-fluid" style="padding-bottom: 27px; height: 100%;">
      <div class="row">
        <div v-if="editPanel" style="height: 680px;" class="col-12 col-lg-8 pt-2">
          <iframe :key="iframeUpdate" id="iframe" name="iframe" :src="page_id" style="height: 100%;" width="100%" height="650"></iframe>	
        </div>
        <div v-else :class="'col-12 pt-2 col-lg-12'">
          <iframe :key="iframeUpdate" id="iframe" name="iframe" :src="page_id" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe>	
        </div>
        <div v-if="editPanel" class="col-12 col-lg-4" style="height: 680px; background-color: blueviolet;">
          <div class="row" style="background-color: blueviolet;">
            <div class="col-4" style="padding-top: 17px; padding-left: 25px; color: white; font-size: 29px;">
              Sirius
            </div>
            <div class="col-8" style="padding-bottom: 15px;">
              <div class="row">
              <div class="col-11">
                <div class="input-group input-group-sm mb-0 mt-4">
                  <input type="text" class="form-control" v-model="filename" placeholder=""  aria-describedby="button-addon2">
                  <button class="btn btn-dark" @click="readFile" type="button" id="button-addon2">Editar</button>
                </div>
              </div>
            </div>
            </div>
          </div>
        
            <div class="mb-1 row gap-1" style="width: 400px;">
                <div class="col-12">
                  <button @click="editPanelClose" class="btn btn-primary btn-sm" style="margin-right: 10px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                    </svg>
                  </button>
               
                   <button @click="reloadIframe" class="btn btn-primary btn-sm" style="margin-right: 10px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
                      <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
                    </svg>
                  </button>
                
                  <button type="button" class="btn btn-primary btn-sm" style="margin-right: 10px;" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16">
                      <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                      <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                  </button>
             
                  <button type="button" @click="copile" class="btn btn-success btn-sm" style="margin-right: 10px;"  >
                   Copilar
                  </button>

                  <button type="button" @click="filename='../public/config.json'; readFile()" style="padding: 0px 0px; margin-right: 10px;" class="btn btn-warning btn-sm" >
                    Config
                  </button>

                  <button type="button" @click="systemUpdate" style="padding: 0px 0px;" class="btn btn-warning btn-sm" >
                    Sysupdate
                  </button>
                </div>
          </div>
          <textarea v-if="txt" class="txt" spellcheck="false" v-model="txt" style="width: 100%; height: 83%;"></textarea>
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
        <iframe  id="iframe" name="iframe" src="/list?dir=" width="100%" height="650"></iframe>	
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
let page_id = ref("/")
let iframeUpdate = ref(false)
let editPanel = ref(true)
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

async function systemUpdate() {
  try {
    if(confirm("Atualizar sistema?")){
      // const { data: ret1 } = await useFetch('/api/writeSlideFile')
      const { data: ret2 } = await useFetch('/api/systemUpdate')
      alert("Sistema atualizado com sucesso!")
    }
  } catch (error) {
      console.log("Copile error");
  }
}


async function copile() {
  try {
    if(confirm("Confirma copilação do site?")){
      // const { data: ret1 } = await useFetch('/api/writeSlideFile')
      const { data: ret2 } = await useFetch('/api/copile')
      console.log(ret1, ret2);
      alert("Site copilado com sucesso!")
    }
  } catch (error) {
      console.log("Copile error");
  }
}

function aa(){
  if (filename.value=="home.md"){
    page_id.value = "/"
  }else{
    if (filename.value.includes('meta.md')){
      page_id.value = "getSession?id=" + filename.value.replace('/meta.md','')
    }
    if (!filename.value.includes('meta.md')){
      page_id.value = "getItem?id=" + filename.value.replace('.md','')
    }
  }
}

function editPanelClose(){
  aa()
  editPanel.value=false
}

function editPanelOpen(){
  aa()
  editPanel.value=true
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
          document.getElementById('iframe').contentWindow.postMessage({"refresh": true, "filename": filename.value}, '/');
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

const reloadIframe = () => {
  iframeUpdate.value = !iframeUpdate.value
  // console.log(iframeUpdate.value);
  

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


.floating-menu {
  
    font-family: sans-serif;
    background: rgb(99, 130, 46);
    color: white;
    padding: 5px;;
    width: 50px;
    height: 50px;
    z-index: 100;
    position: fixed;
    top: 50%;
    right: 0px;
    border-radius: 25px 0px 0px 25px;
    /* transform: translate(-50%, -50%); */
  }
.txt {
    font-size: 18px;
    padding: 6px;
    color:aliceblue;
    background-color:rgb(42, 41, 41);
    outline: none;
  }
</style>