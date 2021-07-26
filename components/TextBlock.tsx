import React from 'react';
import { Typography } from '@material-ui/core';
import {
  documentToReactComponents,
  Options
} from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { TextBlock as TextBlockType } from 'types/local';
import { Block } from './Block';

const renderOptions: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <Typography variant="body1" paragraph={true}>
        {children}
      </Typography>
    )
  }
};

export const TextBlock: React.FC<TextBlockType> = ({ heading, text }) => {
  return (
    <Block>
      <Typography variant="h2" gutterBottom={true}>
        {heading}
      </Typography>
      {documentToReactComponents(text, renderOptions)}
    </Block>
  );
};
