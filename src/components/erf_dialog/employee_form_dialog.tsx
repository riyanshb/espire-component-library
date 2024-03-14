// src/components/EmployeeDialog.tsx
import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';

interface EmployeeDialogProps {
  open: boolean;
  onClose: () => void;
}

const EmployeeDialog: React.FC<EmployeeDialogProps> = ({ open, onClose }) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('male');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [mobile, setMobile] = useState('');
  const [dateOfJoining, setDateOfJoining] = useState('');
  const [city, setCity] = useState('');
  const [isPermanent, setIsPermanent] = useState(false);

  const handleSave = () => {
    console.log('Name:', name);
    console.log('Gender:', gender);
    console.log('Email:', email);
    console.log('Department:', department);
    console.log('Mobile:', mobile);
    console.log('Date of Joining:', dateOfJoining);
    console.log('City:', city);
    console.log('Permanent Employee:', isPermanent);
    onClose();
  };

  const handleReset = () => {
    setName('');
    setGender('male');
    setEmail('');
    setDepartment('');
    setMobile('');
    setDateOfJoining('');
    setCity('');
    setIsPermanent(false);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Employee Form</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              autoFocus
              margin='dense'
              label='Name'
              type='text'
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl component='fieldset'>
              <FormLabel component='legend'>Gender</FormLabel>
              <RadioGroup
                row
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <FormControlLabel
                  value='male'
                  control={<Radio />}
                  label='Male'
                />
                <FormControlLabel
                  value='female'
                  control={<Radio />}
                  label='Female'
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin='dense'
              label='Email'
              type='email'
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin='dense'
              label='Department'
              type='text'
              fullWidth
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin='dense'
              label='Mobile'
              type='text'
              fullWidth
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin='dense'
              label='Date of Joining'
              type='date'
              fullWidth
              value={dateOfJoining}
              onChange={(e) => setDateOfJoining(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin='dense'
              label='City'
              type='text'
              fullWidth
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isPermanent}
                  onChange={(e) => setIsPermanent(e.target.checked)}
                />
              }
              label='Permanent Employee'
              style={{ marginTop: '1rem' }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleReset} color='secondary'>
          Reset
        </Button>
        <Button onClick={handleSave} color='primary'>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmployeeDialog;
