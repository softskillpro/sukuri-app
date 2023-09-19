import { styled } from '@mui/material';

const StyledButton = styled('button')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '15px 38px',
  borderRadius: 6,
  border: 'none', // `1px solid ${theme.palette.border.main}`,
  background: theme.palette.greyGradient.main,
  boxShadow: theme.palette.boxShadow.main,
  backdropFilter: 'blur(25px)',
  cursor: 'pointer',
  fontSize: 16,
  fontWeight: 700,
  fontFamily: 'var(--Inter)',
  color: theme.palette.text.secondary,

  [theme.breakpoints.down('md')]: {
    fontSize: 10,
    fontWeight: 600,
    padding: '9px 24px',
  },
}));

const ButtonWrapper = styled('div')(({ theme }) => ({
  position: 'relative',

  '.button-glow': {
    position: 'absolute',
    width: '75%',
    height: '100%',
    bottom: 0,
    borderRadius: 6,
    opacity: 0.8,
    background: theme.palette.secondary.main,
  },
}));

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  sx?: any;
}

const Button = ({ children, onClick, sx }: ButtonProps) => {
  return (
    <ButtonWrapper onClick={onClick}>
      <div className='button-glow' />

      <StyledButton sx={sx}>{children}</StyledButton>
    </ButtonWrapper>
  );
};

export default Button;
