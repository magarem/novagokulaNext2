<template>
   
    <div class="container-fluid pb-5" style="padding-top: 0px;">
        <h5>
            Local: <a href='?dir='>upload</a>
            <span v-for="item in montaBradCrumbs(dir)">
                <a :href="'?dir='+item[1]">{{ item[0] }}</a> /
            </span>
        </h5>
        <div class="p-3 m-3" v-if="novaPastaFlag" style="width: 300px; height: 170px; background-color: rgb(188, 196, 196);">
            <div><h4>Nova pasta</h4>
                <form>
                    <div class="mb-3">
                        <!-- <label for="dirname" class="col-form-label">Nome:</label> -->
                        <input ref="novapasta_ref" style="width: 250px;" type="text" class="form-control" name="dirname" v-model="dirname" id="dirname">
                    </div>
                </form>
            </div>
            <div>
                <button type="button" class="btn btn-secondary" style="margin-right: 5px;" @click="novaPastaFlag=false">Cancelar</button>
                <button type="button" class="btn btn-primary" @click="mkdir">Ok</button>
            </div>
        </div>
        <div class="p-3 m-3" v-if="rename.flag" style=" border-radius: 10px; width: 750px; height: 140px; background-color: rgb(188, 196, 196); padding: 15px;">
            <div><h4>Renomear</h4>
                <form>
                    <div class="mb-3">
                        <div class="row">
                            <div class="col">
                                <input type="hidden" v-model="rename.dir"  id="dir">
                                De: <input style="width: 250px;" type="text" class="form-control mb-2" name="rename_oldname" v-model="rename.oldName"  id="dirname">
                            </div>
                            <div class="col">
                                Para: <input  ref="ttt" style="width: 250px;" type="text" class="form-control" name="rename_newname" v-model="rename.newName" id="dirname">
                            </div>
                            <div class="col mt-4">
                                <button type="button" class="btn btn-secondary" style="margin-right: 5px;" @click="rename.flag=false">Cancelar</button>
                                <button type="button" class="btn btn-primary" @click="rename.do">Ok</button>
                            </div>
                        </div>
                        <!-- <label for="dirname" class="col-form-label">Nome:</label> -->
                    </div>
                </form>
            </div>
        </div>
        <div style="margin-bottom: -45px;">
                <div class="col-auto">
                    <button style="margin-right: 5px;" class="btn btn-primary btn-sm" @click="imageCardPanelFlag=!imageCardPanelFlag">...</button>
                
                    <button type="button" class="btn btn-primary btn-sm" style="margin-right: 5px;" @click="novapastaBoxOpen">Nova pasta</button>
                
                    <label class="input-group-text btn btn-primary btn-sm" for="inputGroupFile">Enviar imagem</label>
                </div>
            <form @submit.prevent="handleImageUpload">
                <input type="file" class="form-control invisible"  id="inputGroupFile" @change="handleFile($event)">
                <input type="submit" ref="submitBtn" class="btn btn-primary invisible" />   
            </form>
        </div>
        <div class="row gap-0">
            <div class="col-sm-3 mb-4" v-for="item in stateStore">
                <div class="card text-center" style="width: 15rem; _height: 500px;">
                    <div v-if="item[1]">
                        <a :href="'?dir='+ dir + '/' + item[0]">
                          <img src="/img/folder.png" style="width: 100px; margin-right: 10px;">
                          {{ item[0] }}
                        </a>    
                    </div>
                    <img v-else :src="'/upload/' + dir + '/' + item[0]"  class="card-img-top" _style="width: 200px; padding: 10px;"/>
                    <div v-if="imageCardPanelFlag" class="card-body">
                        <input class="card-text" style="margin-bottom: 10px; width: 150px; font-size: 15px;"           
                            :value=" '/upload' + dir + '/' + item[0] " />
                        <div>
                         <button style="margin-right: 5px;" class="btn btn-danger btn-sm" @click="deleteFile('/upload' + dir + '/' + item[0])">
                           Excluir
                        </button>

                        <button  class="btn btn-secondary btn-sm" @click="rename.openBox(dir, item[0])">
                            Renomear
                        </button>
                        
                        
                        </div>
                       
                        <!-- <div v-if="item[1]"><a :href="'?dir='+item[0]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder" viewBox="0 0 16 16">
                            <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
                        </svg>
                        </a></div> -->
                        <!-- <a :href="'/upload/' + item" class="btn btn-primary">Ampliar</a> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
