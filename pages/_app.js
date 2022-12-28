import { appWithTranslation } from 'next-i18next';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Layout from '../components/Layout'
import '../styles/globals.scss'


const theme = createTheme({
  palette: {
    primary: { main: "rgb(113, 101, 229)", contrastText: "#fff" },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )


}

export default appWithTranslation(MyApp);
