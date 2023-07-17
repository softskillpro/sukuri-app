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
      {children}
    </SidebarLayoutContainer>
  );
};

export default SidebarLayout;
