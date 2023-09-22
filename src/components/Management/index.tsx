import { Typography } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import { ArrowLeftIcon2, ArrowRightIcon2 } from '@/components/Icons';
import { ManagementContainer } from './styles';

interface ManagementProps {
  title: string;
  hasAll?: boolean;
  handleBackward: () => void;
  handleForward: () => void;
}

const Management = ({
  title,
  hasAll = true,
  handleBackward,
  handleForward,
}: ManagementProps) => {
  return (
    <ManagementContainer>
      <Typography variant='h5'>{title}</Typography>

      <FlexBox gap={3}>
        <FlexBox gap={2.25}>
          <ArrowLeftIcon2
            sx={{ fontSize: 14, cursor: 'pointer' }}
            onClick={handleBackward}
          />

          <ArrowRightIcon2
            sx={{ fontSize: 14, cursor: 'pointer' }}
            onClick={handleForward}
          />
        </FlexBox>

        {hasAll && (
          <Typography
            variant='body4'
            fontWeight={700}
            component='div'
            className='see-all'
          >
            See All
          </Typography>
        )}
      </FlexBox>
    </ManagementContainer>
  );
};

export default Management;
