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
    <div class="container-fluid mt-2">
      <a class="navbar-brand_ mt-0" href="#" style="margin-left: 2px;">              
        <img src="/img/edit/logo.png" alt="Logo do Sistema" style="width: 90%;">
      </a>
      
      <div style="width: 50vw; margin-right: 20px;" class=" input-group input-group-sm mb-0">
        <div class="input-group">
          <input v-model="id" @keyup.enter="readFile" type="text" class="form-control bg-dark text-light form-control-sm" >
          <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
          </button>
          <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="dropdownMenuButton2">
            <li>
              <button @click="localsave(); save();"  class="dropdown-item"  type="button">Salvar</button>
            </li>
            <li v-if="fileType=='dir'"><button @click="novoDoc" class="dropdown-item" type="button">Novo</button>
            </li> 
            
            <li>
            <button @click="fileContentUndo" class="dropdown-item" type="button">Reverter edição</button>

            </li> 
            <li>
              <button v-if="fileType=='file'&&!id.includes('_index')&&!id.includes('home.md')" @click="delDoc" class="dropdown-item" type="button">Excluir</button>

            </li>
            <li>
              <button v-if="fileType=='file'&&!id.includes('_index')&&!id.includes('home.md')" type="button" @click="rename" class="dropdown-item" >
                Renomear
              </button>
            </li>
            <li>
              <button v-if="fileType=='dir'" type="button" @click="ajustaPonteiro({operation: 'reset', operationId: ''})" class="dropdown-item" >
                Refazer lista
              </button>
            </li>  
          </ul>
        </div>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="row" style="width: 100%;">
        <div class="col-12">
          <div class="btn-group" role="group" aria-label="Basic example">
            <div class="btn-group btn-sm">
              <button class=" btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                </svg>
              </button>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                <li><button @click="editViewMode = 0" class="dropdown-item" >Misto</button></li>
                <li><button @click="editViewMode = 1" class="dropdown-item" >Editor</button></li>
                <li><button @click="editViewMode = 2" class="dropdown-item" >Site</button></li>
              </ul>
            </div>
            <button @click="reloadIframe" class="btn btn-outline-secondary px-3 btn-sm" >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
              </svg>
            </button>
            <button type="button" @click="loadConfigFile" class="btn btn-outline-secondary px-3 btn-sm"  data-bs-toggle="modal" data-bs-target="#exampleModal">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5z"/>
              </svg>
            </button>
            <button type="button" class="btn btn-outline-secondary px-3 btn-sm"  data-bs-toggle="modal" data-bs-target="#modal_config">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
              </svg>
            </button>
            <div class="btn-group btn-sm">
              <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                Sistema
              </button>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
              <li>
                  <button type="button" @click="cleanup()" class="dropdown-item" >
                    Limpar memória
                  </button>
                </li> 
                <li>
                  <button type="button" @click="gitreset" class="dropdown-item" >
                    Desfazer alterações
                  </button>
                </li>
                <li>
                  <button type="button" @click="systemUpdate" class="dropdown-item" >
                    Atualizar versão
                  </button>
                </li>
              </ul>
            </div>
            <button type="button" @click="copile" class="btn btn-outline-secondary px-3 btn-sm" >
              Publicar
            </button>
            <button type="button" @click="logout"  class="btn btn-outline-secondary px-3 btn-sm" >
              sair
            </button>
            <!-- <span class="text-success mt-1 " style="margin-left: 10px;">
              [ {{ authenticated }} ]
            </span> -->
          </div>
        </div>
      </div>
    </div>
  </nav>
  
  <div class="bg-dark container-fluid m-0 mt-3" style="height: calc(100% - 85px);">
    <div  class="row gap-0 h-100" >
      <div :class="(editViewMode==0)? 'col-12 col-lg-4 px-0' :  'col-12 col-lg-12'" >
        <div v-if="txt" class="h-100 w-100" >
          <ul class="nav nav-tabs bg-dark  nav-fill " role="tablist">
            <li  class="nav-item">
              <a id="x1" class="nav-link active" data-bs-toggle="tab" href="#txt_arquivos_">Arquivos</a>
            </li>
            <li class="nav-item">
              <a id="x2" class="nav-link" data-bs-toggle="tab" href="#txt_propiedades_">Propriedades</a>
            </li>
            <li class="nav-item">
              <a id="x3" class="nav-link" data-bs-toggle="tab" href="#txt_texto_">Texto</a>
            </li>
          </ul>
          <!-- Tab panes -->
          <div class="tab-content" style="height: calc(100% - 28px);">
            <div id="txt_arquivos_" class="container_ h-100 tab-pane active my-0 mx-0" >
                <div class="list-group p-4" style="width: 100%;">
                  <button type="button" class="p-4 list-group-item list-group-item-action bg-dark text-light" @click="id=x; openNewFile(x);readFile();  activeTab()" v-for="x in fileList">{{ x }}</button>
                </div>
            </div>
            <div id="txt_propiedades_" class="container tab-pane fade" style="height:100%; padding-left: 0px; padding-right: 0px;">
              <textarea v-if="txt" class="txt" spellcheck="false" v-model="txt_propiedades" ></textarea>
            </div>
            <div id="txt_texto_" class="container tab-pane" style="height:100%; padding-left: 0px; padding-right: 0px">
              <textarea v-if="txt" v-show="false" class="txt" spellcheck="false" v-model="txt" ></textarea>
              <textarea v-if="txt" class="txt" spellcheck="false" v-model="txt_texto" ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div v-show="editViewMode==0" class="col-12 col-lg-8 _pt-2 px-0 py-0">
        <iframe :key="iframeUpdate" id="iframe" name="iframe" :src="page_id" class="w-100 h-100" ></iframe>	
      </div>
    </div>
    <div v-if="editViewMode==1111" class="row text-center" >
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
  <!------------>
  <!-- Modal --->
  <!------------>
  <div class="modal fade modal-xl" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog border-3 border-dark bg-dark">
      <div class="modal-content bg-dark">
        <!-- <div class="modal-header bg-dark">
          <h5 class="modal-title" id="exampleModalLabel">Banco de imagens</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div> -->
        <div class="modal-body bg-dark" style="height: 90vh;">
            <iframe id="iframe" name="iframe" src="/list?dir=" width="100%" style="height:85vh;"></iframe>	
        </div>
        <!-- <div class="modal-footer bg-dark">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
        </div> -->
      </div>
    </div>
  </div>

  <div class="modal fade modal-xl" id="modal_config" tabindex="-1" aria-labelledby="modal_config" aria-hidden="true">
    <div class="modal-dialog border-3 border-dark bg-dark">
      <div class="modal-content bg-dark">
        <div class="modal-header bg-dark">
          <h5 class="modal-title text-light" id="exampleModalLabel">Configurações do sistema</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body bg-dark" style="height: 70vh;">
          <textarea id="config_textarea" v-model="configtextarea" class="bg-dark text-light p-2" style="width: 100%; height:100%;"></textarea>
        </div>
        <div class="modal-footer bg-dark">
          <button type="button" class="btn btn-secondary" @click="loadConfigFile">load</button>
          <button type="button" class="btn btn-secondary" @click="saveConfigFile()">Save</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
        </div>
      </div>
    </div>
  </div>
  <!------------>
  <!-- /Modal -->
  <!------------>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: ''
})
// # for local storage
import { getData, setData } from 'nuxt-storage/local-storage';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth';
import yaml from "js-yaml";

