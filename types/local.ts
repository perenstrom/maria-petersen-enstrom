import { Document } from '@contentful/rich-text-types';
import { Asset } from 'contentful';
import { IGetPlaiceholderReturn } from 'plaiceholder';

export interface TextBlock {
  contentType: 'text';
  id: string;
  heading?: string;
  text?: Document;
}

export interface Image extends Asset {
  plaiceholder?: Omit<IGetPlaiceholderReturn, 'svg' | 'css' | 'blurhash'>;
  widthRatio: number;
}

export interface GalleryBlock {
  contentType: 'gallery';
  id: string;
  images?: Image[];
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
