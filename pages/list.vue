<template>
    <div class="body bg-dark">
        <div class="container-fluid pb-1 bg-dark" style="padding-top: 0px; height: 100vh;">
            <div class="text-light" style="font-family: 'Courier New', Courier, monospace; font-size: 15px;">
                <div class="mb-2">
                    Local: <a href='?dir='>upload</a>
                    <span v-for="item in montaBradCrumbs(dir)">
                        <a :href="'?dir='+item[1]">{{ item[0] }}</a> /
                    </span>
                </div>
                <div class="btn-group btn-sm mb-4"> 
                    <button class="btn btn-outline-secondary" @click="imageCardPanelFlag=!imageCardPanelFlag">Propriedades</button>
                    <button type="button" class="btn btn-outline-secondary"  @click="novapastaBoxOpen">Nova pasta</button>
                    <label class="btn btn-outline-secondary" for="inputGroupFile">Enviar imagem</label>
                </div>
            </div>
            <div v-if="imgZoom" class="bg-dark pb-1 text-center">
                <a :href="imgZoom[0]" target="_blank">
                    <img :src='imgZoom[0]' class="rounded-3" style="max-height: 75vh; max-width: 95vw;"/>
                </a>
                <div class="mt-2"><p>{{ imgZoom[0] }} - [{{ imgZoom[1].width }}/{{ imgZoom[1].height }}]</p></div>
            </div>
            <div class="p-3 m-3" v-if="novaPastaFlag" style="width: 300px; height: 170px; background-color: rgb(188, 196, 196);">
                <div><h4>Nova pasta</h4>
                    <div class="mb-3">
                        <!-- <label for="dirname" class="col-form-label">Nome:</label> -->
                        <input ref="novapasta_ref" style="width: 250px;" type="text" class="form-control" name="dirname" v-model="dirname" id="dirname">
                    </div>
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
            <form style="display: none;" @submit.prevent="handleImageUpload">
                <input type="file" class="form-control invisible"  id="inputGroupFile" @change="handleFile($event)">
                <input type="submit" ref="submitBtn" class="btn btn-primary invisible" />   
            </form>
            <div class="row gap-0 bg-dark">
                <div class="col-sm-3 mb-4 col-lg-3" v-for="item in stateStore">
                    <div class="card text-center" style="width: 15rem; _height: 500px; background-color: rgb(53, 52, 52);">
                        <div v-if="item[1]" style="height: 15vw;">
                           <br/>
                            <a :href="'?dir=' + dir + '/' + item[0]" style="text-decoration: none; ">
                                <img src="/img/folder.png" style="width: 100px; margin-right: 10px;">
                                <br/>{{ item[0] }}
                            </a>    
                        </div>
                        <img v-else @click="gotop(); imgZoom=['/upload/' + dir + '/' + item[0], item[2]]" :src="'/upload/' + dir + '/' + item[0]"  class="card-img-top" style="border-radius: 5px;"/>
                        <div v-if="imageCardPanelFlag" class="card-body">
                            <div v-if="!item[1]" class="row">
                                <div class="col-7">
                                    <input class="card-text bg-dark text-light border-0" style=" width: 130px; font-size: 14px;"  :value=" '/upload' + dir + '/' + item[0] " />
                                </div>
                                <div class="col-5">
                                    <p v-if="!item[1]" class="mt-1 bg-primary">{{item[2].width}} / {{ item[2].height }}</p> 
                                </div>
                            </div>
                            
                            <div style="margin-top: 5px;">
                                <div class="btn-group btn-sm"> 
                                    <button  class="btn btn-outline-secondary btn-sm" @click="deleteFile('/upload' + dir + '/' + item[0])">
                                        Excluir
                                    </button>
                                    <button  class="btn btn-outline-secondary btn-sm" @click="rename.openBox(dir, item[0])">
                                        Renomear
                                    </button>
                                </div>
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
    </div>   
</template>
<script setup>
definePageMeta({
    layout: ''
})

import * as fs from 'fs';
import sizeOf from "image-size"

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
let imgZoom = ref(null)
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


function gotop(){
    window.scrollTo(0,0);
}
const novapastaBoxOpen = () => {
    novaPastaFlag.value = true
    nextTick(() => {
        novapasta_ref.value.focus()
    });
}

if (process.server){
    fileList = fs.readdirSync('./public/upload/' + dir)
    fileList.map((x, index) => {
        let isDir = fs.lstatSync('./public/upload/' + dir + '/' + x).isDirectory()
        totalFileList.push([x, isDir, isDir||sizeOf('./public/upload/' + dir + '/' + x)])   
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
a {
    color:#ffffff;
}

p {
    color: #ffffff;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 13px;
}
.card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}
.body {
  scrollbar-3dlight-color: #000000;
  scrollbar-arrow-color: #ffffff;
  scrollbar-darkshadow-color: #000000;
  scrollbar-face-color: #000000;
  scrollbar-highlight-color: #ffffff;
  scrollbar-shadow-color: #ffffff;
  scrollbar-track-color: #000000;
}

input[type="file"] {
    margin-left: -2px !important;

    &::-webkit-file-upload-button {
        display: none;
    }
    &::file-selector-button {
        display: none;
    }
}

.dropdown-item {
    font-size: 15px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
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