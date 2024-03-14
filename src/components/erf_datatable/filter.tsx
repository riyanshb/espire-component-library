import React from 'react';
import { TextField, Button, Grid } from '@mui/material';

interface FilterProps {
  onFilterChange: (filter: any) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [minPrice, setMinPrice] = React.useState('');
  const [maxPrice, setMaxPrice] = React.useState('');

  const handleFilterApply = () => {
    const filter = {
      startDate,
      endDate,
      minPrice,
      maxPrice,
    };
    onFilterChange(filter);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <TextField
          label='Start Date'
          type='date'
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          label='End Date'
          type='date'
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          label='Min Price'
          type='number'
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          label='Max Price'
          type='number'
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant='contained' color='primary' onClick={handleFilterApply}>
          Apply Filters
        </Button>
      </Grid>
    </Grid>
  );
};

export default Filter;
