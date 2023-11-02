import { memo } from 'react';
import { Inter } from 'next/font/google';
import { Typography } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import { CloseIcon, InfoIcon } from '@/components/Icons';
import { SecondaryModal } from '@/components/Common/StyledModal';

const inter = Inter({
  subsets: ['latin'],
});

interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

const InsufficientBalanceModal = ({ open, handleClose }: ModalProps) => {
  return (
    <SecondaryModal open={open} handleClose={handleClose}>
      <FlexBox className='modal-wrapper'>
        <FlexBox className={`${inter.className} modal-body`}>
          <div
            role='button'
            tabIndex={0}
            className='close-btn'
            onClick={handleClose}
            onKeyDown={handleClose}
          >
            <CloseIcon sx={{ fontSize: 13 }} />
          </div>

          <InfoIcon sx={{ fontSize: 100 }} />

          <Typography
            variant='body3Bold'
            textAlign='center'
            my={4}
            maxWidth={250}
          >
            You do not have enough ETH to complete this transaction.
          </Typography>

          <Typography variant='body5' textAlign='center' maxWidth={250}>
            Please deposit more ETH in your wallet then try again.
          </Typography>
        </FlexBox>
      </FlexBox>
    </SecondaryModal>
  );
};

export default memo(InsufficientBalanceModal);
