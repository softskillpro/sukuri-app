import Image from 'next/image';
import { useRouter } from 'next/router';

import Seo from '@/components/v2/Common/Seo';
import Header from '@/components/v2/header';
import Footer from '@/components/v2/Footer';

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
          alt='Background'
          priority
          className='background-img'
          fill={true}
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
