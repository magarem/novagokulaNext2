<template>
    <div class="fileUpload">

        <h4>Image Overview</h4>
        <button @click="$refs.fileInput.click()" class="btn-right">Select an image</button>

        <table @row-clicked="viewImage" striped hover :items="images" :fields="image_fields"></table>

        <input style="display: none" ref="fileInput" type="file" @change="fileSelected" enctype="multipart/form-data">
        <button variant="success" class="btn-right" @click="uploadImage" method="post">Upload image</button>


</div>
</template>

<script setup>
definePageMeta({
        layout: ''
    })
 function  fileSelected(evt) {
            evt.preventDefault()
            console.log(evt);
            this.selectedFile = evt.target.files[0]
        }
function  uploadImage() {
            var data = new FormData();
            data.append('image', this.selectedFile, this.selectedFile.data)
            var token = sessionStorage.getItem('token')
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            window.API.post('https://110.10.56.10:8000/images/?token=' + token, data, config)
                .then(response => this.$router.push('/listImage'))
                .catch((error) => {
                    console.log(JSON.stringify(error))
                })
        }
</script>