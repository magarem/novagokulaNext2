<script setup>
defineProps(['items'])
</script>

<template>
  <!-- <section class="slick-slideshow" _style="object-fit: cover; ">   -->
    <!-- <li v-for="item in items">  -->
      
      


      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
        
         
          <div class="carousel-item" :class="{ active: index==0}" v-for="(item, index) in items">
            <img :src="item.img" class="d-block w-100"  alt="...">
          </div>


        
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>






      <!-- <div class="slick-custom">
        <img :src="item.img" class="img-fluid" style="height: 350px;" alt=""/>
        <div class="slick-bottom">
            <div class="container">
                <div class="row" >
                    <div class="col-lg-6 col-10">
                    </div>
                </div>
            </div>
        </div>
        </div> -->
    <!-- </li> -->
  <!-- </section> -->
</template>
<style>
.carousel .carousel-item {
  height: 600px;
}

.carousel-item img {
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    min-height: 400px;
}

@media only screen and (min-device-width: 360px){

  .carousel .carousel-item {
  height: 400px;
}
}
@media only screen and (min-device-width: 970px){

.carousel .carousel-item {
height: 500px;
}
}
</style>