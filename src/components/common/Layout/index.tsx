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
      <Header />

      <main>
        <Image
          src='/images/background.png'
          width={500}
          height={500}
          alt='Background'
          className='background-img'
        />

        {children}
      </main>

      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
