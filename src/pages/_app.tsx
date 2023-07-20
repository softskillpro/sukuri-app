import { type AppType } from 'next/app';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { Montserrat } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import Layout from '@/components/v2/Common/Layout';
import { api } from '@/utils/api';
import createEmotionCache from '@/utils/create-emotion-cache';
import theme from '@/styles/theme';
import 'react-toastify/dist/ReactToastify.css';

import { WagmiConfig } from 'wagmi';
import wagmiConfig from '@/configure/wagmi';

import '@/styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--Montserrat',
});

const MyApp: AppType<{
  session: Session | null;
  emotionCache?: EmotionCache;
}> = ({
  Component,
  pageProps: { session, emotionCache = clientSideEmotionCache, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <WagmiConfig config={wagmiConfig}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={montserrat.variable}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
              <ToastContainer />
            </div>
          </ThemeProvider>
        </CacheProvider>
      </WagmiConfig>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
