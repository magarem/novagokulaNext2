// import * as matter from 'gray-matter';
// import MarkdownIt from 'markdown-it';
// import { frontmatterPlugin } from '@mdit-vue/plugin-frontmatter';
import YAML from 'yaml'
function getSubstring(string, char1, char2) {
  return string.slice(
    string.indexOf(char1) + 1 +3,
    string.lastIndexOf(char2),
  );
}
export default defineEventHandler((event) => {
  const { id } = getQuery(event);
  // const md = markdownit()
  async function le() {
      const content = await $fetch('https://novagokula.com.br/teste/' + id + '.md')
      // console.log(content)
      // const result = md.render(content);
      // const md = MarkdownIt({ html: true }).use(frontmatterPlugin, {
      //   grayMatterOptions: {
      //     excerpt: true,
      //     excerpt_separator: '<!-- more -->',
      //   },
      // });
      // const env = {};
      
      // const rendered = md.render(
      //   content,
      //   env,
      // );
      
      // let ret = {
      //   body: rendered,
      //   env
      // }
      // console.log(0, rendered);
      // console.log(1,env.frontmatter);
      // console.log(2,env.content);
      // console.log(3,env.excerpt);
      // console.log(77, matter(content))
      const subStr = getSubstring(content,'---', '---')
      const ymlToObj = YAML.parse(subStr)
      console.log(YAML.parse(subStr))
      console.log(content.substring(content.indexOf('---',3)+3));
      return ({content: content.substring(content.indexOf('---',3)+3), yml: ymlToObj})
  }
 
 
  
  return le()
})