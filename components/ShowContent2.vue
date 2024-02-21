<template>
       <ContentRenderer  :value="data[0]" />
    
</template>
<script setup>
    const route = useRoute()
    // const id = route.params.id
    const props = defineProps(['refresh'])
    // let contentFileData = ref()

    // console.log('>>>id', id.replace('.md',''));
    const { data: data, refresh: refreshMain } = await useFetch('/api/readDir?id=content:home:_index.md')
    // contentFileData.value = data.value


    // const { data: data, refresh: refreshMain } = await useAsyncData(
	// 	// 'bemvindo', () => queryContent('/home/bemvindo').findOne()
	// 	'teste', () => queryContent().where({_id: id}).find()
	// )
    // contentFileData.value = data.value
    watch(
        () => props.refresh,
        () => {
            refreshMain()
        }
    )
</script>