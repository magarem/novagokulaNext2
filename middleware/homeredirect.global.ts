export default defineNuxtRouteMiddleware((to, from) => {
    console.log('middle!');
    
    if (to.path == '/') {
      // setting the redirect code to '301 Moved Permanently'
      return navigateTo('/home', { redirectCode: 301 })
    }
  })