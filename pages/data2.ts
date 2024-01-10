import { _file } from './[id].vue';

export const { data: data2, refresh: refresh2 } = await useAsyncData("file", () => queryContent(_file.replace('.md', '')).findOne());
