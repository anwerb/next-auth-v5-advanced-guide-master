'use client'
import { SplitPanelProps, TableProps } from '@cloudscape-design/components';

export const renderAriaLive: TableProps['renderAriaLive'] = ({ firstIndex, lastIndex, totalItemsCount }) =>
  `Displaying items ${firstIndex} to ${lastIndex} of ${totalItemsCount}`;

export const getHeaderCounterText = (
    items: ReadonlyArray<unknown>,
    selectedItems: ReadonlyArray<unknown> | undefined
  ) => {
    return selectedItems && selectedItems?.length > 0 ? `(${selectedItems.length}/${items.length})` : `(${items.length})`;
  };
  
  export const baseTableAriaLabels: TableProps.AriaLabels<unknown> = {
    allItemsSelectionLabel: () => 'select all',
  };

  export const distributionTableAriaLabels: TableProps.AriaLabels<{ id: string }> = {
    ...baseTableAriaLabels,
    itemSelectionLabel: (data, row) => `select ${row.id}`,
    selectionGroupLabel: 'Distribution selection',
  };
  
  export const getTextFilterCounterText = (count: number | undefined) => `${count} ${count === 1 ? 'match' : 'matches'}`;

  
  
  export const getHeaderCounterServerSideText = (totalCount: number, selectedCount: number | undefined) => {
    return selectedCount && selectedCount > 0 ? `(${selectedCount}/${totalCount}+)` : `(${totalCount}+)`;
  };