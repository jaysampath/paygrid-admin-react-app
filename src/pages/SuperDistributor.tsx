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
const superDistributors = [
  {
    id: 'sd1',
    name: 'Super Corp',
    masterDistributor: 'John Distributor',
    email: 'super@example.com',
    phone: '+91 98765 43210',
    balance: '₹150,000',
    status: 'active' as const,
    retailers: 145,
    transactions: 3234
  },
  {
    id: 'sd2',
    name: 'Mega Distributors',
    masterDistributor: 'Jane Distributor',
    email: 'mega@example.com',
    phone: '+91 98765 43211',
    balance: '₹125,000',
    status: 'inactive' as const,
    retailers: 98,
    transactions: 2156
  }
];

export const SuperDistributor: React.FC = () => {
  // Filter state
  const [filters, setFilters] = useState({
    name: '',
    masterDistributor: '',
    email: '',
    status: ''
  });

  // Selected rows state
  const [selectedDistributors, setSelectedDistributors] = useState<string[]>([]);

  const handleFilterChange = (field: keyof typeof filters) => (value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleApplyFilters = () => {
    console.log('Applying filters:', filters);
  };

  const handleResetFilters = () => {
    setFilters({
      name: '',
      masterDistributor: '',
      email: '',
      status: ''
    });
  };

  const handleAddDistributor = () => {
    console.log('Opening add super distributor modal');
  };

  const handleBulkAction = (action: string) => {
    console.log('Bulk action:', action, 'for distributors:', selectedDistributors);
  };

  return (
    <Page>
      <PageHeader title="Super Distributor">
        Manage Super Distributors
      </PageHeader>

      <FilterPanel onApply={handleApplyFilters} onReset={handleResetFilters}>
        <FormField
          label="Name"
          value={filters.name}
          onChange={handleFilterChange('name')}
          placeholder="Search by name"
        />
        <FormField
          label="Master Distributor"
          value={filters.masterDistributor}
          onChange={handleFilterChange('masterDistributor')}
          placeholder="Search by master distributor"
        />
        <FormField
          label="Email"
          type="email"
          value={filters.email}
          onChange={handleFilterChange('email')}
          placeholder="Search by email"
        />
        <FormField
          label="Status"
          type="select"
          value={filters.status}
          onChange={handleFilterChange('status')}
          options={[
            { value: 'active', label: 'Active' },
            { value: 'inactive', label: 'Inactive' }
          ]}
        />
      </FilterPanel>

      <Toolbar
        left={
          <>
            {selectedDistributors.length > 0 && (
              <>
                <span>{selectedDistributors.length} selected</span>
                <Button 
                  variant="danger" 
                  size="sm" 
                  onClick={() => handleBulkAction('deactivate')}
                >
                  Deactivate Selected
                </Button>
              </>
            )}
          </>
        }
        right={
          <Button variant="primary" onClick={handleAddDistributor}>
            Add Super Distributor
          </Button>
        }
      />

      <Card>
        <DataTable
          data={superDistributors}
          selectable
          onSelectionChange={setSelectedDistributors}
          columns={[
            { header: 'Name', accessor: 'name' },
            { header: 'Master Distributor', accessor: 'masterDistributor' },
            { header: 'Email', accessor: 'email' },
            { header: 'Phone', accessor: 'phone' },
            { header: 'Balance', accessor: 'balance' },
            { 
              header: 'Status', 
              accessor: row => (
                <StatusBadge status={row.status === 'active' ? 'success' : 'failed'}>
                  {row.status}
                </StatusBadge>
              )
            },
            { header: 'Retailers', accessor: 'retailers' },
            { header: 'Transactions', accessor: 'transactions' },
            { 
              header: 'Actions', 
              accessor: row => (
                <>
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    onClick={() => console.log('View details', row.id)}
                  >
                    View Details
                  </Button>
                  {row.status === 'active' && (
                    <Button 
                      variant="danger" 
                      size="sm" 
                      onClick={() => console.log('Deactivate', row.id)}
                      style={{ marginLeft: '8px' }}
                    >
                      Deactivate
                    </Button>
                  )}
                </>
              )
            }
          ]}
        />
      </Card>
    </Page>
  );
};