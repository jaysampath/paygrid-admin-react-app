import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Card } from '../Card';

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const HealthContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const HealthDot = styled.div<{ status: 'healthy' | 'warning' | 'critical' }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => {
    switch (props.status) {
      case 'healthy':
        return props.theme.colors.success;
      case 'warning':
        return props.theme.colors.warning;
      case 'critical':
        return props.theme.colors.danger;
    }
  }};
  ${props => props.status === 'healthy' && css`
    animation: ${pulse} 2s infinite;
  `}
`;

const StatusText = styled.span`
  font-weight: 600;
`;

interface SystemHealthProps {
  status: 'healthy' | 'warning' | 'critical';
  message: string;
}

export const SystemHealth: React.FC<SystemHealthProps> = ({ status, message }) => {
  return (
    <Card title="System Health">
      <HealthContainer>
        <HealthDot status={status} />
        <StatusText>{message}</StatusText>
      </HealthContainer>
    </Card>
  );
};