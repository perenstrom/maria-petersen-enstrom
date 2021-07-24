import React from 'react';
import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography
} from '@material-ui/core';
import { HeroBlock as HeroBlockType } from 'types/local';

const useStyles = makeStyles<Theme, HeroBlockType, 'wrapper' | 'heading'>(
  theme =>
    createStyles({
      wrapper: {
        textAlign: 'center',
        width: '100%',
        height: '100vh',
        backgroundColor: 'black',
        backgroundImage: props => `url(${props.heroImage.fields.file.url})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
      },
      heading: {
        color: theme.palette.grey[50],
        textShadow: '0px 0px 10px rgba(0, 0, 0, 0.76)'
      }
    })
);

export const HeroBlock: React.FC<HeroBlockType> = ({ heading, heroImage }) => {
  const classes = useStyles({ heading, heroImage });

  return (
    <Box className={classes.wrapper} pt={8}>
      <Typography variant="h1" className={classes.heading}>
        {heading}
      </Typography>
    </Box>
  );
};
