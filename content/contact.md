---
title: 'Contato'
description: ''
---
<div>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-12">
                    <div class="container">
                        <form id="contactForm">
                            <div class="mb-3">
                                <label class="form-label" for="name">Nome</label>
                                <input class="form-control" id="name" type="text" placeholder="Nome" data-sb-validations="required" />
                                <div class="invalid-feedback" data-sb-feedback="name:required">Digite o nome.</div>
                            </div>
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
                            <div class="mb-3">
                                <label class="form-label" for="message">Mensagem</label>
                                <textarea class="form-control" id="message" type="text" placeholder="Mensagem" style="height: 10rem;" data-sb-validations="required"></textarea>
                                <div class="invalid-feedback" data-sb-feedback="message:required">Entre com a mensagem</div>
                            </div>
                            <div class="d-none" id="submitSuccessMessage">
                                <div class="text-center mb-3">Formulário enviado!</div>
                            </div>
                            <div class="d-none" id="submitErrorMessage">
                                <div class="text-center text-danger mb-3">Erro de envio!</div>
                            </div>
                            <div class="d-grid">
                                <button class="btn btn-primary btn-lg" type="submit">Enviar</button>
                            </div>
                    </form>
                </div>
            </div>
            <div class="col-lg-6 col-12 mt-2 ms-auto">
                <div class="row mb-3">
                    <div class="col-12 _border-end contact-info">
                        <h6 class="mb-3">Nosso Email</h6>
                        <a href="mailto:faleconosco@novagokula.com.br" class="custom-link">
                            faleconosco@novagokula.com.br
                            <!-- <i class="bi-arrow-right ms-2"></i> -->
                        </a>
                    </div>
                </div>
                <div class="row">   
                    <div class="col-12 _border-top _border-end  contact-info">
                        <h6 class="mb-3">Nosso endereço</h6>
                        <p class="text-muted">Estr. Abílio José de Almeida, S/N - Ribeirão Grande, Pindamonhangaba - SP</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10386.513998052435!2d-45.46882941330622!3d-22.769403826861133!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc8d6e7ee46f0f%3A0xa542f3b15b5b24e8!2sFazenda%20Nova%20Gokula!5e0!3m2!1spt-BR!2sbr!4v1699897715342!5m2!1spt-BR!2sbr" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>