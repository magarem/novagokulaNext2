<template>
    <div id="app">
      <p v-for="n of 100" :key="n">{{ n }}</p>
    </div>
  </template>
  <script>
  export default {
    name: "App",
    created() {
     addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
      removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll(event) {
        console.log(window.scrollY);
      },
    },
  };
  </script>