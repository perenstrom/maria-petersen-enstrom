import { Document } from '@contentful/rich-text-types';
import { Asset } from 'contentful';

export interface HeroBlock {
  contentType: 'hero';
  heading?: string;
  image?: Asset;
}

export interface TextBlock {
  contentType: 'text';
  heading?: string;
  text?: Document;
}

export interface GalleryBlock {
  contentType: 'gallery';
  images?: Asset[];
}

export interface Page {
  name: string;
  slug: string;
  blocks: (HeroBlock | TextBlock | GalleryBlock)[];
}
