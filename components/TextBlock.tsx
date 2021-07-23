import React from 'react';
import { Typography } from '@material-ui/core';
import { TextBlock as TextBlockType } from 'types/local';
import { Block } from './Block';

export const TextBlock: React.FC<TextBlockType> = ({ heading, text }) => {
  return (
    <Block>
      <Typography variant="h2">{heading}</Typography>
      <pre>{JSON.stringify(text, null, 2)}</pre>
    </Block>
  );
};