<div ref="modalRef" class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Criar pasta</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="dirname" class="col-form-label">Nome:</label>
            <input type="text" class="form-control" name="dirname" v-model="dirname" id="dirname">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary" @click="mkdir">Ok</button>
      </div>
    </div>
  </div>
</div>






</template>
<script setup>
definePageMeta({
    layout: ''
})

import * as fs from 'fs';


const rename_ = {
    flag: false,
    dir: '',
    oldName: '',
    newName: '',
    do: async function(){
        const { data: ret } = await useFetch('/api/rename?oldname=' + this.dir + '/' + this.oldName + '&newname=' + this.dir + '/' + this.newName)
        this.flag = false
        this.ret = ret
        location.reload()
    },
    openBox: async function(dir, item){
        console.log(1);
        this.flag = true
        this.dir = '/upload' + dir
        this.oldName = item
        nextTick(() => {
            ttt.value.focus()
        });
        
    },
    ret: null
}

const rename = ref(rename_)

// import { Modal } from 'bootstrap';
const route = useRoute()

let imageCardPanelFlag = ref(false)
let dirname = ref("")
let fileList = ref(['ss']) 
let url = ref(null)
const files = ref();
const ttt = ref();
const novapasta_ref = ref();
const submitBtn = ref()
const stateStore = useState()
let uploadedFileName = ref()
let totalFileList = []
let dir = route.query.dir
let novaPastaFlag = ref(false)
const modalRef = ref(null);


const novapastaBoxOpen = () => {
    novaPastaFlag.value = true
    nextTick(() => {
        novapasta_ref.value.focus()
    });
}

if (process.server){
    fileList = fs.readdirSync('./public/upload/' + dir)
    fileList.map(x => {
        totalFileList.push([x, fs.lstatSync('./public/upload/' + dir + '/' + x).isDirectory()])
    })
    console.log(totalFileList);
    stateStore.value = totalFileList.reverse()
}


function montaBradCrumbs(atual){
    let x
    let arr_final = []
    let x1 = atual.split('/').reverse()
    for (let t=0; t<x1.length; t++){
        x = atual.lastIndexOf('/')
        atual = atual.substring(0, x);
        arr_final.push([x1[t], atual+'/'+x1[t]])
    }
    return arr_final.reverse()
}

async function mkdir(){
    const { data: count } = await useFetch('/api/mkdir?dirname=' + dir + '/' + dirname.value)
    novaPastaFlag.value = false
    location.reload()
}

async function deleteFile(file){
    if (confirm("Confirma exclusão do arquivo " + file + '?') == true) {
        const { data: count2 } = await useFetch('/api/delete?dirname=' + file)
        novaPastaFlag.value = false
        location.reload()
    }
}

async function handleImageUpload() {
    try {
        const fd = new FormData();
        Array.from(files.value).map((file, index) => {
        fd.append("photo", file);
        });

        const { data, pending, error, refresh } = await useAsyncData(
        'data',
            () => $fetch('/api/upload?dir=' + dir, {
                method: 'POST',
                body: fd,
            }
        ))

        console.log('data from backend is ', data.value);
        stateStore.value.unshift([data.value, false])
    } catch (error) {
        console.log(error);
    }
}

function handleFile(e) {
    files.value = e.target.files;
    const file = e.target.files[0];
    url.value = URL.createObjectURL(file);
    submitBtn.value.click();
}

</script>
<style scoped>
input[type="file"] {
    margin-left: -2px !important;

    &::-webkit-file-upload-button {
        display: none;
    }
    &::file-selector-button {
        display: none;
    }
}
#app {
padding: 20px;
}

#preview {
display: flex;
justify-content: center;
align-items: center;
}

#preview img {
max-width: 100%;
max-height: 200px;
}
</style>