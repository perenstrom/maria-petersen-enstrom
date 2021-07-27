import { Asset, createClient } from 'contentful';
import { getPlaiceholder } from 'plaiceholder';
import {
  IGallery,
  IPage,
  IPageFields,
  IText
} from 'types/contentful/contentful';
import { GalleryBlock, Page, TextBlock, Image } from 'types/local';

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
    blocks: await Promise.all(page.fields.blocks.map(formatBlock))
  };
};

const formatBlock = async (
  block: IGallery | IText
): Promise<GalleryBlock | TextBlock> => {
  switch (block.sys.contentType.sys.id) {
    case 'gallery':
      return {
        contentType: 'gallery',
        id: block.sys.id,
        images: await Promise.all(
          (block as IGallery).fields.images.map(addPlaiceholder)
        )
      } as GalleryBlock;
    case 'text':
      return {
        contentType: 'text',
        id: block.sys.id,
        heading: (block as IText).fields.heading,
        text: (block as IText).fields.text
      } as TextBlock;
  }
};

const addPlaiceholder = async (image: Asset): Promise<Image> => {
  const { img, base64 } = await getPlaiceholder(
    `https:${image.fields.file.url}`
  );
  return {
    ...image,
    plaiceholder: { img, base64 }
  };
};
