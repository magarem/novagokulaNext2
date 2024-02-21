<template>
  <div class="bb bg-dark">
  <nav v-if="!editPanel" class="floating-menu">
    <div class="pt-2">
      <a @click="editPanelOpen" style="padding-left:8px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
        </svg>
      </a>
    </div>
  </nav>
  <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid mt-2">
      <a class="navbar-brand_ mt-0" href="#" style="margin-left: 2px;">              
        <img src="/img/edit/logo.png" alt="Logo do Sistema" style="width: 60%;">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="row" style="width: 100%;">
        <div class="col-12">
          <div class="btn-group" role="group" aria-label="Basic example">
            <div class="btn-group btn-sm">
              <button class=" btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                </svg>
                Visualização
              </button>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                <li><button @click="editViewMode = 0" class="dropdown-item" >Misto</button></li>
                <li><button @click="editViewMode = 1" class="dropdown-item" >Editor</button></li>
                <li><button @click="editViewMode = 2" class="dropdown-item" >Site</button></li>
              </ul>
            </div>
           
            <button type="button" class="btn btn-outline-secondary px-3 btn-sm"  data-bs-toggle="modal" data-bs-target="#imagesManagerModal">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5z"/>
              </svg> Imagens
            </button>
            <button type="button"  @click="loadConfigFile" class="btn btn-outline-secondary px-3 btn-sm"  data-bs-toggle="modal" data-bs-target="#modal_config">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
              </svg> Configurações
            </button>
            <div class="btn-group btn-sm">
              <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
                </svg> Sistema
              </button>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
              <li>
                  <button type="button" @click="cleanup()" class="dropdown-item" >
                    Limpar memória
                  </button>
                </li> 
                <li>
                  <button type="button" @click="gitreset" class="dropdown-item" >
                    Desfazer alterações
                  </button>
                </li>
                <li>
                  <button type="button" @click="systemUpdate" class="dropdown-item" >
                    Atualizar versão
                  </button>
                </li>
              </ul>
            </div>
            <button type="button" @click="copile" class="btn btn-outline-secondary px-3 btn-sm" >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-arrow-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708z"/>
                <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
              </svg> Publicar
            </button>
            <button type="button" @click="logout"  class="btn btn-outline-secondary px-3 btn-sm" >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
              </svg> sair
            </button>
            <!-- <button class="btn btn-primary" @click="toggle()">toggle modal</button> -->
            <!-- <span class="text-success mt-1 " style="margin-left: 10px;">
              [ {{ authenticated }} ]
            </span> -->
          </div>
        </div>
      </div>
    </div>
  </nav>
  
  <div class="bg-dark container-fluid m-0 mt-2" style="height: calc(100% - 85px);">
    <div  class="row gap-0 h-100" >
      <div :class="(editViewMode==0)? 'col-12 col-lg-4 px-0' :  'col-12 col-lg-12'" >
        

        <!-- Doc -->
        <!-- Doc -->
        <!-- Doc -->
        <div class="input-group input-group h-100 form-control1" style="border-radius: 0;" >
          <span class="input-group-text btn-outline-secondary  text-light bg-dark" id="basic-addon1" style="font-size: 14px;" @click="testeButton">Doc</span>
          <input v-model="id" @keyup.enter="readFile" type="text" class="form-control text-light form-control-sm bg-input1">
          <button class="btn btn-outline-secondary dropdown-toggle border" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
          </button>
          <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="dropdownMenuButton2">
            <li>
              <button @click="localsave(); save();"  class="dropdown-item"  type="button">Salvar</button>
            </li>
            <li v-if="id?.includes('_index')"><button @click="novoDoc" class="dropdown-item" type="button">Novo</button>
            </li> 
            
            <li>
            <button @click="fileContentUndo" class="dropdown-item" type="button">Reverter edição</button>

            </li> 
            <li>
              <button v-if="fileType=='file'&&!id.includes('_index')&&!id.includes('home.md')" @click="delDoc" class="dropdown-item" type="button">Excluir</button>

            </li>
            <li>
              <button v-if="fileType=='file'&&!id.includes('_index')&&!id.includes('home.md')" type="button" @click="rename" class="dropdown-item" >
                Renomear
              </button>
            </li>
            <li>
              <button v-if="fileType=='dir'" type="button" @click="ajustaPonteiro({operation: 'reset', operationId: ''})" class="dropdown-item" >
                Refazer lista
              </button>
            </li>  
          </ul>
          <div v-if="txt" class="h-100 w-100" >
            <div class="accordion"  id="accordionExample" data-bs-theme="dark">
              <div v-if="flagAllButtons" class="accordion-item">
                <h2 class="accordion-header" id="headingProps">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseComponents" aria-expanded="true" aria-controls="collapseComponents">
                    Componentes
                  </button>
                </h2>
                <div id="collapseComponents" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body m-0 p-0" >
                    <div class="p-0 m-0" style="overflow: scroll; height: 300px;">
                      <textarea class="txt" style="height: 300px;" spellcheck="false" v-model="txt_props.components" ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="flagAllButtons && Object.keys(props.params_data||{}).length" class="accordion-item">
                <h2 class="accordion-header" id="headingParamShema">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseParamShema" aria-expanded="true" aria-controls="collapseParamShema">
                    Esquema de propriedades
                  </button>
                </h2>
                <div id="collapseParamShema" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body m-0 p-0" >
                    <div class="p-0 m-0" style="overflow: scroll; height: 300px;">
                      <textarea class="txt" style="height: 400px;" spellcheck="false" v-model="txt_props.params_schema" ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              
              <div v-if="Object.keys(props.params_data||{}).length" class="accordion-item">
                <h2 class="accordion-header " id="headingProps">
                  <div
                  style="width: 100%;"
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseProps"
                    aria-expanded="true"
                    aria-controls="collapseProps"
                    >
                    <span style="font-size: 15px; font-family: Georgia, 'Times New Roman', Times, serif;" >Propriedades</span>
                    <button v-if="JSON.stringify(props_initialValue.params_data) !== JSON.stringify(props.params_data)" style="font-size: 12px;  margin-left: 150px; --bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;" class="btn  btn-sm py-0 btn-outline-secondary" data-bs-toggle="collapse" @click="restaurarDataForm">
                    Cancelar
                    </button>
                    <button v-if="JSON.stringify(props_initialValue.params_data) !== JSON.stringify(props.params_data)" style="font-size: 12px; margin-left: 10px; --bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;" class="btn  btn-sm py-0 btn-outline-secondary" data-bs-toggle="collapse" @click="saveDataForm(props.params_data)">
                    Salvar
                    </button>
                  </div>
                </h2>
                <div id="collapseProps" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body m-0 p-0" >
                    <div class="px-4 py-2" style="overflow: scroll; height: 300px;">
                      <!-- {{  txt_properties.parameters_data }} -->
                      <MagaForm
                        v-if="props.params_schema"
                        :dataTemp="imageName"
                        :data="props.params_data" 
                        :schema="props.params_schema"
                        :itemSelected="aux2"
                        @openImageManagerModal="openImageManagerModal"
                        @save="saveDataForm"
                      /> 
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Conteúdo  
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body m-0 p-0">
                    <textarea v-if="txt" class="txt" style="height: 300px;" spellcheck="false" v-model="txt_texto" ></textarea>
                  </div>
                </div>
              </div>
              <div v-if="flagAllButtons" class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                    Arquivo fonte
                  </button>
                </h2>
                <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample">
                  <div class="accordion-body m-0 p-0">
                    <textarea v-if="txt" class="txt" style="height: 300px;" spellcheck="false" v-model="txt" ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Doc -->
        <!-- Doc -->
        <!-- Doc -->
      </div>
      <div v-show="editViewMode==0" class="col-12 col-lg-8 _pt-2 px-0 py-0">


