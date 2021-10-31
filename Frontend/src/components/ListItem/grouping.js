import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function GroupedSelect() {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 220 }}>
        <InputLabel htmlFor="grouped-native-select">Language</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Grouping">
          <option aria-label="None" value="" />
          <optgroup label="Python">
            <option value={1}>Python</option>
          </optgroup>
          <optgroup label="Boards">
            <option value={2}>QtPi Neo</option>
            <option value={3}>Microbit</option>
          </optgroup>
          <optgroup label="Library">
            <option value={4}>StreamLit</option>
            <option value={5}>QtPy</option>
          </optgroup>
          <optgroup label="Javascript">
            <option value={6}>Javascript</option>
          </optgroup>
        </Select>
      </FormControl>
    </div>
  );
}
