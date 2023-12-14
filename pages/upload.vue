<template>
    <div style="padding-top: 100px;">
    <form action="/api/upload" method="post" enctype="multipart/form-data">
        <label for="file">File</label>
        <input id="file" name="photo" type="file" />
        <button type="submit">Upload</button>
    </form>
    </div>
    
</template>
  