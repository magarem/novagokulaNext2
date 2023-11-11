<template>
    <!-- <div style="height: 400px; background-color: rgba(0,0,255,.1) shadow ">
        <img src="/images/jaganata.jpg" style="width: 100%; height: 400px; object-fit: cover;"  alt=""/>
    </div> -->
    <section class="contact my-5 _section-padding pt-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-12">
                    <h5>Contato</h5>
                    <form class="contact-form me-lg-5 pe-lg-3" role="form">

                        <div class="form-floating">
                            <input type="text" name="name" id="name" class="form-control" placeholder="Nome" required/>

                            <label for="name">Nome</label>
                        </div>

                        <div class="form-floating my-4">
                            <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" class="form-control" placeholder="Email" required/>

                            <label for="email">Email</label>
                        </div>
                        
                        <div class="form-floating my-4">
                            <label for="subject">Assunto</label>
<br>
                            <select name="ops" id="ops">
                                <option value="">Selecione</option>
                                <option value="Visitacao">Visitação dia</option>
                                <option value="Hospedagem">Hospedagem</option>
                                <option value="Filosofia">Filosofia</option>
                                <option value="Grupo de yoga">Grupo de yoga</option>
                                <option value="Agência de turismo">Agência de turismo</option>
                                <option value="Foto e filmagem">Foto e filmagem</option>
                                <option value="doacao">Doações</option>
                                </select>
                            <!-- <input type="subject" name="subject" id="subject" class="form-control" placeholder="Assunto" required> -->

                        </div>

                        <div class="form-floating mb-4">
                            <textarea id="message" name="message" class="form-control" placeholder="Mensagem" required style="height: 160px"></textarea>

                            <label for="message">Mensagem</label>
                        </div>

                        <div class="col-lg-5 col-6">
                            <button type="submit" class="form-control">Enviar</button>
                        </div>
                    </form>
                </div>
                <div class="col-lg-6 col-12 mt-5 ms-auto">
                    <div class="row">
                        <div class="col-6 border-end contact-info">
                            <h6 class="mb-3">Nosso Email</h6>
                            <a href="mailto:faleconosco@novagokula.com.br" class="custom-link">
                                faleconosco@novagokula.com.br
                                <i class="bi-arrow-right ms-2"></i>
                            </a>
                        </div>
                        <div class="col-6 contact-info">
                            <h6 class="mb-3">Site</h6>
                            <a href="http://novagokula.com.br" class="custom-link">
                                novagokula.com.br
                                <i class="bi-arrow-right ms-2"></i>
                            </a>
                        </div>
                        <div class="col-6 border-top border-end contact-info">
                            <h6 class="mb-3">Nosso endereço</h6>
                            <p class="text-muted">Estr. Abílio José de Almeida, S/N - Ribeirão Grande, Pindamonhangaba - SP</p>
                        </div>
                        <div class="col-6 border-top contact-info">
                            <h6 class="mb-3">Mídias</h6>
                            <ul class="social-icon">
                                <li><a href="#" class="social-icon-link bi-messenger"></a></li>
                                <li><a href="#" class="social-icon-link bi-youtube"></a></li>
                                <li><a href="#" class="social-icon-link bi-instagram"></a></li>
                                <li><a href="#" class="social-icon-link bi-whatsapp"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
