import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

interface RowData {
  id: number;
  name: string;
  age: number;
  email: string;
  address: string;
}

const dummyData: RowData[] = [
  {
    id: 1,
    name: 'Rivanshu',
    age: 30,
    email: 'jain@example.com',
    address: 'test address',
  },
  {
    id: 2,
    name: 'Rivanshu',
    age: 25,
    email: 'jain@example.com',
    address: 'test address',
  },
  {
    id: 3,
    name: 'Jain',
    age: 40,
    email: 'rivanshu@example.com',
    address: 'test address',
  },
  {
    id: 4,
    name: 'Rivanshu',
    age: 35,
    email: 'rivashu@example.com',
    address: 'test address',
  },
  {
    id: 5,
    name: 'Jain',
    age: 28,
    email: 'rivanshu@example.com',
    address: 'test address',
  },
];

const BasicDataTable: React.FC = () => {
  const [data, setData] = useState(dummyData);
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleEdit = (id: number) => {
    setEditingId(id);
  };

  const handleSave = (id: number) => {
    setEditingId(null);
    console.log(id);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const handleDelete = (id: number) => {
    setData(data.filter((row) => row.id !== id));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: keyof RowData,
    id: number,
  ) => {
    setData(
      data.map((row) => {
        if (row.id === id) {
          return { ...row, [fieldName]: e.target.value };
        }
        return row;
      }),
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Actions</TableCell> {/* New column for actions */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>
                {editingId === row.id ? (
                  <TextField
                    value={row.name}
                    onChange={(e) => handleInputChange(e, 'name', row.id)}
                  />
                ) : (
                  row.name
                )}
              </TableCell>
              <TableCell>
                {editingId === row.id ? (
                  <TextField
                    value={row.age}
                    onChange={(e) => handleInputChange(e, 'age', row.id)}
                  />
                ) : (
                  row.age
                )}
              </TableCell>
              <TableCell>
                {editingId === row.id ? (
                  <TextField
                    value={row.email}
                    onChange={(e) => handleInputChange(e, 'email', row.id)}
                  />
                ) : (
                  row.email
                )}
              </TableCell>
              <TableCell>
                {editingId === row.id ? (
                  <TextField
                    value={row.address}
                    onChange={(e) => handleInputChange(e, 'address', row.id)}
                  />
                ) : (
                  row.address
                )}
              </TableCell>
              <TableCell>
                {editingId === row.id ? (
                  <>
                    <IconButton
                      aria-label='save'
                      onClick={() => handleSave(row.id)}
                    >
                      <CheckIcon />
                    </IconButton>
                    <IconButton aria-label='cancel' onClick={handleCancel}>
                      <ClearIcon />
                    </IconButton>
                  </>
                ) : (
                  <>
                    <IconButton
                      aria-label='edit'
                      onClick={() => handleEdit(row.id)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      aria-label='delete'
                      onClick={() => handleDelete(row.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicDataTable;
