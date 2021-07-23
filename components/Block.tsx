import { Box, Paper } from '@material-ui/core';
import React from 'react';

export const Block: React.FC = props => {
  return (
    <Box mt={2}>
      <Paper>
        <Box p={2}>{props.children}</Box>
      </Paper>
    </Box>
  );
};
