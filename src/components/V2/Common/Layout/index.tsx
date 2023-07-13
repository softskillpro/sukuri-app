import Image from 'next/image';
import { useRouter } from 'next/router';

import Seo from '@/components/V2/Common/Seo';
import Header from '@/components/header';
import Footer from '@/components/footer';
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
        />

        <div className='main-wrapper'>
          <DarkGlassWrapper>
            {!(asPath === '/new-user') && <Header />}
            <main>{children}</main>
            <Footer />
          </DarkGlassWrapper>
        </div>
      </LayoutContainer>
    </>
  );
};

export default Layout;