const router = useRouter();

const { logUserOut } = useAuthStore();
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive

if (!authenticated.value) {
  router.push('/login');
}
const logout = () => {
  logUserOut();
  router.push('/login');
};

function splitLastOccurrence(str, substring) {
  const lastIndex = str.lastIndexOf(substring);
  const before = str.slice(0, lastIndex);
  const after = str.slice(lastIndex + 1);
  return [before, after];
}

const route = useRoute()
let status = ref('')
let page_id = ref("/")
let editViewMode = ref(0)
let iframeUpdate = ref(false)
let editPanel = ref(true)
let id = ref(route.query.id)
let txt = ref()
let txt_propiedades = ref()
let txt_texto = ref()
let aleradySaved = ref(false)
let showModal = ref(true)
let fileType = ref("dir")
let localdata = getData('content')||[]
let fileList = ref([])
let txt_parans = {}
const ref_session = ref(null);
let configtextarea = ref("")
let id_target = ref("")
let dir
let dataBkp



import Swal from 'sweetalert2'
import '@sweetalert2/theme-dark/dark.scss'

function activeTab(){ 
  document.getElementById('txt_arquivos_').classList.remove('active'); 
  document.getElementById('txt_propiedades_').classList.remove('active'); 
  document.getElementById('txt_texto_').classList.add('active'); 

  document.getElementById('x1').classList.remove('active'); 
  document.getElementById('x2').classList.remove('active'); 
  document.getElementById('x3').classList.add('active'); 
}

