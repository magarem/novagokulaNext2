<template>
  <!-- <div class="px-5" style="padding-top: 100px;" >
    <h2>{{ ret.yml?.title }}</h2>
    <div v-html="body">
    </div>
  </div> -->

  <section class=" pb-5">
        <h5 class="bread mb-5_ text-left" ><a href="/">Home</a> > {{ret.yml?.title}}</h5>
        <img v-if="ret.yml?.imgs" :src="ret.yml?.imgs[0]" style="width: 100%; " class="mb-3 img-fluid"/> 
        <div class="container pb-5 _pt-4">
            <div class="pt-0" _style="margin-top: 20px;">
                <section class="pt-0 products _section-padding ">
                    <h4 class="pb-3">{{ret.yml?.title}}</h4>
                    <div class="container">
                        <div v-if="ret.yml?.textImg" class="row mb-4">
                            <div class="col-12 col-md-4 text-end">
                                <img :src="ret.yml?.textImg[0]" style="_float: left; max-width:100%;" _style="width: 100%; " class="mb-3 img-fluid"/>
                            </div>
                            <div class="col-12 col-md-8" >
                                <div v-html="body">
                                </div>
                            </div>
                        </div>
                        <div v-else class="row mb-4">
                            <div class="col-12" >
                                <div v-html="body">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>    
            </div>
        </div>
    </section>
 

</template>

<script setup>

  import MarkdownIt from "markdown-it";
  const markdown = new MarkdownIt();
  const route = useRoute()
  console.log('preview:', route.query.preview);
 
  console.log(route.params.id) // { id: '123' }
  const { data: ret } = await useFetch('/api/le?id=' + route.params.id + '&preview=' + route.query.preview)
  // console.log(ret.value);
  // console.log(matter(ret.value));
  const body = markdown.render(ret.value.content);

  
</script>