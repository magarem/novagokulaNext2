<template>
    <div id="eventos" class="text-center" style="padding-top: 30px; padding-bottom: 50px; background-color: #E9BA86;">
        <h5 class="mb-4 text-center p-3" style="margin-top: 0px; margin-bottom: 0px; _background-color:antiquewhite; font-size: 25px; color:#181201;">{{a.title}}</h5>
        <div class="container-fluid px-5" >
            <div class="container_ text-center align-items-md-stretch pl-4 pr-4">
                <div class="h-100 text-center p-4 rounded-3" _style="padding-left: 100px; padding-right: 100px">
                    <div class="row text-center" >
                        <h5 class="text-center mb-3 pt-4" v-if="id">Outros</h5>
                        <div class="col mb-3" v-for="(item, index) in a.files" >
                            <div v-if="index < a.limitNumber" class="card border-3 shadow-none rounded-3" style="width: 100%; border-radius: 20%;">
                                <NuxtLink :to="{ path: '/masterpage/'+('content'+item._path).replaceAll('/',':')+'.md' } " >
                                    <img v-if="item.params_data.topimage" class="card-img card-img-top text-center" :src="item.params_data.topimage" alt="Card image cap"/>
                                    <img v-if="item.params_data.sideimage" class="card-img card-img-top " :src="item.params_data.sideimage" alt="Card image cap"/>
                                </NuxtLink>
                                <div class="card-body">
                                    <h5 class="card-title text-center">{{item.title}}</h5>
                                    <p class="card-text">{{item.desc}}</p>
                                    <p class="card-text"><small class="text-muted"></small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['refresh', 'datafile'])
console.log('props:', props.datafile);
import yaml from "js-yaml";
let a = ref()
const ret = await useFetch('/api/read?filename=' + props.datafile)
console.log('ret:', ret.data.value.split('---')[1]);
let params_data = yaml.load(ret.data.value.split('---')[1]).params_data
params_data.files = params_data.files.split('\n')

const { data: data_, refresh: refresh } = await useAsyncData(
		'eventos', () => queryContent()
		.where({ _id: { $in: params_data.files.map(x=>x.replaceAll('/',':')) } }).find()
    )

params_data.files = data_.value
const retData = (y) => {
    let q = y.replaceAll('/', ':')
    return data_.value.find(x=>x._id==q)
}

a.value = params_data
console.log('params_data::>', params_data);
watch(
    () => props.refresh,
    () => {
        refresh()
    }
)

</script>
<style scoped>
    .card-img {
        object-fit: cover;
        border-radius: 4%;
    }
    .card {
        background-color: transparent ;
        border: none;
    }
    .card-title {
        font-size: 17px;
        padding-bottom: 8px;
        color: black;
    }
    .card-body {
        background-color: transparent;
    }
</style>
  