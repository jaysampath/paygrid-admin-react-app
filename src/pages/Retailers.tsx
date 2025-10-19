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
const retailers = [
  {
    id: 'ret1',
    name: 'City Store',
    distributor: 'Super Corp',
    email: 'city@example.com',
    phone: '+91 98765 43210',
    balance: '₹25,000',
    status: 'active' as const,
    location: 'Mumbai',
    transactions: 534,
    lastActive: '2025-10-19'
  },
  {
    id: 'ret2',
    name: 'Metro Mart',
    distributor: 'Mega Distributors',
    email: 'metro@example.com',
    phone: '+91 98765 43211',
    balance: '₹15,000',
    status: 'inactive' as const,
    location: 'Delhi',
    transactions: 423,
    lastActive: '2025-10-18'
  }
];

export const Retailers: React.FC = () => {
  // Filter state
  const [filters, setFilters] = useState({
    name: '',
    distributor: '',
    location: '',
    status: '',
    balanceRange: ''
  });

  // Selected rows state
  const [selectedRetailers, setSelectedRetailers] = useState<string[]>([]);

  const handleFilterChange = (field: keyof typeof filters) => (value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleApplyFilters = () => {
    console.log('Applying filters:', filters);
  };

  const handleResetFilters = () => {
    setFilters({
      name: '',
      distributor: '',
      location: '',
      status: '',
      balanceRange: ''
    });
  };

  const handleAddRetailer = () => {
    console.log('Opening add retailer modal');
  };

  const handleBulkAction = (action: string) => {
    console.log('Bulk action:', action, 'for retailers:', selectedRetailers);
  };

  return (
    <Page>
      <PageHeader title="Retailers">
        Manage Retailers
      </PageHeader>

      <FilterPanel onApply={handleApplyFilters} onReset={handleResetFilters}>
        <FormField
          label="Name"
          value={filters.name}
          onChange={handleFilterChange('name')}
          placeholder="Search by name"
        />
        <FormField
          label="Distributor"
          value={filters.distributor}
          onChange={handleFilterChange('distributor')}
          placeholder="Search by distributor"
        />
        <FormField
          label="Location"
          value={filters.location}
          onChange={handleFilterChange('location')}
          placeholder="Search by location"
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
        <FormField
          label="Balance Range"
          type="select"
          value={filters.balanceRange}
          onChange={handleFilterChange('balanceRange')}
          options={[
            { value: '0-10000', label: '₹0 - ₹10,000' },
            { value: '10000-50000', label: '₹10,000 - ₹50,000' },
            { value: '50000+', label: '₹50,000+' }
          ]}
        />
      </FilterPanel>

      <Toolbar
        left={
          <>
            {selectedRetailers.length > 0 && (
              <>
                <span>{selectedRetailers.length} selected</span>
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
          <Button variant="primary" onClick={handleAddRetailer}>
            Add Retailer
          </Button>
        }
      />

      <Card>
        <DataTable
          data={retailers}
          selectable
          onSelectionChange={setSelectedRetailers}
          columns={[
            { header: 'Name', accessor: 'name' },
            { header: 'Distributor', accessor: 'distributor' },
            { header: 'Location', accessor: 'location' },
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
            { header: 'Transactions', accessor: 'transactions' },
            { header: 'Last Active', accessor: 'lastActive' },
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