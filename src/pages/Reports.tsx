import React, { useState } from 'react';
import styled from 'styled-components';
import { Page } from '../components/Page';
import { PageHeader } from '../components/PageHeader';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { FormField } from '../components/FormField';

const ReportGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
`;

const ReportCard = styled(Card)`
  h3 {
    margin: 0 0 16px 0;
    font-size: 1.2rem;
  }

  p {
    color: ${props => props.theme.colors.muted};
    margin: 0 0 16px 0;
  }
`;

const ReportForm = styled.div`
  display: grid;
  gap: 16px;
  margin-top: 16px;
`;

const DownloadButton = styled(Button)`
  width: 100%;
`;

const reportTypes = [
  {
    id: 'transactions',
    title: 'Transaction Report',
    description: 'Detailed report of all transactions within a specified time period.',
    formats: ['csv', 'pdf', 'excel']
  },
  {
    id: 'retailers',
    title: 'Retailers Report',
    description: 'Overview of retailer performance, balances, and activity.',
    formats: ['csv', 'pdf', 'excel']
  },
  {
    id: 'distributors',
    title: 'Distributors Report',
    description: 'Analysis of distributor network performance and metrics.',
    formats: ['csv', 'pdf', 'excel']
  },
  {
    id: 'revenue',
    title: 'Revenue Report',
    description: 'Detailed breakdown of revenue streams and financial metrics.',
    formats: ['csv', 'pdf', 'excel']
  },
  {
    id: 'settlements',
    title: 'Settlements Report',
    description: 'Settlement status and history across all distributors.',
    formats: ['csv', 'pdf', 'excel']
  },
  {
    id: 'system',
    title: 'System Performance',
    description: 'Technical metrics and system performance indicators.',
    formats: ['csv', 'pdf']
  }
];

export const Reports: React.FC = () => {
  const [reportFilters, setReportFilters] = useState({
    dateFrom: '',
    dateTo: '',
    format: ''
  });

  const handleFilterChange = (field: keyof typeof reportFilters) => (value: string) => {
    setReportFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleGenerateReport = (reportId: string) => {
    console.log('Generating report:', reportId, 'with filters:', reportFilters);
  };

  return (
    <Page>
      <PageHeader title="Reports">
        Generate Reports
      </PageHeader>

      <ReportGrid>
        {reportTypes.map(report => (
          <ReportCard key={report.id}>
            <h3>{report.title}</h3>
            <p>{report.description}</p>
            
            <ReportForm>
              <FormField
                label="From Date"
                type="date"
                value={reportFilters.dateFrom}
                onChange={handleFilterChange('dateFrom')}
              />
              <FormField
                label="To Date"
                type="date"
                value={reportFilters.dateTo}
                onChange={handleFilterChange('dateTo')}
              />
              <FormField
                label="Format"
                type="select"
                value={reportFilters.format}
                onChange={handleFilterChange('format')}
                options={report.formats.map(format => ({
                  value: format,
                  label: format.toUpperCase()
                }))}
              />
              <DownloadButton 
                variant="primary"
                onClick={() => handleGenerateReport(report.id)}
              >
                Generate Report
              </DownloadButton>
            </ReportForm>
          </ReportCard>
        ))}
      </ReportGrid>
    </Page>
  );
};