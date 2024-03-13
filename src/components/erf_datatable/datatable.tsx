import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from '@mui/material';
import Filter from './filter';

interface DataTableProps {
  data: any[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: '',
    minPrice: '',
    maxPrice: '',
  });

  const handleFilterChange = (filter: any) => {
    setFilters(filter);
    filterData(filter);
  };

  const filterData = (filter: any) => {
    const filtered = data.filter((item) => {
      const startDatePass =
        filter.startDate === '' ||
        new Date(item.orderDate) >= new Date(filter.startDate);
      const endDatePass =
        filter.endDate === '' ||
        new Date(item.orderDate) <= new Date(filter.endDate);
      const minPricePass =
        filter.minPrice === '' || item.orderPrice >= parseInt(filter.minPrice);
      const maxPricePass =
        filter.maxPrice === '' || item.orderPrice <= parseInt(filter.maxPrice);
      return startDatePass && endDatePass && minPricePass && maxPricePass;
    });
    setFilteredData(filtered);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <Filter onFilterChange={handleFilterChange} />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Order Size</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Order Price</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Order Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.orderId}</TableCell>
                  <TableCell>{row.orderSize}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.city}</TableCell>
                  <TableCell>{row.orderPrice}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.orderDate}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component='div'
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage='Rows per page:'
      />
    </div>
  );
};

export default DataTable;