<!-- ----------------------------------------------------------------------------------- -->


        <div class=" input-group mb-1 w-100 h-100 " _style="background-color: brown;">
          <!-- <div class="input-group"> -->
            <span class="input-group-text border rouded-0 bg-dark text-light" id="basic-addon1" style="font-size: 14px;">Página</span>
            <button @click="pageUrl='/home'; readPageUrl()" class="btn btn-outline-secondary border" type="button" id="button-addon2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
              </svg>
            </button>
            <button @click="$router.go(-1)" class="btn btn-outline-secondary border" type="button" id="button-addon2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
              </svg>
            </button>
            <button @click="$router.go(+1)" class="btn btn-outline-secondary border" type="button" id="button-addon2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
              </svg>
            </button>
            <button @click="reloadIframe" class="btn btn-outline-secondary border" type="button" id="button-addon2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
              </svg>
            </button>

            <input v-model.lazy="pageUrl" @keyup.enter="readPageUrl" type="text" class="form-control text-light form-control-sm bg-input1" >
            <button class="btn btn-outline-secondary border" type="button" id="button-addon2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
              </svg>
            </button>
            <iframe :key="iframeUpdate" id="iframe" name="iframe" src="/home" class="w-100 h-100" ></iframe>	

        </div>
      </div>
    </div>
    <div v-if="editViewMode==1111" class="row text-center" >
      <div class="col-12 col-lg-12" style="_margin-left: -15px; height: 610px; _background-color: blueviolet;">
        <div v-if="txt" class="h-100">
          <textarea v-if="txt" class="txt mt-2" spellcheck="false" v-model="txt" style="width: 100%; height: 90%;"></textarea>
          <div class="btn-group w-100" role="group" aria-label="Basic outlined example">
            <button style="margin-right: 10px;" @click="fileContentUndo" class="mt-1 btn btn-warning rounded-pill">Reverter</button><button class="mt-1 btn btn-success rounded-pill">Salvar</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="editViewMode==2" class="row text-center" >
      <div :class="'col-12 pt-2 col-lg-12'">
        <iframe :key="iframeUpdate" id="iframe" name="iframe" :src="pageUrl" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:89vh;width:100%;position:absolute;top:70px;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe>	
      </div>
    </div>
  </div>

  <!------------>
  <!-- Modal --->
  <!------------>
  <div class="modal fade modal-xl" id="imagesManagerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog border-3 border-dark bg-dark">
      <div class="modal-content bg-dark">
        <!-- <div class="modal-header bg-dark">
          <h5 class="modal-title" id="exampleModalLabel">Banco de imagens</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div> -->
        <div class="modal-body bg-dark" style="height: 90vh;">
            <iframe id="iframe" name="iframe" src="/list?dir=" width="100%" style="height:85vh;"></iframe>	
        </div>
        <!-- <div class="modal-footer bg-dark">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
        </div> -->
      </div>
    </div>
  </div>

  <div class="modal fade modal-xl" id="modal_config" tabindex="-1" aria-labelledby="modal_config" aria-hidden="true">
    <div class="modal-dialog border-3 border-dark bg-dark">
      <div class="modal-content bg-dark">
        <div class="modal-header bg-dark">
          <h5 class="modal-title text-light" id="exampleModalLabel">Configurações do sistema</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body bg-dark" style="height: 70vh;">
          <textarea id="config_textarea" v-model="configtextarea" class="bg-dark text-light p-2" style="width: 100%; height:100%;"></textarea>
        </div>
        <div class="modal-footer bg-dark">
          <button type="button" class="btn btn-secondary" @click="loadConfigFile">load</button>
          <button type="button" class="btn btn-secondary" @click="saveConfigFile()">Save</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
        </div>
      </div>
    </div>
  </div>
  <!------------>
  <!-- /Modal -->
  <!------------>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: ''
})
// # for local storage
import { getData, setData } from 'nuxt-storage/local-storage';
import { useAuthStore } from '~/store/auth';
import yaml from "js-yaml";

