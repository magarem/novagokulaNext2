<template>
    <div v-for="item in data">
        <!-- <img v-if="item.params_data.topimage" :src="(item.params_data.topimage.charAt(0)=='/')?item.params_data.topimage:'/'+item.params_data.topimage" style="width: 100%;" class="img-fluid"/>  -->
        <div class="col-sm-12 text-center mx-0 px-0">
            <img v-if="item.params_data?.topimage" :src="item.params_data.topimage" style="max-width: 100%;" class="img-fluid img-responsive"/> 
        </div>
        <div class="container" >
            <div class="row mx-1 mx-md-5">
                <div class="text-ceter h-100" >
                <h1 class="pb-3 mt-3 text-center" >{{item.params_data.title}}</h1>
                
                <div class="col-12 col-md-12" _class="col-12 col-md-4 col-lg-4 text-end">
                    <img v-if="item.params_data.sideimage" class="rounded" :src="item.params_data.sideimage" style="float: left; margin-right: 20px; margin-bottom: 2px; max-width:270px;" _class="mb-3 img-fluid"/>
                    <!-- <p v-if="item.params_data.description">{{item.params_data.description}}</p> -->
                    <ContentRenderer v-if="item.body.children.length>0" :value="item" />
                </div>

                </div>
                
            </div>
        </div>
    </div>
</template>
<style scoped>
    .img-responsive {
    display: inline-block;
    }
</style>
<script setup>
    const route = useRoute()
    const id = route.params.id
    const props = defineProps(['refresh'])
    // let contentFileData = ref()

    console.log('>>>id', id.replace('.md',''));
    const { data: data, refresh: refreshMain } = await useFetch('/api/readDir?id=' + id)
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