import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  gap: 24px;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 28px 36px;
  min-width: 0;
`;

export const Layout: React.FC = () => {
  return (
    <LayoutContainer>
      <Sidebar />
      <MainContent role="main" aria-label="Admin dashboard content">
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
};