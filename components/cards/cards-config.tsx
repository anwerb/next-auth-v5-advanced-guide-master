'use client'

import React from 'react';
import { BarChart, Box, Button, Grid, Link, PieChart, StatusIndicator } from '@cloudscape-design/components';


export const CARD_DEFINITIONS = {
  
  header: (item: { name: any }) => (
    <div>
      <Link fontSize="heading-m">
        {item.name}
      </Link>
    </div>
  ),
  sections: [
    {
      id: 'tags',
      header: 'Tags',
      content: (item: { tags: string[]; }) => item.tags,
    },
    {
      id: 'macros',
      header: 'Macros (per 100g)',
      content: (item: { nutrition_per_100g: any; }) => // Object.keys(item.nutrition_per_100g).map(key => `${key} = ${item.nutrition_per_100g[key]}`).join(',')
      <Grid
      gridDefinition={[{ colspan: 6 }, { colspan: 6 }]}>
        <PieChart
        fitHeight
      data={[
        {
          title: "protein",
          value: item.nutrition_per_100g['protein'],
          lastUpdate: "Dec 7, 2020"
        },
        {
          title: "fat",
          value: item.nutrition_per_100g['fat'],
          lastUpdate: "Dec 6, 2020"
        },
        {
          title: "carbohydrate",
          value: item.nutrition_per_100g['carbohydrate'],
          lastUpdate: "Dec 6, 2020"
        }
      ]}
      hideLegend
      hideFilter
      empty={
        <Box textAlign="center" color="inherit">
          <b>No data available</b>
          <Box variant="p" color="inherit">
            There is no data available
          </Box>
        </Box>
      }
      noMatch={
        <Box textAlign="center" color="inherit">
          <b>No matching data</b>
          <Box variant="p" color="inherit">
            There is no matching data to display
          </Box>
          <Button>Clear filter</Button>
        </Box>
      }
    />

<BarChart
      series={[
        {
          title: "Energy per 100g",
          type: "bar",
          data: [
            { x: 'Energy', y: item.nutrition_per_100g['energy'] }
          ],
          valueFormatter: e =>
            
            e.toLocaleString("en-US", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0
            })
        },
      ]}
      yDomain={[0, 2000]}
      
      height={300}
      hideFilter
      hideLegend
      emphasizeBaselineAxis={true}
      xDomain={['Energy']}
      xScaleType='categorical'
      //xTitle="Time (UTC)"
      
      empty={
        <Box textAlign="center" color="inherit">
          <b>No data available</b>
          <Box variant="p" color="inherit">
            There is no data available
          </Box>
        </Box>
      }
      noMatch={
        <Box textAlign="center" color="inherit">
          <b>No matching data</b>
          <Box variant="p" color="inherit">
            There is no matching data to display
          </Box>
          <Button>Clear filter</Button>
        </Box>
      }
    />
    
    </Grid>
    }
  ],
};

export const VISIBLE_CONTENT_OPTIONS = [
  {
    label: 'Main distribution properties',
    options: [
      { id: 'id', label: 'id' },
      { id: 'name', label: 'name' },
      { id: 'nutrition_per_100g', label: 'nutrition_per_100g' },
    ],
  },
];

export const PAGE_SIZE_OPTIONS = [
  { value: 10, label: '10 Distributions' },
  { value: 30, label: '30 Distributions' },
  { value: 50, label: '50 Distributions' },
];

export const DEFAULT_PREFERENCES = {
  pageSize: 30,
  visibleContent: ['id', 'tags','macros'],
};