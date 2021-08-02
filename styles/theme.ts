import { createTheme, responsiveFontSizes } from '@material-ui/core';

export const theme = responsiveFontSizes(
  createTheme({
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            backgroundImage: 'url(bg.png)',
            backgroundRepeat: 'repeat'
          },
          a: {
            color: 'rgba(0, 0, 0, 0.87)'
          }
        }
      }
    },
    palette: {
      type: 'light'
    },
    typography: {
      fontFamily: 'Merienda, sans-serif',
      fontSize: 24,
      h1: {
        fontSize: '2.797rem',
        fontWeight: 700
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 700,
        paddingTop: '0.5rem'
      },
      h3: {
        fontSize: '1.8rem',
        fontWeight: 700
      },
      h4: {
        fontSize: '1.725rem',
        fontWeight: 700
      },
      h5: {
        fontSize: '1.6rem',
        fontWeight: 700
      },
      h6: {
        fontSize: '1.5rem',
        fontWeight: 700
      },
      body1: {
        fontSize: '1.5rem'
      },
      body2: {
        fontSize: '1.5rem'
      },
      button: {
        textTransform: 'none'
      }
    }
  })
);