const imageName = useCookie<{ id: string, data: string }>('imageName')


const router = useRouter();

const { logUserOut } = useAuthStore();
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive


const restaurarDataForm = () => {
  props.value.params_data = {...props_initialValue.value.params_data}
}

const saveDataForm = (x) => {
  props.value.params_data = x
  props_initialValue.value.params_data = {...props.value.params_data}
  txt_props.value.params_data = JSON.stringify(x, null, 2)
}

const testeButton = () => {
  flagAllButtons.value = !flagAllButtons.value
}

if (!authenticated.value) {
  router.push('/login');
}

const logout = () => {
  logUserOut();
  router.push('/login');
};

function splitLastOccurrence(str, substring) {
  const lastIndex = str.lastIndexOf(substring);
  const before = str.slice(0, lastIndex);
  const after = str.slice(lastIndex + 1);
  return [before, after];
}

const route = useRoute()
let status = ref('')
let editViewMode = ref(0)
let iframeUpdate = ref(false)
let editPanel = ref(true)
let id = ref(route.query.id)
let txt = ref()
let txt_propiedades = ref()
let txt_props = ref({
      components: {},
      params_schema: {},
      params_data: {}
})
let txt_components = ref()
let txt_texto = ref()
let aleradySaved = ref(false)
let fileType = ref("dir")
let localdata = getData('content')||[]
let fileList = ref([])
let txt_parans = {}
let configtextarea = ref("")
let dir: string
let aux2 = ref()
const dataProps = ref({})
let params_schema = ref({})
import Swal from 'sweetalert2'
import '@sweetalert2/theme-dark/dark.scss'
import type { Modal } from "bootstrap";
let imagesManagerModal: Modal;
let pageUrl = ref('/home')
const { $bootstrap } = useNuxtApp();
let dataBkp
let magaformOpen = ref(false)
const props = ref({})
const props_initialValue = ref({})
let flagAllButtons = ref(false)

