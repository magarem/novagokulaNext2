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
  title: Templos
  limit: '30'
  tipo: '0'
  sideimage: ''
  files: |-
    content:templos:1-radha-gokulananda.md
    content:templos:narasinha.md
    content:templos:samadi.md
    content:templos:santuariodetulasi.md

---
::showcontentindex
::