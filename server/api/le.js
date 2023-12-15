import markdownit from 'markdown-it'
import * as matter from 'gray-matter';
export default defineEventHandler((event) => {
  const { id } = getQuery(event);
  const md = markdownit()
  async function le() {
      const content = await $fetch('https://novagokula.com.br/teste/' + id + '.md')
      console.log(content)
      const result = md.render(content);
      console.log(result)
      return matter(result)
  }
 

  return le()
})