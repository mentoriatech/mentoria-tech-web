import { ThemeProvider } from '@emotion/react';
import { light } from '../src/shared/styles/theme/'
console.log('🚀 ~ file: _app.tsx ~ line 3 ~ light', light);
import "../src/shared/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={light}>
    <Component {...pageProps} />
    </ThemeProvider>;
}

export default MyApp;
