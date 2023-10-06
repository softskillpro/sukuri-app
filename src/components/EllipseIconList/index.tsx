import { FlexBox } from '@/components/Common/FlexBox';
import { EllipseIcon } from '@/components/Icons';

const EllipseIconList = () => {
  return (
    <FlexBox sx={{ gap: 0.375 }}>
      {[0, 1, 2].map((item) => (
        <EllipseIcon key={`ellipse-${item}`} sx={{ fontSize: 8 }} />
      ))}
    </FlexBox>
  );
};

export default EllipseIconList;
