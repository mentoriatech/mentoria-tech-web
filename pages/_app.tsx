import { ThemeProvider } from '@emotion/react';
import { Provider } from 'next-auth/client'
import { light } from '../src/shared/styles/theme/'
import "../src/shared/styles/globals.css";
import "../src/shared/styles/header-background.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ThemeProvider theme={light}>
        <Component {...pageProps} />
      </ThemeProvider>
      </Provider>
  );
}

export default MyApp;
