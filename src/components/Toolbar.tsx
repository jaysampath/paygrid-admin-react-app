import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 12px;
  background: ${props => props.theme.colors.chip};
  border-radius: ${props => props.theme.radius.sm};
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

const ToolbarLeft = styled.div`
  flex: 1;
  display: flex;
  gap: 8px;
  align-items: center;
`;

const ToolbarRight = styled.div`
  display: flex;
  gap: 8px;
`;

interface ToolbarProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export const Toolbar: React.FC<ToolbarProps> = ({ left, right }) => {
  return (
    <Container>
      <ToolbarLeft>{left}</ToolbarLeft>
      <ToolbarRight>{right}</ToolbarRight>
    </Container>
  );
};