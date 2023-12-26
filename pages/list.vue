<template>
   
    <div class="container-fluid pb-5" style="padding-top: 10px;">
        <div style="margin-bottom: -45px;">
            <form @submit.prevent="handleImageUpload">
                <!-- <div _class=" custom-file-button"> -->
                    <label class="input-group-text btn btn-primary" for="inputGroupFile">Enviar imagem</label>
                    <input type="file" class="form-control invisible"  id="inputGroupFile" @change="handleFile($event)">
                    <input type="submit" ref="submitBtn" class="btn btn-primary invisible" />
                <!-- </div> -->
            </form>
        </div>
        <div class="row gap-0">
            <div class="col-sm-3 mb-4" v-for="item in stateStore">
                <div class="card " style="width: 15rem; _height: 500px;">
                    <img :src="'/upload/' + item"  class="card-img-top" _style="width: 200px; padding: 10px;"/>
                    <div class="card-body">
                        <!-- <h5 class="card-title">Card title</h5> -->
                        <p class="card-text">          
                            {{ '/upload/' + item }}
                        </p>
                        <!-- <a :href="'/upload/' + item" class="btn btn-primary">Ampliar</a> -->
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

let fileList = ref(['ss']) 
let url = ref(null)
const files = ref();
const submitBtn = ref()
const stateStore = useState()
let uploadedFileName = ref()
    
if (process.server){
    fileList = fs.readdirSync('./public/upload')
    console.log(fileList);
    stateStore.value = fileList.reverse()
}

async function handleImageUpload() {
    try {
        const fd = new FormData();
        Array.from(files.value).map((file, index) => {
        fd.append("photo", file);
        });
        // const { data } = await $fetch('/api/upload', {
        //     method: 'POST',
        //     body: fd,
        // });

        const { data, pending, error, refresh } = await useAsyncData(
        'mountains',
            () => $fetch('/api/upload', {
                method: 'POST',
                body: fd,
            }
        ))

        console.log('data from backend is ', data.value);
        stateStore.value.unshift(data.value)
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