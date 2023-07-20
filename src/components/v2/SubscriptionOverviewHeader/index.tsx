import { useCallback, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import ActionToggler from '@/components/v2/Common/ActionToggler';
import TokenCardGroup from '@/components/v2/Common/TokenCardGroup';
import FlexBox from '@/components/v2/Common/FlexBox';
import type { Action } from '@/interface/action.interface';
import ManageIcon from '../svgs/ManageIcon';
import {
  SubscriptionOverviewHeaderContainer,
  SubscriptionOverviewHeaderPopper,
} from './styles';

const SubscriptionOverviewHeader = () => {
  const matches = useMediaQuery('(min-width:600px)');

  const [action, setAction] = useState<Action>('Active');

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleAction = useCallback((_action: Action) => {
    setAction(_action);
    setAnchorEl(null);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'subscription-overview-header-popper' : undefined;

  return (
    <>
      <SubscriptionOverviewHeaderContainer>
        {matches && (
          <FlexBox className='action-toggle-wrapper'>
            <Typography
              variant='labelSm'
              textTransform='uppercase'
              textAlign='center'
              lineHeight={1}
              mb={0.625}
            >
              Subscription Status
            </Typography>

            <ActionToggler action={action} onClick={handleAction} />
          </FlexBox>
        )}

        <Typography variant='h4' textTransform='uppercase' textAlign='center'>
          Manage your subscriptions
        </Typography>

        {!matches && (
          <IconButton onClick={handleClick}>
            <ManageIcon />
          </IconButton>
        )}

        {matches && <TokenCardGroup variant='Horizontal' />}
      </SubscriptionOverviewHeaderContainer>

      <SubscriptionOverviewHeaderPopper id={id} open={open} anchorEl={anchorEl}>
        <TokenCardGroup
          variant='Vertical'
          className='subscription-token-card-group'
        />

        <ActionToggler action={action} onClick={handleAction} />
      </SubscriptionOverviewHeaderPopper>
    </>
  );
};

export default SubscriptionOverviewHeader;