onMounted(() => {
  imagesManagerModal = new $bootstrap.Modal(document.getElementById("imagesManagerModal"));
  watch(
    () => id.value,
    () => {
      pageUrl.value = '/masterpage/' + id.value.replaceAll('/',':')
    }
  )
  watch(
    () => txt_props,
    () => {
      update_props_data()
      save()
      update_iframe()
    },{ deep: true }
  )
  watch(
    () => txt_texto.value,
    () => {
      update_props_data()
      save()
      update_iframe()
    }
  )
});

function update_props_data(){

  const txt_props_ = {}
  
  if (txt_props.value?.components.length>0){
    txt_props_.components = JSON.parse(txt_props.value?.components)
  }
  if (txt_props.value?.params_schema.length>0){
    txt_props_.params_schema = JSON.parse(txt_props.value?.params_schema)
  }
  if (txt_props.value?.params_data.length>0){
    txt_props_.params_data = JSON.parse(txt_props.value?.params_data)
  }
  // let txt_props_ = `
  //   {
  //     "components": ${txt_props.value?.components||null},
  //     "params_schema": ${txt_props.value?.params_schema||null},
  //     "params_data": ${txt_props.value?.params_data||null}
  //   }  
  // `
  txt.value = '---\n' + JSON.stringify(txt_props_, null, 2) + '\n---\n' + txt_texto.value

  console.log('txt.value::>', txt.value);
  
}

function activeTab(x, x2){ 
  document.getElementById('txt_arquivos_').classList.remove('active'); 
  document.getElementById('txt_propiedades_').classList.remove('active'); 
  document.getElementById('txt_texto_').classList.remove('active'); 

  document.getElementById(x).classList.add('active'); 

  document.getElementById('x1').classList.remove('active'); 
  document.getElementById('x2').classList.remove('active'); 
  document.getElementById('x3').classList.remove('active'); 

  document.getElementById(x2).classList.add('active'); 
}

