<template>
    <div class="p-5">
        {{ data }}
        <FormKit type="form" v-model="data">
            <FormKitSchema  :data="data" :schema="yourSchemaArray" />
              
        </FormKit>
    </div>
</template>
<script setup>
    definePageMeta({
        layout: ''
    })
    import { FormKitSchema } from '@formkit/vue'
    let txt = ref({})
    const data = ref()
    let yourSchemaArray= [
        {
            $formkit: 'text',
            name: 'title',
            label: 'Titulo',
            help: 'Título da página',
        },
        {
            $formkit: 'password',
            name: 'password',
            label: 'Password',
            help: 'Enter your new password.'
        }
    ]

</script>