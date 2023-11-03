import React from 'react';
import BasicAccordion from '../Accordion';
import CurrencySwitcher from '../CurrencySwitcher';
import { statues } from '@/constants';
import { SideBarWrapper, StatusButton } from './styles';
import { FlexBox } from '../Common/FlexBox';
import { Category, Status } from '@/types';
import CheckboxesGroup from '../CategoriesCheckBoxes';

interface IProps {
  activeCategory: Category;
  handleSearch: (search?: string) => void;
  handleCategoryChange: (category: Category) => void;
  currency: string;
  handleCurrencyChange: (_currency: string) => void;
  activeStatus: Status;
  handleStatusChange: (_status: Status) => void;
}

const SidebarFilter: React.FC<IProps> = ({
  activeStatus,
  handleStatusChange,
  currency,
  handleCurrencyChange,
}) => {
  return (
    <SideBarWrapper>
      <BasicAccordion title='Change currency'>
        <CurrencySwitcher
          currency={currency}
          handleCurrencyChange={handleCurrencyChange}
        />
      </BasicAccordion>

      <BasicAccordion title='Status'>
        <FlexBox flexWrap='wrap' gap={1}>
          {statues.map((status) => (
            <StatusButton
              key={status.value}
              active={status.value === activeStatus.value}
              onClick={() => handleStatusChange(status)}
            >
              {status.name}
            </StatusButton>
          ))}
        </FlexBox>
      </BasicAccordion>
      <BasicAccordion title='Category'>
        <CheckboxesGroup />
      </BasicAccordion>
    </SideBarWrapper>
  );
};

export default SidebarFilter;