async function cleanup() {
  try {
    const { data: ret } = await useFetch('/api/cleanup')
  } catch (error) {
    console.log("Error");
  }
}

const openImageManagerModal = (id) => {
  aux2.value = id
  imageName.value = {id: id, data: ''}
  imagesManagerModal.toggle();
};

const localsave = () => {
  let index = localdata.findIndex((item) => item.id === id.value);
  // Check if the object with the specified property value exists in the array
  if (index === -1) {
    // If not found, push a new object with the desired properties
    localdata.push({id: id.value, txt: txt.value});
  } else {
    // If found, log a message indicating that the object already exists
    console.log("Object already exists");
    localdata[index] = {id: id.value, txt: txt.value}
  }
  setData('content', localdata);
  console.log("doc salvo local");
}

async function fileContentUndo() {
  try {
    if(confirm("Descartar alterações em " + id.value + "?")){
      let index = localdata.findIndex((item) => item.id === id.value);
      
      if (index === -1) {
        alert("doc ainda não salvo")
      } else {
        // If found, log a message indicating that the object already exists
        txt.value = getData('content')[index].txt
        document.getElementById('iframe').contentWindow.location.reload(true)
      }
    }
  } catch (error) {
      console.log("Error", error);
  }
}

async function gitreset() {
  try {
    if(confirm("Apagar últimas mudanças?")){
      // const { data: ret1 } = await useFetch('/api/writeSlideFile')
      const { data: ret2 } = await useFetch('/api/gitreset')
      alert("Site recuperado com sucesso!")
    }
  } catch (error) {
      console.log("Error");
  }
}

async function systemUpdate() {
  try {
    if(confirm("Atualizar sistema?")){
      // const { data: ret1 } = await useFetch('/api/writeSlideFile')
      const { data: ret2 } = await useFetch('/api/systemUpdate')
      alert("Sistema atualizado com sucesso!")
    }
  } catch (error) {
      console.log("Copile error");
  }
}

async function copile() {
  try {
    if(confirm("Confirma copilação do site?")){
      setData('content',[])
      const { data: ret2 } = await useFetch('/api/copile')
      alert("Site copilado com sucesso!")
    }
  } catch (error) {
      console.log("Copile error");
  }
}

async function rename() {
  try {
    let aux1 = splitLastOccurrence(id.value, '/')
    let docNewFileName = window.prompt("Digite o novo nome", aux1[1].split('.')[0]);
    let newname = aux1[0] + '/' + docNewFileName + '.md'
    console.log(newname);
    $fetch('api/rename?oldname=' + id.value + '&newname=' + newname).then(ret=>{
      // console.log(ret);
    })
    pageUrl.value =  'masterpage/' + newname.replaceAll('/', ':')
    readPageUrl()
    ajustaPonteiro({operation: 'rename', operationId: id.value+'|'+newname})
    id.value = newname
    // document.getElementById('iframe').contentWindow.location = "/" + newname.replaceAll('/', ':')
  } catch (error) {
      console.log("Copile error");
  }
}

async function delDoc(){
  Swal.fire({
    title: "Confirma exclusão?",
    // showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Sim",
    denyButtonText: `Cancelar`
  }).then(async (result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      // if (confirm("Confirma exclusão do arquivo " + filename.value + '?') == true) {
        const { data: ret } = await useFetch('/api/deleteContent?id=' + id.value)
        id.value = '/masterpage/content:' + dir + ':_index.md'
        pageUrl.value = '/masterpage/content:' + dir + ':_index.md'
        readPageUrl()
        // readFile()
        // openNewFile('content:' + dir + ':_index.md')
        // document.getElementById('iframe').contentWindow.location = '/masterpage/content:' + dir + ':_index.md'
        ajustaPonteiro({operation: 'reduce', operationId: id.value})
    } 
    // else if (result.isDenied) {
    //   Swal.fire("Changes are not saved", "", "info");
    // }
  });


  
}

