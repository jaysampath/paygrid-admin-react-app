import React, { useState } from 'react';
import { Page } from '../components/Page';
import { PageHeader } from '../components/PageHeader';
import { FilterPanel } from '../components/FilterPanel';
import { FormField } from '../components/FormField';
import { Toolbar } from '../components/Toolbar';
import { DataTable } from '../components/DataTable';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { StatusBadge } from '../components/StatusBadge';

// Mock data
const transactions = [
  {
    id: 'txn1',
    date: '2025-10-19',
    transactionId: 'TXN123456',
    amount: '₹5,000',
    status: 'success' as const,
    type: 'Credit',
    merchant: 'ABC Store',
    retailer: 'Retailer 1'
  },
  {
    id: 'txn2',
    date: '2025-10-19',
    transactionId: 'TXN123457',
    amount: '₹3,500',
    status: 'pending' as const,
    type: 'Debit',
    merchant: 'XYZ Mart',
    retailer: 'Retailer 2'
  }
];

export const Transactions: React.FC = () => {
  // Filter state
  const [filters, setFilters] = useState({
    dateFrom: '',
    dateTo: '',
    transactionId: '',
    status: '',
    type: '',
    retailer: ''
  });

  // Selected rows state
  const [selectedTransactions, setSelectedTransactions] = useState<string[]>([]);

  const handleFilterChange = (field: keyof typeof filters) => (value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleApplyFilters = () => {
    console.log('Applying filters:', filters);
    // Implement filter logic here
  };

  const handleResetFilters = () => {
    setFilters({
      dateFrom: '',
      dateTo: '',
      transactionId: '',
      status: '',
      type: '',
      retailer: ''
    });
  };

  const handleExport = () => {
    console.log('Exporting transactions:', selectedTransactions);
  };

  const handleRefresh = () => {
    console.log('Refreshing transactions');
  };

  return (
    <Page>
      <PageHeader title="Transactions">
        View Transactions
      </PageHeader>

      <FilterPanel onApply={handleApplyFilters} onReset={handleResetFilters}>
        <FormField
          label="From Date"
          type="date"
          value={filters.dateFrom}
          onChange={handleFilterChange('dateFrom')}
        />
        <FormField
          label="To Date"
          type="date"
          value={filters.dateTo}
          onChange={handleFilterChange('dateTo')}
        />
        <FormField
          label="Transaction ID"
          value={filters.transactionId}
          onChange={handleFilterChange('transactionId')}
          placeholder="Enter transaction ID"
        />
        <FormField
          label="Status"
          type="select"
          value={filters.status}
          onChange={handleFilterChange('status')}
          options={[
            { value: 'success', label: 'Success' },
            { value: 'pending', label: 'Pending' },
            { value: 'failed', label: 'Failed' }
          ]}
        />
        <FormField
          label="Type"
          type="select"
          value={filters.type}
          onChange={handleFilterChange('type')}
          options={[
            { value: 'credit', label: 'Credit' },
            { value: 'debit', label: 'Debit' }
          ]}
        />
        <FormField
          label="Retailer"
          value={filters.retailer}
          onChange={handleFilterChange('retailer')}
          placeholder="Enter retailer name"
        />
      </FilterPanel>

      <Toolbar
        left={
          <>
            {selectedTransactions.length > 0 && (
              <span>{selectedTransactions.length} items selected</span>
            )}
          </>
        }
        right={
          <>
            <Button variant="secondary" onClick={handleExport}>
              Export
            </Button>
            <Button variant="primary" onClick={handleRefresh}>
              Refresh
            </Button>
          </>
        }
      />

      <Card>
        <DataTable
          data={transactions}
          selectable
          onSelectionChange={setSelectedTransactions}
          columns={[
            { header: 'Date', accessor: 'date' },
            { header: 'Transaction ID', accessor: 'transactionId' },
            { header: 'Amount', accessor: 'amount' },
            { 
              header: 'Status', 
              accessor: row => <StatusBadge status={row.status}>{row.status}</StatusBadge>
            },
            { header: 'Type', accessor: 'type' },
            { header: 'Merchant', accessor: 'merchant' },
            { header: 'Retailer', accessor: 'retailer' },
            { 
              header: 'Actions', 
              accessor: row => (
                <Button 
                  variant="secondary" 
                  size="sm" 
                  onClick={() => console.log('View transaction details', row.id)}
                >
                  View Details
                </Button>
              )
            }
          ]}
        />
      </Card>
    </Page>
  );
};