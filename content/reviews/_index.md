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
  title: Opiniões
  limit: '2'
  tipo: '0'
  sideimage: ''
  files: |-
    content:reviews:reviewbox2.md
    content:reviews:reviewbox3.md
    content:reviews:reviewbox1.md

---

::showcontentindex
::