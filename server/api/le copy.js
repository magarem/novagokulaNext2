// import * as matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import { frontmatterPlugin } from '@mdit-vue/plugin-frontmatter';

export default defineEventHandler((event) => {
  const { id } = getQuery(event);
  // const md = markdownit()
  async function le() {
      const content = await $fetch('https://novagokula.com.br/teste/' + id + '.md')
      // console.log(content)
      // const result = md.render(content);
      const md = MarkdownIt({ html: true }).use(frontmatterPlugin, {
        // options
        grayMatterOptions: {
          excerpt: true,
          excerpt_separator: '<!-- more -->',
        },
      });
      const env = {};
      
      const rendered = md.render(
        content,
        env,
      );
      
      let ret = {
        body: rendered,
        env
      }
      console.log(0, rendered);
      console.log(1,env.frontmatter);
      console.log(2,env.content);
      console.log(3,env.excerpt);
      return ret
  }
 
 
  
  return le()
})