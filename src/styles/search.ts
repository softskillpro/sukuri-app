import { styled } from '@mui/material/styles';

export const SearchPageContainer = styled('div')(() => ({}));

export const SidebarFilterWrapper = styled('div')<{ isShowFilter: boolean }>(
  ({ isShowFilter }) => ({
    display: 'grid',
    gridTemplateColumns: isShowFilter ? '3fr 9fr' : '1fr',
    gridColumnGap: '28px',
    marginTop: 25,
    marginBottom: 200,
  }),
);
