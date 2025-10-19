import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  size?: 'sm' | 'md';
}

const StyledButton = styled.button<ButtonProps>`
  border: none;
  padding: ${props => props.size === 'sm' ? '6px 12px' : '10px 16px'};
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: ${props => props.size === 'sm' ? '0.85rem' : '0.9rem'};

  ${props => {
    switch (props.variant) {
      case 'primary':
        return css`
          background: ${props.theme.colors.accent};
          color: ${props.theme.colors.accentContrast};
          &:hover {
            background: ${props.theme.colors.accentInk};
            transform: translateY(-1px);
            box-shadow: ${props.theme.shadows.default};
          }
        `;
      case 'secondary':
        return css`
          background: ${props.theme.colors.chip};
          color: ${props.theme.colors.text};
          &:hover {
            background: #e5e7ed;
          }
        `;
      case 'success':
        return css`
          background: ${props.theme.colors.success};
          color: #fff;
          &:hover {
            background: #15803d;
          }
        `;
      case 'danger':
        return css`
          background: ${props.theme.colors.danger};
          color: #fff;
          &:hover {
            background: #dc2626;
          }
        `;
      case 'warning':
        return css`
          background: ${props.theme.colors.warning};
          color: #fff;
          &:hover {
            background: #d97706;
          }
        `;
      default:
        return css`
          background: ${props.theme.colors.accent};
          color: ${props.theme.colors.accentContrast};
        `;
    }
  }}
`;

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', size = 'md', ...props }) => {
  return (
    <StyledButton variant={variant} size={size} {...props}>
      {children}
    </StyledButton>
  );
};