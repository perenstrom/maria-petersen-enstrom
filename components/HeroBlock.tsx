import React from 'react';
import { Typography } from '@material-ui/core';
import { HeroBlock as HeroBlockType } from 'types/local';

export const HeroBlock: React.FC<HeroBlockType> = ({ heading, image }) => {
  return (
    <>
      <Typography variant="h1">{heading}</Typography>
      <pre>{JSON.stringify(image, null, 2)}</pre>
    </>
  );
};
