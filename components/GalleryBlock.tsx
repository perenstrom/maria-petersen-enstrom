import React from 'react';
import { GalleryBlock as GalleryBlockType } from 'types/local';
import { Block } from './Block';

export const GalleryBlock: React.FC<GalleryBlockType> = ({ images }) => {
  return (
    <Block>
      <pre>{JSON.stringify(images, null, 2)}</pre>
    </Block>
  );
};
