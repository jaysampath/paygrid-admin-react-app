import React from 'react';
import styled, { css } from 'styled-components';

interface StatusBadgeProps {
  status: 'success' | 'pending' | 'failed' | 'warning';
  children: React.ReactNode;
}

const Badge = styled.span<{ status: StatusBadgeProps['status'] }>`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  display: inline-block;

  ${props => {
    switch (props.status) {
      case 'success':
        return css`
          background: #dcfce7;
          color: ${props.theme.colors.success};
        `;
      case 'pending':
        return css`
          background: #dbeafe;
          color: ${props.theme.colors.info};
        `;
      case 'failed':
        return css`
          background: #fee2e2;
          color: ${props.theme.colors.danger};
        `;
      case 'warning':
        return css`
          background: #fef3c7;
          color: ${props.theme.colors.warning};
        `;
    }
  }}
`;

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, children }) => {
  return <Badge status={status}>{children}</Badge>;
};