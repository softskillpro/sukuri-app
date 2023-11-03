import * as React from 'react';
import { StyledButton, StyledMenu, StyledMenuItem } from './styles';

import { ArrowDownIcon } from '../Icons';
import { priceRange } from '@/constants';

interface PriceFilterPopupProps {
  selectedPriceRange: string;
  handlePriceRangeChange: (range: string) => void;
}

const PriceFilterPopup: React.FC<PriceFilterPopupProps> = ({
  selectedPriceRange,
  handlePriceRangeChange,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <StyledButton
        id='demo-customized-button'
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        disableRipple
        disableFocusRipple
        disableTouchRipple
        variant='contained'
        onClick={handleClick}
        endIcon={
          <ArrowDownIcon
            sx={{ fontSize: '14px !important', fill: 'transparent' }}
          />
        }
      >
        {selectedPriceRange}
      </StyledButton>
      <StyledMenu
        id='demo-customized-menu'
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {priceRange.map((range, index) => (
          <StyledMenuItem
            active={range === selectedPriceRange}
            key={index}
            onClick={() => {
              handlePriceRangeChange(range);
              handleClose();
            }}
            disableRipple
          >
            {range}
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </div>
  );
};

export default PriceFilterPopup;
