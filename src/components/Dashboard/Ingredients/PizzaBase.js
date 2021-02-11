import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

  const PizzaBase=(props)=> {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  React.useEffect(() => {
    props.getName(value,"base")
    }, [value])
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend"><h2>Pizza Base</h2></FormLabel>
      <RadioGroup aria-label="pizzaBase" name="pizzaBase1" value={value} onChange={handleChange}>
        <FormControlLabel value="NY Style Pizza" control={<Radio />} label="NY Style Pizza" />
        <FormControlLabel value="Neapolitan Crust" control={<Radio />} label="Neapolitan Crust" />
        <FormControlLabel value="Chicago Deep Dish" control={<Radio />} label="Chicago Deep Dish" />
        <FormControlLabel value="Sicilian Style" control={<Radio />} label="Sicilian Style" />
        <FormControlLabel value="Thin Crust" control={<Radio />} label="Thin Crust" />
      </RadioGroup>
    </FormControl>
  );
}
export default PizzaBase
