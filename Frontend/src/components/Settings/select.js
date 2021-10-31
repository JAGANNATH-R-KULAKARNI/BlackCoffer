import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function SelectAutoWidth(props) {
  const [age, setAge] = React.useState(props.placeholder);
  const matches = useMediaQuery('(min-width:520px)');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: matches ? 400 : 200 }}>
        <InputLabel id="demo-simple-select-autowidth-label">{props.type}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          minWidth='300'
          label="Age"
        >
          {
            props.names.map((item)=>{
              return <MenuItem value={item}>{item}</MenuItem>
            })
          }
        </Select>
      </FormControl>
    </div>
  );
}
