import Image from 'next/image';
import { useRouter } from 'next/router';

import Seo from '@/components/V2/Common/Seo';
import Header from '@/components/V2/Header';
import Footer from '@/components/V2/Footer';
import { DarkGlassWrapper } from '@/components/V2/Common/GlassWrapper';

import { LayoutContainer } from './styles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { asPath } = useRouter();

  return (
    <>
      <Seo />
      <LayoutContainer>
        <Image
          src='/images/v2/background.jpg'
          width={1000}
          height={1000}
          alt='Background'
          className='background-img'
          style={{opacity:0.4}}
        />

        <div className='main-wrapper'>
            <div className='layout-wrapper'>
              {!(asPath === '/sign-up') && <Header />}

              <main>{children}</main>

              {!(asPath === '/sign-up') && <Footer />}
            </div>
        </div>
      </LayoutContainer>
    </>
  );
};

export default Layout;
