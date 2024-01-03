// server/api/recent-contents/ts
import { serverQueryContent } from "#content/server";

export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    let id = query.id as string
    id = id.replace('content/','')
    const docs = await serverQueryContent(event).find();
    const baseUrl = "";
    let ret = docs.filter(doc => doc._path?.includes(id)&&!doc._path?.includes(id+'/_index')).map((doc)=>{
        return {
            id: doc._path + '.md',
            path: `${baseUrl}${doc._path}`,
            title: doc.title,
            description: doc.description,
            textImg: doc.textImg,
            date: doc.date,
            image: doc.image,
            image_thumbnail: doc.image_thumbnail,
            image_title: doc.image_title,
        }
    })
    return ret
});

