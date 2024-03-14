// DataTable.tsx
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import './parameterised_datatable.css';

interface Column {
  id: string;
  label: string;
  avatar?: boolean;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  showCheckboxColumn?: boolean;
  showActionColumn?: boolean;
}

const DataTable: React.FC<DataTableProps> = ({
  columns,
  data,
  showCheckboxColumn = true,
  showActionColumn = true,
}) => {
  const renderTableCell = (row: any, column: Column) => {
    if (column.avatar) {
      return (
        <TableCell key={column.id}>
          <div className='avatarCell'>
            <img src={row[column.id]} alt='User Avatar' className='avatar' />
            <span>{row['name']}</span>
          </div>
        </TableCell>
      );
    }
    return <TableCell key={column.id}>{row[column.id]}</TableCell>;
  };

  return (
    <div className='dataTable'>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {showCheckboxColumn && (
                <TableCell>
                  <Checkbox />
                </TableCell>
              )}
              {columns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
              {showActionColumn && <TableCell>Action</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {showCheckboxColumn && (
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                )}
                {columns.map(
                  (column) =>
                    (column.avatar && renderTableCell(row, column)) ||
                    (!column.avatar && (
                      <TableCell key={column.id}>{row[column.id]}</TableCell>
                    )),
                )}
                {showActionColumn && (
                  <TableCell>
                    <IconButton aria-label='edit'>
                      <EditIcon />
                    </IconButton>
                    <IconButton aria-label='delete'>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataTable;
