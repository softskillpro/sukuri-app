import { memo, ComponentProps, ChangeEvent } from 'react';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { HeroGlow } from '@/components/Common/HeroGlow';
import { InputWrapperContainer } from './styles';

interface InputWrapperProps extends ComponentProps<'input'> {
  title: string;
  format: 'input' | 'textarea';
  handleChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => void;
}

const InputWrapper = ({
  title,
  format,
  value,
  name,
  type,
  placeholder,
  className,
  handleChange,
}: InputWrapperProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <InputWrapperContainer>
      <Typography variant={matches ? 'bodyBoldMobile' : 'h4Mobile'}>
        {title}
      </Typography>

      <div className='input-wrap'>
        <HeroGlow sx={{ opacity: 0.2 }} />

        {format === 'input' ? (
          <input
            value={value}
            type={type}
            required
            name={name}
            placeholder={placeholder}
            maxLength={12}
            className={className || 'input-text'}
            onChange={handleChange}
          />
        ) : (
          <textarea
            value={value}
            required
            name={name}
            rows={4}
            placeholder={placeholder}
            className={className || 'input-text'}
            onChange={handleChange}
          />
        )}
      </div>
    </InputWrapperContainer>
  );
};

export default memo(InputWrapper);
