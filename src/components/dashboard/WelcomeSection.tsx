import React from 'react';
import styled from 'styled-components';

const WelcomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, ${props => props.theme.colors.accent} 0%, #7c8af1 100%);
  border-radius: ${props => props.theme.radius.lg};
  padding: 22px 28px;
  margin-bottom: 22px;
  color: ${props => props.theme.colors.accentContrast};
  box-shadow: ${props => props.theme.shadows.default};
`;

const WelcomeBanner = styled.div`
  h1 {
    margin: 0 0 6px 0;
    font-size: 1.35rem;
  }

  p {
    margin: 0;
    opacity: 0.95;
  }
`;

interface WelcomeSectionProps {
  name: string;
  message: string;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ name, message }) => {
  return (
    <WelcomeContainer>
      <WelcomeBanner>
        <h1>Welcome back, {name}!!!</h1>
        <p>{message}</p>
      </WelcomeBanner>
    </WelcomeContainer>
  );
};