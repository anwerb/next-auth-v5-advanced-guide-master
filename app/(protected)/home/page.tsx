'use client'
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';

import { useCollection } from '@cloudscape-design/collection-hooks';
import { useLocalStorage } from '@/components/use-local-storage';
import { CARD_DEFINITIONS, VISIBLE_CONTENT_OPTIONS, PAGE_SIZE_OPTIONS, DEFAULT_PREFERENCES } from '@/components/cards/cards-config';
import { Cards, CollectionPreferences, Grid, Header, Pagination, TextFilter } from '@cloudscape-design/components'
import {
  TableEmptyState,
  TableNoMatchState,
} from '@/components/common-components';
import {
  getTextFilterCounterText,
  getHeaderCounterText
} from '@/components/i18n-strings/common';
import DataProvider from '@/components/data-provider';
import { FullPageHeader } from '@/components/full-page-header';

function DetailsCards() {
   
    //const [selectedItems,setSelectedItems] =useState([])
    const [loading, setLoading] = useState(false);
    const [food, setfood] = useState<any[]>(new DataProvider().getData());
    const [preferences, setPreferences] = useLocalStorage('React-Cards-Preferences', DEFAULT_PREFERENCES);
    const { items, actions, filteredItemsCount, collectionProps , filterProps, paginationProps } = useCollection(
      food,
      {
        filtering: {
          empty: <TableEmptyState resourceName="Food" />,
          noMatch: <TableNoMatchState onClearFilter={() => actions.setFiltering('')} />,
        },
        pagination: { pageSize: preferences.pageSize },
        selection: {},
      }
    ); 
  
    
  
    return (
    <> <Grid
    gridDefinition={[{ colspan: 8 }, { colspan: 4 }]}
  > 
    
      <Cards
        {...collectionProps}
        cardsPerRow={[
          { cards: 2 }     
        ]}
        stickyHeader={true}
        cardDefinition={CARD_DEFINITIONS}
        visibleSections={preferences.visibleContent}
        loading={loading}
        loadingText="Loading distributions"
        items={items}
        selectionType="multi"
        variant="full-page"
        header={
          
            <FullPageHeader
            selectedItemsCount={collectionProps.selectedItems?.length ?? 0}
          counter={getHeaderCounterText(food, collectionProps.selectedItems)}
         
          />
        }
        filter={
          <TextFilter
            {...filterProps}
            filteringAriaLabel="Filter food"
            filteringPlaceholder="Find food"
            filteringClearAriaLabel="Clear"
            countText={getTextFilterCounterText(filteredItemsCount)}
            disabled={loading}
          />
        }
        pagination={<Pagination {...paginationProps} disabled={loading} />}
        preferences={
          <CollectionPreferences
            title="Preferences"
            confirmLabel="Confirm"
            cancelLabel="Cancel"
            disabled={loading}
            preferences={preferences}
            //onConfirm={({ detail }) => setPreferences(detail)}
            pageSizePreference={{
              title: 'Page size',
              options: PAGE_SIZE_OPTIONS,
            }}
            visibleContentPreference={{
              title: 'Select visible columns',
              options: VISIBLE_CONTENT_OPTIONS,
            }}
          />
        }
      />
      <div>

      </div>
      </Grid>
      </>
    );
  }
  
export default function App() {
    
    return (
      
      <DetailsCards>
        
    </DetailsCards>
    
    );
  }


