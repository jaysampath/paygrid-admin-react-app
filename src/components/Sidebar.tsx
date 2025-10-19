import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SidebarContainer = styled.aside`
  width: 240px;
  background: linear-gradient(180deg, #10192f 0%, #0f172a 100%);
  color: #dbe1f1;
  display: flex;
  flex-direction: column;
  padding: 20px 16px 24px;
  box-shadow: ${props => props.theme.shadows.sm};
  position: sticky;
  top: 0;
  height: 100vh;

  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    position: static;
    border-radius: 0 0 16px 16px;
    padding: 12px;
    overflow: auto;
  }
`;

const Logo = styled.div`
  font-size: 1.1rem;
  font-weight: 800;
  padding: 12px 12px 18px 12px;
  letter-spacing: .2px;
  color: #eef1ff;

  span {
    color: ${props => props.theme.colors.accent};
  }
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;

    @media (max-width: 900px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 12px;
  border-radius: 12px;
  cursor: pointer;
  opacity: 0.95;
  transition: background 0.18s, color 0.18s, transform 0.12s;
  text-decoration: none;
  color: inherit;

  &:hover {
    background: #131e3b;
    color: #fff;
  }

  &.active {
    background: #152347;
    color: #fff;
    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08);
  }
`;

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <SidebarContainer className={className} role="navigation" aria-label="Admin navigation">
      <Logo>Bricks <span>Admin</span></Logo>
      <Nav>
        <ul>
          <li><StyledNavLink to="/" end>Dashboard</StyledNavLink></li>
          <li><StyledNavLink to="/master-distributor">Master Distributor</StyledNavLink></li>
          <li><StyledNavLink to="/super-distributor">Super Distributor</StyledNavLink></li>
          <li><StyledNavLink to="/retailers">Retailers</StyledNavLink></li>
          <li><StyledNavLink to="/transactions">Transactions</StyledNavLink></li>
          <li><StyledNavLink to="/refunds">Refunds</StyledNavLink></li>
          <li><StyledNavLink to="/reports">Reports</StyledNavLink></li>
          <li><StyledNavLink to="/settings">Settings</StyledNavLink></li>
        </ul>
      </Nav>
    </SidebarContainer>
  );
};