---
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
      label: selecione
      link: openImageManagerModal
  sideimage:
    label: Imagem lateral
    type: text+button
    buttonLink:
      label: selecione
      link: openImageManagerModal
  limit:
    label: Limite
    type: string
  tipo:
    label: Tipo
    type: string
  files:
    label: Arquivos
    type: textarea
params_data:
  title: Sobre nós
  description: ''
  topimage: ''
  sideimage: ''
  limit: 24
  tipo: '1'
  files: |-
    content:sobre:ewww.md
    content:sobre:filosofia.md
    content:sobre:acharyadeva.md
    content:sobre:about.md
    content:sobre:historia.md
    content:sobre:instituicao.md

---

::showcontentindex
::