import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@/components/svgs/CheckCircleIcon';
import { ColorPalettes, ColorPanel } from './styles';

interface ColorPickerProps {
  title: string;
  colors: string[];
  column?: number;
}

const ColorPicker = ({ title, colors, column = 1 }: ColorPickerProps) => {
  const [selected, setSelected] = useState('');

  const handleClick = (_color: string) => {
    setSelected(_color);
  };

  return (
    <>
      <Typography variant='custom2' fontWeight={500} mb={0.5}>
        {title}
      </Typography>

      <ColorPalettes container>
        {colors.map((color, id) => (
          <Grid
            key={`palette-${id}`}
            item
            xs={12 / column}
            sx={{ position: 'relative' }}
            onClick={() => handleClick(color)}
          >
            <ColorPanel
              sx={{
                background: color,
                borderRadius:
                  column === 1
                    ? id === 0
                      ? '5px 5px 0px 0px'
                      : id === colors.length - 1
                      ? '0px 0px 5px 5px'
                      : 0
                    : id === 0
                    ? '5px 0 0 0'
                    : id === 1
                    ? '0 5px 0 0'
                    : id === colors.length - 1
                    ? '0px 0px 5px 0'
                    : id === colors.length - 2
                    ? '0px 0px 0 5px'
                    : 0,
              }}
            />
            {selected === color && (
              <CheckCircleIcon
                sx={{
                  position: 'absolute',
                  top: '50%',
                  right: '50%',
                  transform: 'translate(50%, -50%)',
                  fontSize: 18,
                }}
              />
            )}
          </Grid>
        ))}
      </ColorPalettes>
    </>
  );
};

export default ColorPicker;
