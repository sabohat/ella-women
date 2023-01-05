import { appWithTranslation } from 'next-i18next';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Layout from '../components/Layout'
import '../styles/globals.scss'
import { useEffect, useState } from 'react';


const theme = createTheme({
  palette: {
    primary: { main: "rgb(113, 101, 229)", contrastText: "#fff" },
  },
});

function MyApp({ Component, pageProps }) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);
  
  return (
    !isSSR &&
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>

  )


}

export default appWithTranslation(MyApp);
