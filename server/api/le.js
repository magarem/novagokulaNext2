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
  
  const { id, preview } = getQuery(event);
  // const md = markdownit()
  async function le() {
    // let file = 'https://novagokula.com.br/teste/' + id + (preview=='true'?'_preview.md':'.md')
    let file = 'http://159.89.143.16:3000/api/read?filename=' + id + (preview=='true'?'_preview.md':'.md')
    console.log(file);
    // if (fse.pathExistsSync(file)){
      let content
      try {
        content =  await $fetch(file)
      } catch (error) {
          if (preview=='true'){
            try {
              file = 'http://159.89.143.16:3000/api/read?filename=' + id + '.md'
              console.log(file);
              content =  await $fetch(file)
            } catch (error) {
              content = '  Página não encontrada'
            }
          }else{
            content = '  Página não encontrada'
          }
        
      }
      
      // console.log('https://novagokula.com.br/teste/' + id + (preview=='true'?'_preview.md':'.md'));
    //  if (!content){
    //    content =  await $fetch('https://novagokula.com.br/teste/' + id + '.md')
    //  }
    // }
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
      return ({content: content.substring(content.indexOf('---',3)+3), raw: content, yml: ymlToObj})
  }
 
 
  
  return le()
})