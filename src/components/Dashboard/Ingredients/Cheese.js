import React,{useState} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const Cheese=(props)=> {
  const [value, setValue] = useState('Mozzarella');

  const handleChange = (event) => {
    setValue(event.target.value);
    props.getName(event.target.value,"cheese")
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend"><h2>Cheese</h2></FormLabel>
      <RadioGroup aria-label="Cheese" name="Cheese1" value={value} onChange={handleChange}>
        <FormControlLabel value="Mozzarella" control={<Radio />} label="Mozzarella" />
        <FormControlLabel value="Gorgonzola" control={<Radio />} label="Gorgonzola" />
        <FormControlLabel value="Pecorino-Romano" control={<Radio />} label="Pecorino-Romano" />
        <FormControlLabel value="Havarti" control={<Radio />} label="Havarti" />
      </RadioGroup>
    </FormControl>
  );
}
export default Cheese
