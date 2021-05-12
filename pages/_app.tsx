import { FC } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import { Provider } from 'next-auth/client'
import StoreProvider from '../src/shared/containers/Store'
import { light } from '../src/shared/styles/theme/'
import '../src/shared/styles/globals.css'
import '../src/shared/styles/header-background.scss'

type LocalAppProps = {
  pageProps: {
    content: {
      title: string,
    },
    session: unknown,
  },
}

const App: FC<AppProps & LocalAppProps> = ({ Component, pageProps }) => (
  <Provider session={pageProps.session}>
    <ThemeProvider theme={light}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </ThemeProvider>
  </Provider>
)

export default App
