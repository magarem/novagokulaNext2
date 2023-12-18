<template>
    <footer id="footer" class="footer" style="margin-top: 0px;">
        <!-- Footer Top -->
        <div class="footer-top">
            <div class="container">
                <div class="row gy-5">
                    <div class="col-lg-3 col-md-6 col-12"><a href="generic2?id=ofundador">
                        <div class="single-footer">
                            <h2>Srila Prabhupada</h2>
                            <div class="text-center_" style="width: 100%;">
                            <img src="/img/vedabase-logo.svg" style="width: 180px; margin-bottom: 10px;">
                            </div>
                            <p>Sua Divina Graça A.C. Bhaktivedanta Swami Prabhupada Mestre Fundador da Sociedade Internacional para a Consciência de Krishna</p>
                            <!-- Social -->
                            <!-- <ul class="social">
                                <li><a href="https://www.facebook.com/FazendaNovaGokula"><i class="icofont-facebook"></i></a></li>
                                <li><a href="https://www.instagram.com/novagokula/"><i class="icofont-instagram"></i></a></li>
                                <li><a href="https://www.tiktok.com/@novagokula"><i class="icofont-tiktok"></i></a></li>
                                <li><a href="https://www.flickr.com/photos/novagokula"><i class="icofont-flickr"></i></a></li>
                                <li><a href="https://www.youtube.com/@FazendaNovaGokulaNG"><i class="icofont-flickr"></i></a></li>
                            </ul> -->
                            <!-- End Social -->
                        </div></a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12">
                        <div class="single-footer">
                            <h2>Mídias sociais</h2>
                            <!-- <p> Estrada Jesus Antonio de Miranda Bairro: Riberão Grande Pindamonhangaba - São Paulo - Brasil</p> -->
                            <!-- Facebook -->
                        <!-- Facebook -->
                            <a class="btn btn-primary border-0" style="margin-right:10px; background-color: #3b5998;" href="https://www.facebook.com/FazendaNovaGokula" role="button"
                            ><i class="fab fa-facebook-f"></i></a>
                            <!-- Instagram -->
                            <a class="btn btn-primary border-0" style="margin-right:10px; background-color: #ac2bac;" href="https://www.instagram.com/novagokula/" role="button"
                            ><i class="fab fa-instagram"></i
                            ></a>
                            <!-- Youtube -->
                            <a class="btn btn-primary border-0" style="margin-right:10px; background-color: #ed302f;" href="https://www.youtube.com/c/FazendaNovaGokulaNG" role="button"
                            ><i class="fab fa-youtube"></i
                            ></a>
                            <!-- Tiktok -->
                            <a class="btn btn-primary border-0" style="background-color: #25d366;" href="https://www.tiktok.com/@novagokula" role="button"
                            ><i class="fab fa-tiktok"></i
                            ></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12">
                        <div class="single-footer">
                            <h2>Endereço</h2>
                            <p> Estrada Jesus Antonio de Miranda Bairro: <br/>Riberão Grande Pindamonhangaba <br/> São Paulo <br/> Brasil</p>
                            <!-- <ul class="time-sidual">
                                <li class="day">Monday - Fridayp <span>8.00-20.00</span></li>
                                <li class="day">Saturday <span>9.00-18.30</span></li>
                                <li class="day">Monday - Thusday <span>9.00-15.00</span></li>
                            </ul> -->
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12">
                        <div class="single-footer">
                            <h2>Newsletter</h2>
                            <p>Inscreva-se em nossa newsletter e seja o primeiro a saber sobre todas as novidades da nossa comunidade Hare Krishna em Pindamonhangaba. Receba atualizações exclusivas diretamente na sua caixa de entrada."</p>
                            <form action="mail/mail.php" method="get" target="_blank" class="newsletter-inner">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="button-addon2">
                                    <button class="btn btn-outline-primary" type="button" id="button-addon2">Enviar</button>
                                </div>
                            </form>
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
                            <a :href="'http://159.89.143.16:3000/testesave?id=' + id" target="_blank">Editar página</a>
                            <p>© Copyright 2023  |  Todos os direitos reservados novagokula.com.br </p>
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