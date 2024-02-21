<template>
   <div class="text-light">
    <div v-for="i in Object.entries(schema)">
        <label class="mb-1 mt-2" :for="name">{{i[1].label}}:</label><br/>
        <template v-if="i[1].type=='string'">
            <input
                class="w-100 mb-3 p-2 text-light bg-dark border rounded"
                type="text"
                :name="i[0]"
                v-model="data[i[0]]"
            />
        </template>
        <template v-if="i[1].type=='textarea'">
            <textarea 
                @keypress.enter="trigger(data[i[0]])"
                class="w-100 mb-3 p-2 text-light bg-dark border rounded"
                :name="i[0]"  
                v-model="data[i[0]]"
                rows="6"
            >
            </textarea>
        </template>
        <template v-if="i[1].type=='text+button'">
            <img v-if="data[i[0]]" :src="data[i[0]]" class="mb-3" style="width: 50px;"/>
            <div class="input-group mb-3">
                <button class="btn btn-outline-secondary" type="button" @click="clearInputBox(i[0])">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </button>
                <input
                    class="form-control p-2 text-light bg-dark border "
                    type="text"
                    :name="i[0]"
                    v-model="data[i[0]]"
                />
                <button class="btn btn-outline-secondary" type="button" @click="$emit(i[1].buttonLink.link, i[0])">{{i[1].buttonLink.label}}</button>
            </div>
        </template>
    </div>
    <!-- <button class="mt-4 btn btn-success" @click="$emit('save', data)">Salvar</button> -->
   </div>
</template>
<script setup>
const props = defineProps(['dataTemp', 'data', 'schema', 'itemSelected'])
// const schema_ = ref(props.schema)
// watch(
//     () => props.schema,
//     () => {
//         // for (const [key, value] of Object.entries(obj.params_schema)) {
//         // console.log(`${key}: ${JSON.stringify(value)}`);
//         schema_.value = Object.entries(props.schema)
//     }
// )

// watch(
//     () => props.dataTemp,
//     () => {
//         props.data[props.dataTemp.id] = props.dataTemp.data
//         console.log('prop value changed', props.dataTemp)
//     }
// )




// let g = []
// Object.entries(props.schema).map(y=>{
//     [["name", "titulo"], ["type", "textarea"]]
//     if (y.type=='textarea')
//     g.push([y[0],y[1]+'\r\n'])
// })

const trigger = (event) => {
    // event = event.replaceAll('\n', ',')
    // alert(event)
}
watch(
    () => props.dataTemp,
    () => {
        props.data[props.dataTemp.id] = props.dataTemp.data
        console.log('prop value changed', props.dataTemp)
    }
)

const clearInputBox = (el) => {
    // imageName.value = ''
    props.dataTemp = ''
    props.data[el] = ''
}

</script>
<style scoped>
</style>