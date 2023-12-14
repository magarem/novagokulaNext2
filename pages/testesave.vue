<script setup lang="ts">
 definePageMeta({
        layout: ''
    })
// const { data: ret } = await useFetch('/api/save', {data: 'testando'})
// console.log(ret.value);

  // console.log(editedTxt.value);
  
  // contentToSave.value = "asfasdsadsadsadsadasd"
// }
const route = useRoute()
const id = route.query.id
let filename = ref(id + '.md')
let txt = ref()
let filename_load = ref()

async function read(filename) {
  try {
      const config = {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          // body: data
          body: JSON.stringify({filename: filename})
      }
      const { data: ret } = await useFetch('/api/read?filename='+filename)
      //const json = await response.json()
      // if (response.ok) {
          //return json
         
          console.log(33, ret);
          txt.value = ret.value
          
      // } else {
      //     //
      // }
  } catch (error) {
          //
  }
}
async function save(data) {
  try {
      const config = {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          // body: data
          body: JSON.stringify(data)
      }
      const response = await fetch('/api/save', config)
      //const json = await response.json()
      if (response.ok) {
          //return json
          console.log(response.body);
          
      } else {
          //
      }
  } catch (error) {
          //
  }
}

const saveHandler = () => {
  console.log({filename: filename.value, txt: txt.value});
  
  save({filename: filename.value, txt: txt.value})
  alert("Página atualizada com sucesso!")
}

const readFile = () => {
  read(filename.value)
}

readFile()
</script>

<template>
  <div class="text-center" style="height: 400px; padding-top: 20px; background-color: white; color: darkblue;">
   <h1>Editar página</h1>
    File: <input v-model="filename"/><button @click="readFile">Open file</button><br/><br/>
    <div class="mx-lg-5">
      <textarea v-model="txt" style="width: 100%; height: 400px;"></textarea>
    </div>
    <!-- <img :src="'/img/'+ret[0]"> -->
    <br/><br/>
    <button @click="saveHandler">Salvar</button>
  </div>
  
</template>