async function cleanup() {
  try {
    const { data: ret } = await useFetch('/api/cleanup')
  } catch (error) {
    console.log("Error");
  }
}

const localsave = () => {
  let index = localdata.findIndex((item) => item.id === id.value);
  // Check if the object with the specified property value exists in the array
  if (index === -1) {
    // If not found, push a new object with the desired properties
    localdata.push({id: id.value, txt: txt.value});
  } else {
    // If found, log a message indicating that the object already exists
    console.log("Object already exists");
    localdata[index] = {id: id.value, txt: txt.value}
  }
  setData('content', localdata);
  console.log("doc salvo local");
}

async function fileContentUndo() {
  try {
    if(confirm("Descartar alterações em " + id.value + "?")){
      let index = localdata.findIndex((item) => item.id === id.value);
      
      if (index === -1) {
        alert("doc ainda não salvo")
      } else {
        // If found, log a message indicating that the object already exists
        txt.value = getData('content')[index].txt
        document.getElementById('iframe').contentWindow.location.reload(true)
      }
    }
  } catch (error) {
      console.log("Error", error);
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
      setData('content',[])
      const { data: ret2 } = await useFetch('/api/copile')
      alert("Site copilado com sucesso!")
    }
  } catch (error) {
      console.log("Copile error");
  }
}

async function rename() {
  try {
    let aux1 = splitLastOccurrence(id.value, '/')
    let docNewFileName = window.prompt("Digite o novo nome", aux1[1].split('.')[0]);
    let newname = aux1[0] + '/' + docNewFileName + '.md'
    console.log(newname);
    $fetch('api/rename?oldname=' + id.value + '&newname=' + newname).then(ret=>{
      // console.log(ret);
    })
    id.value = newname
    document.getElementById('iframe').contentWindow.location = "/" + newname.replaceAll('/', ':')
  } catch (error) {
      console.log("Copile error");
  }
}

async function delDoc(){
  Swal.fire({
    title: "Confirma exclusão?",
    // showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Sim",
    denyButtonText: `Cancelar`
  }).then(async (result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      // if (confirm("Confirma exclusão do arquivo " + filename.value + '?') == true) {
        const { data: ret } = await useFetch('/api/deleteContent?id=' + id.value.replaceAll(':', '/'))
        id.value = 'content:' + dir + ':_index.md'
        readFile()
        document.getElementById('iframe').contentWindow.location = '/content:' + dir + ':_index.md'
        ajustaPonteiro({operation: 'reduce', operationId: id.value})
    } 
    // else if (result.isDenied) {
    //   Swal.fire("Changes are not saved", "", "info");
    // }
  });


  
}

async function novoDoc() {
  const newname = Date.now() + '.md'
  let aux1 = "---\ntitle: Novo documento\ntextImg: ['img/generic.png']\n---\nTexto"
  let newfilename = 'content:' + dir + ':' + newname
  try {
    const config = {
      method: 'POST',
      headers: {'Accept': 'application/json','Content-Type': 'application/json'},
      body: JSON.stringify({
        filename: newfilename.replaceAll(':', '/'), txt: aux1
      })
    }
    const response = await fetch('/api/novoDoc', config)
    if (response.ok) {
      console.log(newfilename);
      id.value = newfilename
      readFile()
      console.log('dir', dir);
      ajustaPonteiro({operation: 'add', operationId: newfilename})
    }
  }catch{
    console.log('erro!');
  }
}

const ajustaPonteiro = (obj) => {
  useFetch('/api/read?filename=' + 'content/' + dir + '/_index.md').then(ret1=>{
    let auxy = []
    const auxProps = ret1.data.value.trim().split('---')[1].trim()
    const auxPropsYml = yaml.load(auxProps);

    useFetch('/api/readDir?dir=' + dir).then(ret=>{
      if (obj.operation == 'reset') {
        alert('reset!')
        auxPropsYml.files = ret.data.value.map(x=>x._id)
      }

      if (obj.operation == 'add') {
        auxPropsYml.files.push(obj.operationId)
      }

      if (obj.operation == 'reduce') {
        auxPropsYml.files = auxPropsYml.files.filter((x: any)=>(x!=obj.operationId))
      }

      auxPropsYml.files = auxPropsYml.files.filter(x=>(x!='content:'+dir+':_index.md'))
      
      let aux2Content = "---\n"+JSON.stringify(auxPropsYml, null, 2)+"\n---\n" + txt_texto.value
      // txt.value = aux2Content
      try {
        const config = {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({fileName: ('content:' + dir + ':_index.md').replaceAll(':', '/'), data: aux2Content})
        }
        const response = fetch('/api/saveFileContent', config)
        if (response.ok) {
          //
        } else {
            console.log("save file error");
        }
      } 
      catch (error) {
        console.log("save api error");
      }
    })
    aleradySaved.value = true
  })
}

