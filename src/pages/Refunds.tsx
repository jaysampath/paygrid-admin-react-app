import React from 'react';
import { Page } from '../components/Page';
import { PageHeader } from '../components/PageHeader';

export const Refunds: React.FC = () => {
  return (
    <Page>
      <PageHeader title="Refunds">
        Manage Refunds
      </PageHeader>
      {/* Refunds content will go here */}
    </Page>
  );
};