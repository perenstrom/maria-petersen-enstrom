import React from 'react';
import Image from 'next/image';
import { GalleryBlock as GalleryBlockType } from 'types/local';
import { Block } from './Block';
import { Box } from '@material-ui/core';

export const GalleryBlock: React.FC<GalleryBlockType> = ({ images }) => {
  return (
    <Block>
      <Box display="flex" justifyContent="space-between">
        {images.map(image => (
          <Box
            key={image.fields.file.fileName}
            width={`calc(${image.widthRatio * 100}% - ${image.widthRatio *
              (images.length - 1)}rem)`}
            fontSize={0}
          >
            <Image
              {...image.plaiceholder.img}
              alt=""
              layout="intrinsic"
              placeholder="blur"
              blurDataURL={image.plaiceholder.base64}
            />
          </Box>
        ))}
      </Box>
    </Block>
  );
};
