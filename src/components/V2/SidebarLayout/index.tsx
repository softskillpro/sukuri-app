import DiscoverCreatorsCard from '@/components/v2/Common/DiscoverCreatorsCard';
import TopCategoriesCard from '@/components/v2/Common/TopCategoriesCard';
import { SidebarLayoutContainer } from './styles';

interface SidebarLayoutProps {
  className?: string;
  children: React.ReactNode;
}

const SidebarLayout = ({
  className = 'sidebar-layout',
  children,
}: SidebarLayoutProps) => {
  return (
    <SidebarLayoutContainer className={className}>
      <section>
        <DiscoverCreatorsCard />
        <TopCategoriesCard className='top-categories-card' />
      </section>

      {children}
    </SidebarLayoutContainer>
  );
};

export default SidebarLayout;
