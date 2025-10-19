import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div``;

interface PageProps {
  children: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({ children }) => {
  return <PageContainer>{children}</PageContainer>;
};