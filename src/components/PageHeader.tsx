import React from 'react';
import styled from 'styled-components';

interface PageHeaderProps {
  title: string;
  children?: React.ReactNode;
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const HeaderLeft = styled.div`
  h2 {
    margin: 0;
    font-weight: 800;
    letter-spacing: .2px;
  }
`;

const HeaderRight = styled.div`
  color: ${props => props.theme.colors.muted};
  background: ${props => props.theme.colors.chip};
  padding: 8px 12px;
  border-radius: 999px;
  font-weight: 600;
  box-shadow: ${props => props.theme.shadows.sm};
  cursor: pointer;
  
  &:hover {
    background: #e8ebf3;
  }
`;

export const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <h2>{title}</h2>
      </HeaderLeft>
      {children && <HeaderRight>{children}</HeaderRight>}
    </HeaderContainer>
  );
};