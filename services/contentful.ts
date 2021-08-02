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
    blocks: await Promise.all(page.fields.blocks.map(formatBlock)),
    meta: {
      title: page.fields.metaTitle,
      description: page.fields.metaDescription,
      image: page.fields.metaImage.fields.file.url
    }
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
          (block as IGallery).fields.images.map((image, _, array) =>
            formatImage(image, array)
          )
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

const formatImage = async (image: Asset, array: Asset[]): Promise<Image> => {
  const plaiceholder = await getPlaiceholderData(image);
  const widthRatio = getWidthRatio(image, array);
  return {
    ...image,
    ...plaiceholder,
    ...widthRatio
  };
};

const getPlaiceholderData = async (
  image: Asset
): Promise<Pick<Image, 'plaiceholder'>> => {
  const { img, base64 } = await getPlaiceholder(
    `https:${image.fields.file.url}`
  );
  return {
    plaiceholder: { img, base64 }
  };
};

const getWidthRatio = (
  image: Asset,
  array: Asset[]
): Pick<Image, 'widthRatio'> => {
  const totalWidth = array.reduce(
    (accumulator, currentImage) =>
      accumulator +
      currentImage.fields.file.details.image.width /
        currentImage.fields.file.details.image.height,
    0
  );

  const ratio =
    image.fields.file.details.image.width /
    image.fields.file.details.image.height;

  return { widthRatio: ratio / totalWidth };
};
