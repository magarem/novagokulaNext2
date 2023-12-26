<template>
    <div style="padding-top: 100px;">
    <form action="/api/upload" method="post" enctype="multipart/form-data">
        <label for="file">File</label>
        <input id="photo" name="photo" type="file" @change="onFileChange"/>
        <button type="submit" >Upload</button>
        <div id="preview">
            <img v-if="url" :src="url" />
        </div>
    </form>
    </div>
</template>
<script setup>
    let url = ref(null)
    const onFileChange = (e) => {
        alert(e)
        const file = e.target.files[0];
        url = URL.createObjectURL(file);
    }
</script>
<style scoped>
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
    max-height: 500px;
    }
</style>