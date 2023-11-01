import PartnershipHero from '@/components/PartnershipHero';
import BecomeAnAffiliate from '@/components/BecomeAnAffiliate';
import { PartnershipContainer } from '@/styles/partnership';

const Partnership = () => {
  return (
    <PartnershipContainer>
      <PartnershipHero />
      <BecomeAnAffiliate />
    </PartnershipContainer>
  );
};

export default Partnership;
