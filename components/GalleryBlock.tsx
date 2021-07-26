import React from 'react';
import Image from 'next/image';
import { GalleryBlock as GalleryBlockType } from 'types/local';
import { Block } from './Block';

export const GalleryBlock: React.FC<GalleryBlockType> = ({ images }) => {
  return (
    <Block>
      {images.map(image => (
        <Image
          src={`https:${image.fields.file.url}`}
          width={image.fields.file.details.image.width}
          height={image.fields.file.details.image.height}
          key={image.fields.file.fileName}
          //placeholder="blur"
          //blurDataURL={image.plaiceholder.base64}
        />
      ))}
    </Block>
  );
};
