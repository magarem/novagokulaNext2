export default defineEventHandler((event) => {
    async function le() {
        const users = await $fetch('https://novagokula.com.br/teste/about.md')
    console.log(users)
    }
  
    le()
  })