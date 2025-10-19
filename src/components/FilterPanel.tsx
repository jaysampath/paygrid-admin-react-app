import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  background: ${props => props.theme.colors.tint};
  padding: 16px;
  border-radius: ${props => props.theme.radius.md};
  margin-bottom: 16px;
  border: 1px solid ${props => props.theme.colors.hairline};
`;

const FilterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  margin-bottom: 12px;
`;

const FilterActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
`;

interface FilterPanelProps {
  children: React.ReactNode;
  onApply?: () => void;
  onReset?: () => void;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({ children, onApply, onReset }) => {
  return (
    <FilterContainer>
      <FilterGrid>
        {children}
      </FilterGrid>
      <FilterActions>
        {onReset && (
          <button onClick={onReset} className="btn btn-secondary">
            Reset Filters
          </button>
        )}
        {onApply && (
          <button onClick={onApply} className="btn btn-primary">
            Apply Filters
          </button>
        )}
      </FilterActions>
    </FilterContainer>
  );
};