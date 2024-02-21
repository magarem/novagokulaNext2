<template>
    <h5 class="bread text-left" > 
        <router-link to="/home" >
        Home
        </router-link>
        <router-link v-if="!id.split(':')[1].includes('.md')" :to="dirName.link" >
        / {{ capitalizeFirstLetter(dirName.label) }}
        </router-link>
        <router-link v-if="!id.includes(':_index.md')" :to="'/' + id.replaceAll(':', '/')" >
            / {{ capitalizeFirstLetter(getTitle(id).params_data.title) }}
        </router-link>
    </h5>
</template>
<script setup>

function capitalizeFirstLetter(string) {
    if (string) return string.charAt(0).toUpperCase() + string.slice(1);
}

let dirName = ref({})
const route = useRoute()
const id = route.params.id

const { data: datax, refresh } = await useFetch('/api/readDir')
console.log('datax:', datax.value);

const getTitle = (id) => {
    // console.log('datax>>', JSON.stringify(datax.value?.find((x) => x._id == id), null,2))
    return datax.value?.find((x) => x._id == id)
}

dirName.value.label = id.split(':')[1]
dirName.value.link = 'content:' + id.split(':')[1] + ':_index.md'
</script>