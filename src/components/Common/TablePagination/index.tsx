import { useState, ChangeEvent, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Typography } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import { PaginationContainer, Pagination } from './styles';
import useDebounce from '@/hooks/useDebounce';

interface TablePaginationProps {
  page: number;
  count: number;
  numOfItems: number;
  handlePageChange: (_page: number) => void;
}

const TablePagination = ({
  page,
  count,
  numOfItems,
  handlePageChange,
}: TablePaginationProps) => {
  const [goTo, setGoTo] = useState('');

  const debouncedValue = useDebounce(goTo, 1000);

  useEffect(() => {
    if (debouncedValue) {
      handlePageChange(Number(debouncedValue));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    handlePageChange(value);
  };

  const handlePageUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    const _page = e.target.value;

    if (Number(_page) > count) {
      toast.error('The page number exceeds the number of elements.');
      return;
    }

    setGoTo(_page);
  };

  return (
    <PaginationContainer sx={{ mt: 6 }}>
      <Pagination
        variant='outlined'
        shape='rounded'
        count={count}
        page={page}
        onChange={handleChange}
      />

      <FlexBox className='go-to-page'>
        <Typography variant='body3Bold'>Go to</Typography>

        <input value={goTo} type='text' onChange={handlePageUpdate} />

        <Typography variant='body4'>
          1-{count} of {numOfItems} items
        </Typography>
      </FlexBox>
    </PaginationContainer>
  );
};

export default TablePagination;
