import React from 'react';
import styled from 'styled-components';

const StatContainer = styled.div`
  text-align: center;
  padding: 16px;
`;

const Value = styled.div`
  font-size: 2.2rem;
  font-weight: 800;
  color: ${props => props.theme.colors.accentInk};
  margin: 8px 0;
`;

const Label = styled.div`
  color: ${props => props.theme.colors.muted};
  font-size: 0.9rem;
  font-weight: 600;
`;

const Change = styled.div<{ isPositive?: boolean }>`
  font-size: 0.85rem;
  font-weight: 600;
  margin-top: 4px;
  color: ${props => props.isPositive ? props.theme.colors.success : props.theme.colors.danger};
`;

interface StatWidgetProps {
  value: string | number;
  label: string;
  change?: {
    value: string;
    isPositive: boolean;
  };
}

export const StatWidget: React.FC<StatWidgetProps> = ({ value, label, change }) => {
  return (
    <StatContainer>
      <Value>{value}</Value>
      <Label>{label}</Label>
      {change && (
        <Change isPositive={change.isPositive}>
          {change.isPositive ? '+' : ''}{change.value}
        </Change>
      )}
    </StatContainer>
  );
};