async function novoDoc() {
  let aux1 = `---
components:
  showContent:
    mode: simple
params_schema:
  title:
    label: Título
    type: string
  description:
    label: Descrição
    type: string
  topimage:
    label: Imagem superior
    type: text+button
    buttonLink:
      label: Selecionar
      link: openImageManagerModal
  sideimage:
    label: Imagem lateral
    type: text+button
    buttonLink:
      label: Selecionar
      link: openImageManagerModal
params_data:
  title: Novo documento
  description: ''
  topimage: null
  sideimage: /img/generic.png
---
`
  let newfilename = 'content:' + dir + ':' + Date.now() + '.md'
  try {
    const config = {
      method: 'POST',
      headers: {'Accept': 'application/json','Content-Type': 'application/json'},
      body: JSON.stringify({
        filename: newfilename.replaceAll(':', '/'), txt: aux1
      })
    }
    const response = await fetch('/api/novoDoc', config)
    if (response.ok) {
      console.log(newfilename);
      id.value = newfilename
      pageUrl.value = '/masterpage/' + newfilename
      readPageUrl()
      // readFile()
      console.log('dir', dir);
      ajustaPonteiro({operation: 'add', operationId: newfilename})
    }
  }catch{
    console.log('erro!');
  }
}

const ajustaPonteiro = (obj) => {
  useFetch('/api/read?filename=' + 'content/' + dir + '/_index.md').then(ret1=>{
    let auxy = []
    const auxProps = ret1.data.value.trim().split('---')[1].trim()
    const t = ret1.data.value.trim().split('---')[2].trim()
    
    console.log('auxProps:', auxProps);
    
    
    // const auxPropsYml = yaml.load(auxProps);
    const auxPropsYml = yaml.load(auxProps);
    console.log('auxPropsYml:', auxPropsYml);
   
    if (obj.operation == 'add') {
      auxPropsYml.params_data.files += '\n'+obj.operationId
      auxPropsYml.params_data.limit = +auxPropsYml.params_data.limit+1
    }

    if (obj.operation == 'rename') {
        obj.operationId = obj.operationId.replaceAll('/', ':')
        let aux2 = auxPropsYml.params_data.files.split('\n')
        console.log('oldname:', obj.operationId.split('|')[0]);
        console.log('newname:', obj.operationId.split('|')[1]);
        
        auxPropsYml.params_data.files = aux2.filter((x: any)=>(x!=obj.operationId.split('|')[0])).join('\n')
        auxPropsYml.params_data.files += '\n'+obj.operationId.split('|')[1]
    }

    if (obj.operation == 'reduce') {
        let aux2 = auxPropsYml.params_data.files.split('\n')
        auxPropsYml.params_data.files = aux2.filter((x: any)=>(x!=obj.operationId)).join('\n')
    }



    let aux2Content = "---\n"+JSON.stringify(auxPropsYml, null, 2)+"\n---\n" + t

    console.log('aux2Content:>', aux2Content);
    
      try {
        const config = {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({fileName: ('content:' + dir + ':_index.md').replaceAll(':', '/'), data: aux2Content})
        }
        const response = fetch('/api/saveFileContent', config)
        if (response.ok) {
          //
        } else {
            console.log("save file error");
        }
      } 
      catch (error) {
        console.log("save api error");
      }

    // useFetch('/api/readDir?dir=' + dir).then(ret=>{

    //   if (obj.operation == 'reset') {
    //     alert('reset!')
    //     auxPropsYml.files = ret.data.value.map(x=>x._id)
    //   }

    //   if (obj.operation == 'add') {
    //     auxPropsYml.files.push(obj.operationId)
    //   }

    //   if (obj.operation == 'reduce') {
    //     auxPropsYml.files = auxPropsYml.files.filter((x: any)=>(x!=obj.operationId))
    //   }

    //   // auxPropsYml.files = auxPropsYml.files.filter(x=>(x!='content:'+dir+':_index.md'))
      
    //   let aux2Content = "---\n"+JSON.stringify(auxPropsYml, null, 2)+"\n---\n" + t
    //   try {
    //     const config = {
    //       method: 'POST',
    //       headers: {
    //           'Accept': 'application/json',
    //           'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({fileName: ('content:' + dir + ':_index.md').replaceAll(':', '/'), data: aux2Content})
    //     }
    //     const response = fetch('/api/saveFileContent', config)
    //     if (response.ok) {
    //       //
    //     } else {
    //         console.log("save file error");
    //     }
    //   } 
    //   catch (error) {
    //     console.log("save api error");
    //   }
    // })
    aleradySaved.value = true
  })
}

