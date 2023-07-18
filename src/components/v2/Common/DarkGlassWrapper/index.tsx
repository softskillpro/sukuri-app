interface LightGlassWrapperProps {
  children: React.ReactNode;
}

import { ChildWrapper } from './styles';

export const DarkGlassWrapper = ({ children }: LightGlassWrapperProps) => {
  return (
    <>
      <div
        aria-hidden='true'
        style={{
          height: 'inherit',
          width: 'inherit',
          content: ' ',
          border: '1px solid rgba(255,255,255,0.2)',
          backgroundColor: 'rgba(0,0,0,0.4)',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />
      <ChildWrapper>{children}</ChildWrapper>
    </>
  );
};
