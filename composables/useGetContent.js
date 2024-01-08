// fetch.js
import { ref } from 'vue'

export  async function useGetContent(url) {
  let data = ref(null)
  const error = ref(null)


  // const { data: data } = await useAsyncData('page-data2', () => {
  //   return queryContent(url).find()
  //   }
  // )

  //   data.value = data.value.filter(function( obj ) {
  //   return obj._path !== '/eventos/_index';
  // });

  console.log('url:', url);

   const { data: data2 } = await useAsyncData(
		'eventos', () => {
      queryContent('/eventos').where({ $not: {"_path": "/eventos/_index" }}).find()
      data.value = data2
    }
    )
   
  


  return { data2, error }
}