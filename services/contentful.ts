import { createClient } from 'contentful';
import { IPage } from 'types/contentful/contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export const getMainPage = async () => {
  const pages = await client.getEntries<IPage>({
    content_type: 'page',
    'fields.slug[match]': 'huvudsida',
    include: 2
  });
  
  return pages.items[0];
}