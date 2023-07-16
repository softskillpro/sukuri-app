import Image from 'next/image';
import { useRouter } from 'next/router';
import Seo from '../seo';
import Header from '@/components/header';
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

        {!(asPath === '/' || asPath === '/new-user') && <Header />}
        <main>{children}</main>
      </LayoutContainer>
    </>
  );
};

export default Layout;
