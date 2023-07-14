import { useTheme } from '@mui/material/styles';
import { StyledButtonProps, StyledButtonContainer } from './styles';

interface ButtonProps extends StyledButtonProps {
  children?: React.ReactNode;
}

const StyledButton = ({
  children,
  status = 'Positive',
  size = 'md',
  disabled = false,
}: ButtonProps) => {
  const theme = useTheme();

  return (
    <StyledButtonContainer
      size={size}
      disabled={disabled}
      sx={{
        backgroundColor:
          status === 'Navigation'
            ? theme.palette.blue.dark
            : status === 'Positive'
            ? theme.palette.green.main
            : status === 'Negative'
            ? theme.palette.hardNegative.main
            : theme.palette.unavailableBg.main,
        border: `1px solid ${theme.palette.lightInternalGlassBorder.main}`,

        ':disabled': {
          backgroundColor: theme.palette.unavailableBg.main,
          cursor: 'not-allowed',
        },
      }}
    >
      {children}
    </StyledButtonContainer>
  );
};

export default StyledButton;