const openNewFile = (x) => {
  document.getElementById('iframe').contentWindow.postMessage(
    {
      op: 'redirect', 
      id: x
    }
  )
}

const readPageUrl = () => {
  document.getElementById('iframe').contentWindow.location = pageUrl.value
}

async function read(content='') {
    if (!content){
      try {
        let id_ = id.value.includes(':')?id.value.replaceAll(':', '/'):id.value
        const { data: ret } = await useFetch('/api/read?filename=' + id_)
        txt.value = ret.value
      } catch (error) {
        console.log("Load file error");
      }
    }else{
      txt.value = content
    }
    let index = localdata.findIndex((item) => item.id === id.value);
    if(index===-1){
      console.log("salvo local!");
      localsave()
    }
    // txt_propiedades.value = JSON.stringify(JSON.parse(txt.value.trim().split('---')[1].trim()).params_schema)
    // txt_components.value = JSON.stringify(JSON.parse(txt.value.trim().split('---')[1].trim()).components)
    // dataProps.value = JSON.parse(txt_proppostMessagelocaiedades.value)
    // txt_texto.value = txt.value.trim().split('---')[2].trim()
    // console.log('dataProps.value:', dataProps.value);
}

function update_iframe() {
    dataBkp = txt.value
    
    const aux = (document?.getElementById('iframe') as HTMLIFrameElement);
   
    aux.contentWindow?.postMessage(
      {
        refresh: true, 
        op: 'refresh',
      }, '/');
    aleradySaved.value = false
}

const readFile = () => {
  read()
  if (id.value?.includes('_index')) {
    activeTab('txt_arquivos_', 'x1')
  }else{
    activeTab('txt_texto_', 'x3')
  }
}

async function save() {
  status.value = 'salvo'
 
  //Organiza o frontmatter para yaml
  let aux1 = txt.value.split('---')[1]
  console.log('aux1:', aux1);
  let aux2 = yaml.dump(JSON.parse(aux1))
  let aux3 = `---\n${aux2}\n---\n${txt.value.split('---')[2]}`
  
  console.log('aux2:', aux2);
  console.log('aux3:', aux3);
  txt.value = aux3
  
  try {
    const config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({filename: id.value.trim(), txt: txt.value.trim()})
    }
    const response = await fetch('/api/save', config)
    if (response.ok) {
      aleradySaved.value = true
    } else {
      console.log("save file error");
    }
  } 
  catch (error) {
    console.log("save api error");
  }
}

const loadConfigFile = async () => { 
  const { data: ret } = await useFetch('/api/read?filename=public/config.json')
  configtextarea.value = ret.value
}

const saveConfigFile = async () => {
  try {
      const config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({filename: 'public/config.json', txt: configtextarea.value})
    }
    const response = await fetch('/api/save', config)
    if (response.ok) {
      aleradySaved.value = true
    } else {
      console.log("save file error");
    }
  } 
  catch (error) {
    console.log("save api error");
  }
}

