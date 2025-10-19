import React from 'react';
import styled from 'styled-components';

interface CardProps {
  children: React.ReactNode;
  title?: string;
}

const StyledCard = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.radius.md};
  padding: 18px;
  box-shadow: ${props => props.theme.shadows.default};
  border: 1px solid ${props => props.theme.colors.hairline};
  margin-bottom: 20px;

  h4 {
    margin: 0 0 8px 0;
    font-weight: 700;
  }
`;

export const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <StyledCard>
      {title && <h4>{title}</h4>}
      {children}
    </StyledCard>
  );
};