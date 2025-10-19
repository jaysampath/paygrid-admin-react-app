import React from 'react';
import styled from 'styled-components';
import { Page } from '../components/Page';
import { PageHeader } from '../components/PageHeader';
import { WelcomeSection } from '../components/dashboard/WelcomeSection';
import { StatWidget } from '../components/dashboard/StatWidget';
import { SystemHealth } from '../components/dashboard/SystemHealth';
import { ActivityFeed } from '../components/dashboard/ActivityFeed';
import { Card } from '../components/Card';
import { DataTable } from '../components/DataTable';
import { Button } from '../components/Button';
import { StatusBadge } from '../components/StatusBadge';

const Grid = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const AlertBox = styled.div`
  padding: 14px 18px;
  border-radius: ${props => props.theme.radius.sm};
  margin-bottom: 16px;
  border-left: 4px solid ${props => props.theme.colors.warning};
  background: #fef3c7;
  color: #92400e;
`;

const recentTransactions = [
  {
    id: 'txn1',
    date: '2025-10-19',
    amount: '₹5,000',
    status: 'success' as const,
    type: 'Credit',
    merchant: 'ABC Store'
  },
  {
    id: 'txn2',
    date: '2025-10-19',
    amount: '₹3,500',
    status: 'pending' as const,
    type: 'Debit',
    merchant: 'XYZ Mart'
  }
];

const recentActivities = [
  {
    id: '1',
    icon: '👤',
    title: 'New retailer registered',
    time: '5 minutes ago'
  },
  {
    id: '2',
    icon: '💰',
    title: 'Large transaction detected',
    time: '10 minutes ago'
  },
  {
    id: '3',
    icon: '🔄',
    title: 'System update completed',
    time: '30 minutes ago'
  }
];

export const Dashboard: React.FC = () => {
  return (
    <Page>
      <PageHeader title="Dashboard">2 System Alerts</PageHeader>

      <WelcomeSection 
        name="Admin"
        message="Here's what's happening with your admin panel today."
      />

      <Card title="Today's Statistics">
        <Grid columns={4}>
          <StatWidget
            value="₹45,231"
            label="Total Revenue"
            change={{ value: "12%", isPositive: true }}
          />
          <StatWidget
            value="1,234"
            label="Total Transactions"
            change={{ value: "5%", isPositive: true }}
          />
          <StatWidget
            value="892"
            label="Active Retailers"
            change={{ value: "3%", isPositive: true }}
          />
          <StatWidget
            value="98.5%"
            label="Success Rate"
            change={{ value: "0.5%", isPositive: false }}
          />
        </Grid>
      </Card>

      <Grid columns={2}>
        <SystemHealth 
          status="healthy"
          message="All systems operational"
        />
        <ActivityFeed activities={recentActivities} />
      </Grid>

      <AlertBox>
        3 retailers have low balance. Action required.
      </AlertBox>

      <Card title="Recent Transactions">
        <DataTable
          data={recentTransactions}
          columns={[
            { header: 'Date', accessor: 'date' },
            { header: 'Amount', accessor: 'amount' },
            { 
              header: 'Status', 
              accessor: row => <StatusBadge status={row.status}>{row.status}</StatusBadge>
            },
            { header: 'Type', accessor: 'type' },
            { header: 'Merchant', accessor: 'merchant' },
            { 
              header: 'Actions', 
              accessor: row => (
                <Button 
                  variant="secondary" 
                  size="sm" 
                  onClick={() => console.log('View details', row.id)}
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