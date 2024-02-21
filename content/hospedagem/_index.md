---
components:
  showContent:
    mode: simple
params_schema:
  title:
    label: Título
    type: string
  limit:
    label: Limite
    type: string
  tipo:
    label: Tipo
    type: string
  sideimage:
    label: Imagem superior
    type: text+button
    buttonLink:
      label: Selecionar
      link: openImageManagerModal
  files:
    label: Arquivos
    type: textarea
params_data:
  title: Hospedagem
  limit: '30'
  tipo: '0'
  sideimage: ''
  files: |-
    content:hospedagem:suiteharihome.md
    content:hospedagem:espacohimalaya.md
    content:hospedagem:casadosgurus.md
    content:hospedagem:hospedarialotus.md
    content:hospedagem:pousadanovagokula.md
    content:hospedagem:campingnovagokula.md

---

::showcontentindex
::