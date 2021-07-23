import { createClient } from 'contentful';
import {
  IGallery,
  IPage,
  IPageFields,
  IText
} from 'types/contentful/contentful';
import { GalleryBlock, Page, TextBlock } from 'types/local';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export const getMainPage = async (): Promise<Page> => {
  const pages = await client.getEntries<IPageFields>({
    content_type: 'page',
    'fields.slug[match]': 'huvudsida'
  });

  const page = pages.items[0] as IPage;

  return {
    name: page.fields.name,
    slug: page.fields.slug,
    heading: page.fields.heading,
    heroImage: page.fields.heroImage,
    blocks: page.fields.blocks.map(b => formatBlock(b))
  };
};

const formatBlock = (block: IGallery | IText): GalleryBlock | TextBlock => {
  switch (block.sys.contentType.sys.id) {
    case 'gallery':
      return {
        contentType: 'gallery',
        images: (block as IGallery).fields.images
      } as GalleryBlock;
    case 'text':
      return {
        contentType: 'text',
        heading: (block as IText).fields.heading,
        text: (block as IText).fields.text
      } as TextBlock;
  }
};
