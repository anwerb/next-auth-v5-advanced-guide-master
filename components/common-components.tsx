/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { forwardRef } from 'react';
import { AppLayout, AppLayoutProps, Badge, Box, Button, Link, SpaceBetween } from '@cloudscape-design/components';
import enMessages from '@cloudscape-design/components/i18n/messages/all.en.json';
import { I18nProvider } from '@cloudscape-design/components/i18n';

export const TableNoMatchState = ({ onClearFilter }: { onClearFilter: () => void }) => (
    <Box margin={{ vertical: 'xs' }} textAlign="center" color="inherit">
      <SpaceBetween size="xxs">
        <div>
          <b>No matches</b>
          <Box variant="p" color="inherit">
            We can't find a match.
          </Box>
        </div>
        <Button onClick={onClearFilter}>Clear filter</Button>
      </SpaceBetween>
    </Box>
  );
  
  export const TableEmptyState = ({ resourceName }: { resourceName: string }) => (
    <Box margin={{ vertical: 'xs' }} textAlign="center" color="inherit">
      <SpaceBetween size="xxs">
        <div>
          <b>No {resourceName.toLowerCase()}s</b>
          <Box variant="p" color="inherit">
            No {resourceName.toLowerCase()}s associated with this resource.
          </Box>
        </div>
        <Button>Create {resourceName.toLowerCase()}</Button>
      </SpaceBetween>
    </Box>
  );
  
export const CustomAppLayout = forwardRef<AppLayoutProps.Ref, AppLayoutProps>((props, ref) => {
    return (
      <I18nProvider locale="en" messages={[enMessages]}>
        <AppLayout ref={ref} {...props} />
      </I18nProvider>
    );
  });
CustomAppLayout.displayName='CustomAppLayout';