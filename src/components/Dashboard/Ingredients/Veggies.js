import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function Veggies() {
  const classes = useStyles();
  const arr = [ 'Spinach', 'Mushrooms', 'Onions', 'Fresh_tomatoes', 'Zucchini', 'Artichoke_hearts', 'Garlic', 'Sundried_tomatoes', 'Jalapeños', 'Green_peppers', 'Olives' ];
  const [state, setState] = React.useState(arr);


  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const error = [...state].filter((v) => v).length > 3;

  const mapped = arr.map((e ) => 
      <FormControlLabel
        key={e}
        control={<Checkbox checked={false} onChange={handleChange} name = {e}  />}
        label = {e}
      />
    )

  return (
    <div className={classes.root}>
      <FormControl required error={error} component="fieldset" className={classes.formControl}>
        <FormLabel component="legend"><h2>You can Choose any 3 Veggies for Free</h2></FormLabel>
        <FormGroup >{mapped}</FormGroup>
        <FormHelperText><h3>More than 3 Veggie Costs as per pricing...</h3></FormHelperText>
      </FormControl>
    </div>
  );
}
