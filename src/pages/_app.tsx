import { type AppType } from 'next/app'
import { type Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { Montserrat } from 'next/font/google'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'

import Layout from '@/components/layout'
import { api } from '@/utils/api'
import createEmotionCache from '@/utils/create-emotion-cache'
import theme from '@/styles/theme'

const clientSideEmotionCache = createEmotionCache()

const lightTheme = createTheme(theme)
const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--Montserrat',
})

const MyApp: AppType<{
  session: Session | null
  emotionCache?: EmotionCache
}> = ({
  Component,
  pageProps: { session, emotionCache = clientSideEmotionCache, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <div className={montserrat.variable}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </div>
        </ThemeProvider>
      </CacheProvider>
    </SessionProvider>
  )
}

export default api.withTRPC(MyApp)
