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
          alt='Background'
          priority
          className='background-img'
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />

        {!(asPath === '/' || asPath === '/new-user') && <Header />}
        <main>{children}</main>
      </LayoutContainer>
    </>
  );
};

export default Layout;
