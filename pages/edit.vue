<template>
  <div class="bb bg-dark">
  <nav v-if="!editPanel" class="floating-menu">
    <div class="pt-2">
      <a @click="editPanelOpen" style="padding-left:8px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
        </svg>
      </a>
    </div>
  </nav>
  <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand mt-0" href="#" style="margin-left: 2px;">              
        <img src="/img/edit/logo.png" alt="Logo do Sistema" style="width: 100%;">
      </a>
              
      <div style="width: 400px; margin-right: 20px;" class="mt-1 input-group input-group-sm mb-0">
        <input type="text" class="form-control text-white  border-dark"  @keyup.enter="readFile" style="background-color:rgb(88, 86, 86);" v-model="filename" placeholder=""  aria-describedby="button-addon2">
        <!-- <button class="btn btn-dark" @click="readFile" type="button" id="button-addon2">Editar</button> -->
      </div>
              
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent"> -->
        <div class="row mt-1" style="width: 100%;">
          <div class="col-12">
            <div class="btn-group" role="group" aria-label="Basic example">

              <div class="btn-group btn-sm">
                <button class=" btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                  </svg>
                </button>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                <li><button @click="editViewMode = 0" class="dropdown-item" >
                  Misto
                </button></li>
                    <li><button @click="editViewMode = 1" class="dropdown-item" >
                Editor
                </button></li>
                    <li><button @click="editViewMode = 2" class="dropdown-item" >
                  Site
                </button></li>
                  </ul>
                </div>
              
              
              
              <button @click="reloadIframe" class="btn btn-primary px-3 btn-sm" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
                  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
                </svg>
              </button>
              <button type="button" class="btn btn-primary px-3 btn-sm"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16">
                  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5z"/>
                </svg>
              </button>
              <button type="button" @click="configMode" class="btn btn-primary px-3 btn-sm" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                </svg>
              </button>
              <div class="btn-group btn-sm">
                <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                  Sistema
                </button>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                <li><button type="button" @click="copile" class="dropdown-item"   >
                  Publicar
                </button></li>
                  <li><button type="button" @click="gitreset" class="dropdown-item" >
                                  Resetar
                                </button></li>
                  <li><button type="button" @click="systemUpdate" class="dropdown-item" >
                                  Atualizar versão
                                </button></li>
                </ul>
              </div>
              <button type="button" @click="logout"  class="btn btn-primary px-3 btn-sm" >
                sair
              </button>
            </div>
          </div>
        </div>
      <!-- </div> -->
    </div>
  </nav>
  <div class="bg-dark container-fluid " style="_padding-bottom: 27px; ">
     
      <div v-if="editViewMode==0" class="row text-center" >
        <div class="col-12 col-lg-4" style="_margin-left: -15px; height: 610px; _background-color: blueviolet;">
          <div v-if="txt" class="h-100">
            <textarea v-if="txt" class="txt mt-2" spellcheck="false" v-model="txt" style="width: 450px; height: 90%;"></textarea>
            <div class="btn-group w-100 " role="group" aria-label="Basic outlined example">
              <button style="margin-right: 10px;" @click="fileContentUndo" class="mt-1 btn btn-warning rounded-pill">Reverter</button><button class="mt-1 btn btn-success rounded-pill">Salvar</button>
            </div>
          </div>
        </div>
        <div v-if="editPanel" class="col-12 col-lg-8 pt-2">
          <iframe :key="iframeUpdate" id="iframe" name="iframe" :src="page_id"  width="100%" style="height: 87vh;"></iframe>	
        </div>
      </div>

      <div v-if="editViewMode==1" class="row text-center" >
        <div class="col-12 col-lg-12" style="_margin-left: -15px; height: 610px; _background-color: blueviolet;">
          <div v-if="txt" class="h-100">
            <textarea v-if="txt" class="txt mt-2" spellcheck="false" v-model="txt" style="width: 100%; height: 90%;"></textarea>
            <div class="btn-group w-100" role="group" aria-label="Basic outlined example">
              <button style="margin-right: 10px;" @click="fileContentUndo" class="mt-1 btn btn-warning rounded-pill">Reverter</button><button class="mt-1 btn btn-success rounded-pill">Salvar</button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="editViewMode==2" class="row text-center" >
        <div :class="'col-12 pt-2 col-lg-12'">
          <iframe :key="iframeUpdate" id="iframe" name="iframe" :src="page_id" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:89vh;width:100%;position:absolute;top:70px;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe>	
        </div>
      </div>

  </div>
  <!-- Modal -->
  <div class="modal fade modal-xl" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog border-3 border-dark">
      <div class="modal-content">
        <!-- <div class="modal-header bg-dark">
          <h5 class="modal-title" id="exampleModalLabel">Banco de imagens</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div> -->
        <div class="modal-body bg-dark" style="">
            <iframe id="iframe" name="iframe" src="/list?dir=" width="100%" style="height:85vh;"></iframe>	
        </div>
        <!-- <div class="modal-footer bg-dark">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
        </div> -->
      </div>
    </div>
  </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: '',
	// middleware: 'auth'
})
import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth';
const router = useRouter();

const { logUserOut } = useAuthStore();
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive

const logout = () => {
  logUserOut();
  router.push('/login');
};
const route = useRoute()
const id = route.query.id||''
let page_id = ref("/")
let editViewMode = ref(0)
let iframeUpdate = ref(false)
let editPanel = ref(true)
let filename = ref(id)
let txt = ref()
let aleradySaved = ref(false)
let showModal = ref(true)


function configMode() {
  if (editViewMode.value == 2) {editViewMode.value = 1}
  filename.value='public/config.json'; 
  readFile(); 
}
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

async function fileContentUndo() {
  try {
    if(confirm("Descartar alterações em " + filename.value + "?")){
      const { data: ret } = await useFetch('/api/restorefilecontent?file=' + filename.value)
      alert(filename.value + " recuperdo com sucesso!")
    }
  } catch (error) {
      console.log("Error");
  }
}

async function gitreset() {
  try {
    if(confirm("Apagar últimas mudanças?")){
      // const { data: ret1 } = await useFetch('/api/writeSlideFile')
      const { data: ret2 } = await useFetch('/api/gitreset')
      alert("Site recuperado com sucesso!")
    }
  } catch (error) {
      console.log("Error");
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

function editView(op){
  if (op==0){

  }
  if (op==1){
    
  }
  if (op==2){
    
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
  if (filename.value.includes('meta.md')){
    page_id.value = "/getSession?id=" + filename.value
  }else{
    page_id.value = "/getItem?id=" + filename.value
  }
  
  iframeUpdate.value = !iframeUpdate.value
  // console.log(iframeUpdate.value);
  

}


const iframeEvent = (event) => {
  //Verify App Domain
  // if(event.origin !== 'http://localhost:3000') return;
  if (event.data.sessionid){
    filename.value = 'content/' + event.data.sessionid + "/meta.md"
  }else{
     console.log('data received:  ' + event.data.pageid);
     filename.value = 'content/' + event.data.pageid + ".md"
  }
 
  readFile()
}

if (process.client){
    //Event Listener for Iframe
    window.addEventListener("message", iframeEvent, false);
}	
</script>

<style scoped>

iframe::-webkit-scrollbar {
    width: 0.5em;
}

iframe::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}

iframe::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

textarea::-webkit-scrollbar {
    width: 0.5em;
}

textarea::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}

textarea::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
.bb {
  height: 100vh;
}


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
    background-color:rgb(63, 63, 63);
    outline: none;
    resize: none;
  }
</style>