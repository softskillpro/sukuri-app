import MembershipCard from '@/components/v2/Common/MembershipCard';
import { MembershipCardGroupContainer } from './styles';

const MembershipCardGroup = () => {
  return (
    <MembershipCardGroupContainer className='membership-card-container'>
      <MembershipCard
        title='memberships'
        memberships={[{ price: '0.005Ξ', state: 'starting at' }]}
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