watch(txt_propiedades, (data) => {
  txt.value = '---\n' + txt_propiedades.value + '\n---\n' + txt_texto.value
  txt_parans = yaml.load(data);
  aa()
})

watch(txt_texto, (data) => {
  console.log("watch txt_texto called");
  txt.value = '---\n' + txt_propiedades.value + '\n---\n' + txt_texto.value
  aa()
})

const openNewFile = (x) => {
  document.getElementById('iframe').contentWindow.postMessage(
      {op: 'redirect', 
      id: x }
  )
}

async function read(content='') {
 

    if (!content){
      
      try {
        
        const { data: ret } = await useFetch('/api/read?filename=' + id.value.replaceAll(':', '/'))
        txt.value = ret.value
      
      
      } catch (error) {
        console.log("Load file error");
      }
    
    }else{
      txt.value = content
    }
   
   
   
    let index = localdata.findIndex((item) => item.id === id.value);
    if(index===-1){
      console.log("salvo local!");
      localsave()
    }
    txt_propiedades.value = txt.value.trim().split('---')[1].trim()
    txt_parans = yaml.load(txt_propiedades.value);
    txt_texto.value = txt.value.trim().split('---')[2].trim()
  
}

function aa() {
    dataBkp = txt.value
    save()
    const aux = (document?.getElementById('iframe') as HTMLIFrameElement);
    aux.contentWindow?.postMessage(
      {
        refresh: true, 
        op: 'redirect',
        id: id.value
        // fileList: JSON.parse(JSON.stringify(fileList))
      }, '/');
    aleradySaved.value = false
    
  }

const readFile = () => {
  read()
  activeTab()
  
  // aa()
  // watch(txt, (data) => {
  //   console.log('watch txt called');
  //   aa()
  // })
}

async function save() {
  status.value = 'salvo'
  try {
    const config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({filename: id.value.replaceAll(':', '/').trim(), txt: txt.value})
    }
    const response = await fetch('/api/save', config)
    if (response.ok) {
      aleradySaved.value = true
    } else {
      console.log("save file error");
    }
  } 
  catch (error) {
    console.log("save api error");
  }
}

const loadConfigFile = async () => { 
  const { data: ret } = await useFetch('/api/read?filename=public/config.json')
  configtextarea.value = ret.value
}

const saveConfigFile = async () => {
  try {
      const config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({filename: 'public/config.json', txt: configtextarea.value})
    }
    const response = await fetch('/api/save', config)
    if (response.ok) {
      aleradySaved.value = true
    } else {
      console.log("save file error");
    }
  } 
  catch (error) {
    console.log("save api error");
  }
}

const reloadIframe = () => {
  document.getElementById('iframe').contentWindow.location.reload(true)
}
let flagA = false

const iframeEvent = (event) => {
  fileType.value = event.data.type
  console.log('fileType:', fileType.value);
  fileList.value = event.data.fileList
  if (fileType.value == 'dir') {
    id.value = event.data.id
    if (event.data.content){
      console.log(event.data.content);
      read(event.data.content)
    }
  }else{
    fileList.value = event.data.fileList
    id.value = event.data.id
    id_target.value = event.data.id.split('|')[1]
  }
  console.log('id.value:', id.value);
  
  dir = splitLastOccurrence(id.value, ':')[0].replace('content:','')
  // console.log('dir:', dir);
  flagA = true
  readFile()
}

if (process.client){

  document.onkeydown = async function(e) {
    if (e.ctrlKey && e.keyCode === 83) {
      e.preventDefault();
      localsave()
      save()
      return false;
    }
  };
  window.addEventListener("message", iframeEvent, false);
}	
</script>

<style scoped>
.nav-tabs {
  
  background-color: rgb(112, 105, 105) !important;
}


  .nav-item {
    /* font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
    /* font-size: 15px; */
    /* color: aliceblue; */
    /* height: 20px; */
    /* padding-bottom: 30px; */
  }
 
  .nav-link {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 15px;
    color: aliceblue;
    /* height: 30px; */
    /* padding-bottom: 30px; */
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

  .dropdown-item {
    font-size: 14px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  button {
    font-size: 14px;
    color: aliceblue;
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
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0px;
    color:aliceblue;
    background-color:rgb(63, 63, 63);
    outline: none;
    resize: none;
  }
</style>