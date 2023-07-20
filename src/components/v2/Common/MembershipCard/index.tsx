import Typography from '@mui/material/Typography';
import FlexBox from '@/components/v2/Common/FlexBox';

import { MembershipCardContainer } from './styles';

interface MembershipCardProps {
  title: string;
  memberships: {
    price: string;
    state: string;
  }[];
  className?: string;
}

const MembershipCard = ({
  title,
  memberships,
  className = 'membership-card',
}: MembershipCardProps) => {
  return (
    <MembershipCardContainer
      lengs={`${memberships.length}`}
      className={className}
    >
      <Typography
        variant='labelMd'
        component='div'
        lineHeight={1}
        textTransform='uppercase'
        textAlign='center'
        className='membership-header'
      >
        {title}
      </Typography>

      <FlexBox sx={{ width: '100%' }}>
        {memberships.map((membership, id) => (
          <div
            key={`membership-${id}`}
            className='membership-price-card'
            style={{ width: `calc(100% / ${memberships.length}` }}
          >
            <Typography
              variant='labelMd'
              component='div'
              lineHeight={1}
              textAlign='center'
              className='membership-price-value'
            >
              {membership.price}
            </Typography>
            <Typography
              variant='labelSm'
              component='div'
              lineHeight={1}
              textTransform='uppercase'
              textAlign='center'
              className='membership-price-state'
              sx={{
                borderRadius:
                  memberships.length === 1
                    ? '0px 0px 5px 5px'
                    : id === 0
                    ? '0 0px 0px 5px'
                    : '0px 0 5px 0',
              }}
            >
              {membership.state}
            </Typography>
          </div>
        ))}
      </FlexBox>
    </MembershipCardContainer>
  );
};

export default MembershipCard;
