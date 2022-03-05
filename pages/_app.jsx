import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';;

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

export const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      light: '#ffa600',
      main: '#ed9a00',
      dark: '#db8e00',
      contrastText: '#fff',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [{
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontWeight: 400,
        }],
      },
    },
  },
});

const themeOverrides = {
  overrides: {
    MUIRichTextEditor: {
      container: {
        borderRadius: '4px',
        border: '1px solid rgba(0, 0, 0, 0.23)',
        marginBottom: 32,
      },
      editor: {
        minHeight: 80,
        fontFamily: 'Roboto',
        padding: '0',
      },
      editorContainer: {
        padding: '0 14px',
      },
    },
  },
};

Object.assign(theme, themeOverrides);

const MyApp = function ({ Component, pageProps, emotionCache = muiCache }) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>vercel</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </MuiThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
