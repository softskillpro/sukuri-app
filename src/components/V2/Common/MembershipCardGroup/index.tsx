import MembershipCard from '@/components/V2/Common/MembershipCard';
import { MembershipCardGroupContainer } from './styles';

type MembershipCardGroupProps = {
  membershipPrice?: string,
};
const MembershipCardGroup = ({membershipPrice}: MembershipCardGroupProps) => {
  return (
    <MembershipCardGroupContainer className='membership-card-container'>
      <MembershipCard
        title='memberships'
        memberships={[{ price: `${membershipPrice ? membershipPrice : "0.005"}Ξ`, state: 'starting at' }]}
        className='membership-1'
      />
      <MembershipCard
        title='secondary'
        memberships={[
          { price: '0.0045Ξ', state: 'floor' },
          { price: '1.25Ξ', state: '24h vol' },
        ]}
        className='secondary-1'
      />
    </MembershipCardGroupContainer>
  );
};

export default MembershipCardGroup;
