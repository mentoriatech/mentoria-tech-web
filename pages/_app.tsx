import { ThemeProvider } from '@emotion/react';
import { light } from '../src/shared/styles/theme/'
import "../src/shared/styles/globals.css";
import "../src/shared/styles/header-background.scss";

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={light}>
    <Component {...pageProps} />
    </ThemeProvider>;
}

export default MyApp;
