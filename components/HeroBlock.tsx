import React from 'react';
import { Typography } from '@material-ui/core';
import { HeroBlock as HeroBlockType } from 'types/local';

export const HeroBlock: React.FC<HeroBlockType> = ({ heading, heroImage }) => {
  return (
    <div>
      <Typography variant="h1">{heading}</Typography>
      <pre>{JSON.stringify(heroImage, null, 2)}</pre>
    </div>
  );
};
