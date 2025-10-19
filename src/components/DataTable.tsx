import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.radius.md};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.sm};
`;

const Th = styled.th`
  background: ${props => props.theme.colors.chip};
  padding: 16px;
  text-align: left;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  border-bottom: 1px solid ${props => props.theme.colors.hairline};
`;

const Td = styled.td`
  padding: 14px 16px;
  border-bottom: 1px solid ${props => props.theme.colors.hairline};
`;

const Tr = styled.tr`
  &:last-child td {
    border-bottom: none;
  }

  &:hover {
    background: ${props => props.theme.colors.bg};
  }
`;

const CheckboxCell = styled.td`
  width: 40px;
  text-align: center;
`;

interface Column<T> {
  header: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  selectable?: boolean;
  onSelectionChange?: (selectedIds: string[]) => void;
  getRowId?: (row: T) => string;
}

export function DataTable<T extends object>({ 
  data, 
  columns, 
  selectable, 
  onSelectionChange,
  getRowId = (row: any) => row.id
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = React.useState<Set<string>>(new Set());

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const allIds = data.map(row => getRowId(row));
      setSelectedRows(new Set(allIds));
      onSelectionChange?.(allIds);
    } else {
      setSelectedRows(new Set());
      onSelectionChange?.([]);
    }
  };

  const handleSelectRow = (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSelection = new Set(selectedRows);
    if (e.target.checked) {
      newSelection.add(id);
    } else {
      newSelection.delete(id);
    }
    setSelectedRows(newSelection);
    onSelectionChange?.(Array.from(newSelection));
  };

  return (
    <Table>
      <thead>
        <tr>
          {selectable && (
            <Th>
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={selectedRows.size === data.length && data.length > 0}
              />
            </Th>
          )}
          {columns.map((column, index) => (
            <Th key={index}>{column.header}</Th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <Tr key={getRowId(row)}>
            {selectable && (
              <CheckboxCell>
                <input
                  type="checkbox"
                  checked={selectedRows.has(getRowId(row))}
                  onChange={handleSelectRow(getRowId(row))}
                />
              </CheckboxCell>
            )}
            {columns.map((column, colIndex) => (
              <Td key={colIndex}>
                {typeof column.accessor === 'function'
                  ? column.accessor(row)
                  : (row[column.accessor] as React.ReactNode)}
              </Td>
            ))}
          </Tr>
        ))}
      </tbody>
    </Table>
  );
}