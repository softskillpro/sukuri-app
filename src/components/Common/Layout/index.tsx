import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LayoutContainer } from './styles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <Image
        src='/images/background.png'
        width={1000}
        height={5000}
        priority
        quality={100}
        alt='Background'
        className='background-img'
      />

      <div className='main-wrapper'>
        <Header />

        <main style={{ width: '100%' }}>{children}</main>

        <Footer />
      </div>
    </LayoutContainer>
  );
};

export default Layout;
