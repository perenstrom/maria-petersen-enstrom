import { Document } from '@contentful/rich-text-types';
import { Asset } from 'contentful';

export interface TextBlock {
  contentType: 'text';
  heading?: string;
  text?: Document;
}

export interface GalleryBlock {
  contentType: 'gallery';
  images?: Asset[];
}

export interface HeroBlock {
  heading?: string;
  heroImage?: Asset;
}

export interface Page {
  name: string;
  slug: string;
  heading?: string;
  heroImage?: Asset;
  blocks: (TextBlock | GalleryBlock)[];
}
