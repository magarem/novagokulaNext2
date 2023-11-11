<template>
    <div class="media-component size-small">
      <button class="video-trigger" 
        @click="openVideo">
         Play
       </button>
       <ModalVideo channel="youtube" videoId="N731kV4pKNY" v-model:isOpen="videoIsOpen" />
    </div><!--.media-component-->
  </template>
  
  <script>
  import ModalVideo from '@/components/Modalvideo.vue'
  export default {
    components: {
      ModalVideo
    },
    data: () => {
      return {
        videoIsOpen: false
      }
    },
    methods: {
      openVideo() {
        this.videoIsOpen = !this.videoIsOpen
      }
    },
    computed: {
      videoChannel: function () {
        //Logic to extract based on URL
        return 'youtube'
      },
      videoId: function () {
        //Logic to extract based on URL
        return 'jUtI7qMf890'
      }
    }
  }
  </script>