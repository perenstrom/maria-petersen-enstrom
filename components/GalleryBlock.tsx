import React from 'react';
import Image from 'next/image';
import { GalleryBlock as GalleryBlockType } from 'types/local';
import { Block } from './Block';
import { Box, Container } from '@material-ui/core';

export const GalleryBlock: React.FC<GalleryBlockType> = ({ images }) => {
  return (
    <Container maxWidth="lg">
      <Block>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
        >
          {images.map(image => (
            <Box
              key={image.fields.file.fileName}
              width={{
                xs: '100%',
                sm: `calc(${image.widthRatio * 100}% - ${image.widthRatio *
                  (images.length - 1)}rem)`
              }}
              mb={{ xs: '1rem', sm: 0 }}
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
    </Container>
  );
};
