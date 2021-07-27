import React from 'react';
import Image from 'next/image';
import { GalleryBlock as GalleryBlockType } from 'types/local';
import { Block } from './Block';

export const GalleryBlock: React.FC<GalleryBlockType> = ({ images }) => {
  return (
    <Block>
      {images.map(image => (
        <Image
          {...image.plaiceholder.img}
          key={image.fields.file.fileName}
          alt=""
          layout="responsive"
          placeholder="blur"
          blurDataURL={image.plaiceholder.base64}
        />
      ))}
    </Block>
  );
};