const reloadIframe = () => {
  document.getElementById('iframe').contentWindow.location.reload(true)
}
// Function to test string
function testJSON(text) {
    if (typeof text !== "string") {
        return false;
    }
    try {
        JSON.parse(text);
        return true;
    } catch (error) {
        return false;
    }
}
const iframeEvent = async (event) => {
  // pageUrl.value = event.data.url
  id.value = event.data.id
  fileType.value = event.data?.type||'file'
  dir = event.data.id.replace('content/','').split('/')[0]
  if (event.data.content) {
    txt.value = event.data.content
  }else{
    const { data: fileData } = await useFetch('/api/read?filename=' + id.value)
    txt.value = fileData.value
    console.log('txt.value:::', txt.value);
    
  }
  
  console.log('7-txt.value:', txt.value);

  if (!testJSON(txt.value.split('---')[1])){
    txt.value = "---\n"+JSON.stringify(yaml.load(txt.value.split('---')[1]), null, 2)+"\n---\n"+txt.value.split('---')[2]
    console.log('2-txt.value:', txt.value);
  }


  
  // let txt_ = txt.value.split('---')[1]
  props.value = JSON.parse(txt.value.split('---')[1])
  props_initialValue.value = JSON.parse(txt.value.split('---')[1])
  console.log('3-props.value:', props.value);
  console.log('3-props_initialValue.value:', props_initialValue.value);

  // const a = {}
  if ('components' in props.value){
    txt_props.value.components = JSON.stringify(props.value.components, null, 2)
    console.log('3.1-props.value:', txt_props.value);
  }
  if ('params_schema' in props.value){
    txt_props.value.params_schema = JSON.stringify(props.value.params_schema, null, 2)
  }
  if ('params_data' in props.value){
    txt_props.value.params_data = JSON.stringify(props.value.params_data, null, 2)
  }
  
  console.log('4-txt_props.value:', txt_props.value);

  // txt_props.value = {
  //   components: JSON.stringify(props.value?.components, null, 2),
  //   params_schema: JSON.stringify(props.value.params_schema, null, 2),
  //   params_data: JSON.stringify(props.value.params_data, null, 2)
  // }
  txt_texto.value = txt.value.split('---')[2].trim()
    
}
 
if (process.client){
  document.onkeydown = async function(e) {
    if (e.ctrlKey && e.keyCode === 83) {
      e.preventDefault();
      localsave()
      save()
      return false;
    }
  };
  window.addEventListener("message", iframeEvent, false);
}	
</script>

<style scoped>
.accordion-button:after {
    order: -1; 
    margin-left: 0; 
    margin-right:0.5em; 
}

.form-control1{
  -webkit-border-radius: 0;
     -moz-border-radius: 0;
          border-radius: 0;
}

.bg-input1 {
  background-color: rgb(67, 60, 60);
}


.nav-tabs {
  background-color: rgb(112, 105, 105) !important;
}


  .nav-item {
    /* font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
    /* font-size: 15px; */
    /* color: aliceblue; */
    /* height: 20px; */
    /* padding-bottom: 30px; */
  }
 
  .nav-link {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 15px;
    color: aliceblue;
    /* height: 30px; */
    /* padding-bottom: 30px; */
  }
 
  textarea::-webkit-scrollbar {
    width: 0.5em;
  }
  textarea::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  }
  textarea::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }

  .dropdown-item {
    font-size: 14px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  button {
    font-size: 14px;
    color: aliceblue;
  }
  .bb {
    height: 100vh;
  }
  .floating-menu {
    font-family: sans-serif;
    background: rgb(99, 130, 46);
    color: white;
    padding: 5px;;
    width: 50px;
    height: 50px;
    z-index: 100;
    position: fixed;
    top: 50%;
    right: 0px;
    border-radius: 25px 0px 0px 25px;
      /* transform: translate(-50%, -50%); */
  }
  .txt {
    font-size: 18px;
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0px;
    color:aliceblue;
    background-color:rgb(63, 63, 63);
    outline: none;
    resize: none;
  }
</style>