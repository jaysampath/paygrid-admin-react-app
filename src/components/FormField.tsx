import React from 'react';
import styled from 'styled-components';

const FormGroup = styled.div`
  margin-bottom: 12px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
`;

const Input = styled.input`
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.colors.hairline};
  font-family: inherit;
  font-size: 0.95rem;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
  }
`;

const Select = styled.select`
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.colors.hairline};
  font-family: inherit;
  font-size: 0.95rem;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.2s;
  background-color: white;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
  }
`;

interface FormFieldProps {
  label: string;
  type?: 'text' | 'email' | 'number' | 'date' | 'tel' | 'select';
  options?: Array<{ value: string; label: string }>;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  type = 'text',
  options = [],
  value,
  onChange,
  placeholder
}) => {
  return (
    <FormGroup>
      <Label>{label}</Label>
      {type === 'select' ? (
        <Select value={value} onChange={e => onChange(e.target.value)}>
          <option value="">{placeholder || 'Select...'}</option>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      ) : (
        <Input
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
        />
      )}
    </FormGroup>
  );
};