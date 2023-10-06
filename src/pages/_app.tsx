import { type AppType } from 'next/app';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import RuntimeContextProvider from '@/provider/RuntimeContextProvider';
import Layout from '@/components/Common/Layout';
import { api } from '@/utils/api';
import createEmotionCache from '@/utils/create-emotion-cache';
import theme from '@/styles/theme';
import 'react-toastify/dist/ReactToastify.css';

import { WagmiConfig } from 'wagmi';
import wagmiConfig from '@/configure/wagmi';

const clientSideEmotionCache = createEmotionCache();

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--Inter',
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
        <RuntimeContextProvider>
          <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <div className={inter.variable}>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
                <ToastContainer />
              </div>
            </ThemeProvider>
          </CacheProvider>
        </RuntimeContextProvider>
      </WagmiConfig>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
