<template>
    <footer id="footer" class="footer" style="margin-top: 0px;">
        <!-- Footer Top -->
        <div class="footer-top">
            <div class="container">
                <div class="row gy-5">
                    <div class="col-lg-3 col-md-6 col-12"><a href="generic2?id=ofundador">
                        <div class="single-footer">
                            <h2>{{footer.box1.title}}</h2>
                            <div class="text-center_" style="width: 100%;">
                            <img :src="footer.box1.img" style="width: 180px; margin-bottom: 10px;">
                            </div>
                            <p v-html="footer.box1.body"></p>
                            <a v-if="footer.box1.link.label" :href="footer.box1.link.target">{{footer.box1.link.label}}</a>

                        </div></a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12">
                        <div class="single-footer">
                            <h2>{{footer.box2.title}}</h2>
                            <!-- Facebook -->
                            <!-- Facebook -->
                            <div class="mb-3">
                                <a class="btn btn-primary border-0" style="margin-right:10px; background-color: #3b5998;" :href="footer.box2.links.facebook" role="button"
                            ><i class="fab fa-facebook-f"></i></a>
                            <!-- Instagram -->
                            <a class="btn btn-primary border-0" style="margin-right:10px; background-color: #ac2bac;" :href="footer.box2.links.instagram" role="button"
                            ><i class="fab fa-instagram"></i
                            ></a>
                            <!-- Youtube -->
                            <a class="btn btn-primary border-0" style="margin-right:10px; background-color: #ed302f;" :href="footer.box2.links.youtube" role="button"
                            ><i class="fab fa-youtube"></i
                            ></a>
                            <!-- Tiktok -->
                            <a class="btn btn-primary border-0" style="background-color: #25d366;" :href="footer.box2.links.tiktok" role="button"
                            ><i class="fab fa-tiktok"></i
                            ></a> 
                            </div>
                           
                            <p>{{footer.box2.body}}</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12">
                        <div class="single-footer">
                            <h2>{{footer.box3.title}}</h2>
                            <p v-html="footer.box3.body"></p>
                            <a v-if="footer.box3.link.label" :href="footer.box3.link.target">{{footer.box3.link.label}}</a>

                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12">
                        <div class="single-footer">
                            <h2>{{footer.box4.title}}</h2>
                            <p v-html="footer.box4.body"></p>
                            <a v-if="footer.box4.link.label" :href="footer.box4.link.target">{{footer.box4.link.label}}</a>
                            <!-- <form action="mail/mail.php" method="get" target="_blank" class="newsletter-inner">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="button-addon2">
                                    <button class="btn btn-outline-primary" type="button" id="button-addon2">Enviar</button>
                                </div>
                            </form> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--/ End Footer Top -->
        <!-- Copyright -->
        <div class="copyright" style="margin-top: 50px;">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-12">
                        <div class="copyright-content text-center">
                            <!-- <a :href="'http://159.89.143.16:3000/testesave?id=' + id" target="_blank">Editar página</a> -->
                            <p>{{ footer.copyright.body }}</p>
                            <a v-if="footer.copyright.link.label" :href="footer.copyright.link.target">{{footer.copyright.link.label}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--/ End Copyright -->
        <!-- <nav class="nuxt_preview navbar navbar-light navbar-expand bg-light fixed-bottom">
        teste
        </nav> -->
    </footer>
</template>
<script setup>
    import data from "~/public/config.json"
	const footer = data.footer
    const route = useRoute()
    const id = route.params.id
    // console.log(urlParams.get('yourParam')); // "MyParam"
</script>
<style scoped>
.nuxt_preview_ {
    align-items: center;
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    background: hsla(0, 94%, 47%, 0.998);
    border-top: 1px solid #eee;
    bottom: -60px;
    color: #000;
    display: flex;
    font-family: Helvetica,sans-serif;
    font-size: 16px;
    font-weight: 500;
    gap: 10px;
    height: 50px;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    transition: bottom .3s ease-in-out;
    z-index: 10000;
}
</style>