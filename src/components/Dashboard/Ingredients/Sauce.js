import React,{useState,useEffect} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const Sauce=(props)=> {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    props.getName(value,"sauce")
    }, [value])

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend"><h2>Sauce</h2></FormLabel>
      <RadioGroup aria-label="Sauce" name="Sauce1" value={value} onChange={handleChange}>
        <FormControlLabel value="Pesto" control={<Radio />} label="Pesto" />
        <FormControlLabel value="Hummus" control={<Radio />} label="Hummus" />
        <FormControlLabel value="Buffalo Sauce" control={<Radio />} label="Buffalo Sauce" />
        <FormControlLabel value="Marinara Sauce" control={<Radio />} label="Marinara Sauce" />
        <FormControlLabel value="Garlic Ranch" control={<Radio />} label="Garlic Ranch" />
      </RadioGroup>
    </FormControl>
  );
}
export default Sauce
