<template>
  <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

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
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
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
// const imgsList = () => {
    
    if (process.server){
        fileList = fs.readdirSync('./public/upload')
        console.log(fileList);
        stateStore.value = fileList
    }
// }
    
// imgsList()

const onFileChange = () => {
  document.getElementById('real-file').click();
  document.getElementById("file-id").files[0].name; 
  console.log();
}

const fileName = (e) => {
  uploadedFileName.value = e.target.value.replace("c:","");
  
}

const deleteFile = () => {
  uploadedFileName.value = null;
}



const displaySelectedImage = (event, elementId) => {
    const selectedImage = document.getElementById(elementId);
    const fileInput = event.target;

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            // selectedImage.src = e.target.result;
            url.value = URL.createObjectURL(e.target.result);
        };

        reader.readAsDataURL(fileInput.files[0]);
    }
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
            stateStore.value.push(data.value)
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