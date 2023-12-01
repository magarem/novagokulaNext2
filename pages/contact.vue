<template>
    <!-- <div style="height: 400px; background-color: rgba(0,0,255,.1) shadow ">
        <img src="/images/jaganata.jpg" style="width: 100%; height: 400px; object-fit: cover;"  alt=""/>
    </div> -->
    <h5 class="mb-5_ text-left py-3" style="padding-left: 120px; margin-top: 70px; margin-bottom: 0px; background-color:antiquewhite; font-size: 17px;"><a href="/">Home</a> > Contato</h5>
    <section class="contact_ _my-5 _section-padding pt-1 pb-5" >
        <div class="container" style="padding-top: 1px;">
            <div class="row">
                <div class="col-lg-6 col-12">
                    <!-- Wrapper container -->
<div class="container py-4">

<!-- Bootstrap 5 starter form -->
            <form id="contactForm">

            <!-- Name input -->
            <div class="mb-3">
                <label class="form-label" for="name">Nome</label>
                <input class="form-control" id="name" type="text" placeholder="Nome" data-sb-validations="required" />
                <div class="invalid-feedback" data-sb-feedback="name:required">Digite o nome.</div>
            </div>

            <!-- Email address input -->
            <div class="mb-3">
                <label class="form-label" for="emailAddress">Email</label>
                <input class="form-control" id="emailAddress" type="email" placeholder="Email" data-sb-validations="required, email" />
                <div class="invalid-feedback" data-sb-feedback="emailAddress:required">Digite o email.</div>
                <div class="invalid-feedback" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
            </div>

            <div class="mb-3">
                <label class="form-label" for="emailAddress">Assunto</label>
                <select class="form-control" name="ops" id="ops">
                    <option value="">Selecione</option>
                    <option value="Visitacao">Visitação dia</option>
                    <option value="Hospedagem">Hospedagem</option>
                    <option value="Filosofia">Filosofia</option>
                    <option value="Grupo de yoga">Grupo de yoga</option>
                    <option value="Agência de turismo">Agência de turismo</option>
                    <option value="Foto e filmagem">Foto e filmagem</option>
                    <option value="doacao">Doações</option>
                </select>
            </div>



            

            <!-- Message input -->
            <div class="mb-3">
                <label class="form-label" for="message">Mensagem</label>
                <textarea class="form-control" id="message" type="text" placeholder="Mensagem" style="height: 10rem;" data-sb-validations="required"></textarea>
                <div class="invalid-feedback" data-sb-feedback="message:required">Entre com a mensagem</div>
            </div>

            <!-- Form submissions success message -->
            <div class="d-none" id="submitSuccessMessage">
                <div class="text-center mb-3">Formulário enviado!</div>
            </div>

            <!-- Form submissions error message -->
            <div class="d-none" id="submitErrorMessage">
                <div class="text-center text-danger mb-3">Erro de envio!</div>
            </div>

            <!-- Form submit button -->
            <div class="d-grid">
                <button class="btn btn-primary btn-lg" type="submit">Enviar</button>
            </div>

            </form>

            </div>
                </div>
                <div class="col-lg-6 col-12 mt-5 ms-auto">
                    <div class="row mb-3">
                        <div class="col-12 _border-end contact-info">
                            <h6 class="mb-3">Nosso Email</h6>
                            <a href="mailto:faleconosco@novagokula.com.br" class="custom-link">
                                faleconosco@novagokula.com.br
                                <i class="bi-arrow-right ms-2"></i>
                            </a>
                        </div>
                    </div>
                    <div class="row">   
                        <div class="col-12 _border-top _border-end contact-info">
                            <h6 class="mb-3">Nosso endereço</h6>
                            <p class="text-muted">Estr. Abílio José de Almeida, S/N - Ribeirão Grande, Pindamonhangaba - SP</p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
    definePageMeta({
        layout: 'default2'
    })
</script>