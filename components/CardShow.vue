<template>
    <section class="products mt-5 _section-padding"> 
            <div class="container">
                <div class="row">
                    <!-- <div class="col-12">
                        <h2 class="mb-5">{{sessiontitle}}</h2>
                    </div>  -->
                    <div class="row mb-5">
                        <div class="col-md-4 col-sm-12 bg-slate-400">
                            <div style="max-width: 400px">
                                <img :src="items[index].imgs[0]" class="img-fluid product-image" alt=""/>
                            </div>
                        </div>
                        <div class="col-md-8 col-sm-12 bg-gray-950">
                            <h4>{{items[index].title}}</h4>
                            <p v-html="items[index].body"></p>
                        </div>
                    </div>
                        <!-- <div class="row mt-3">

                            <li v-for="item in items">
                                <a :href="'eventos?id='+item.id">
                                    {{ item.title }}
                                </a>
                            </li>
                            <br/><br/><br/>
                        </div> -->
                </div>
            </div>
        </section>
</template>
<script setup>
    const props = defineProps(['sessiontitle', 'items', 'id'])
    const index = props.items.findIndex(x=>x.id==(props.id||1))
    console.log('index:', index)
    console.log(props.sessiontitle, props.items, props.id);
</script>