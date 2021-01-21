import React,{useState} from 'react';
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

export default function Veggies(props) {
  const classes = useStyles();
  const [state, setState] = useState({list : [{value:' Spinach' ,isChecked:false },{value:'Mushrooms' ,isChecked:false },{value:'Onions' ,isChecked:false },{value:'Fresh_tomatoes' ,isChecked:false },{value:'Zucchini' ,isChecked:false },{value:'Artichoke_hearts' ,isChecked:false },{value:'Garlic' ,isChecked:false },{value:'Sundried_tomatoes' ,isChecked:false },{value:'Jalapeños' ,isChecked:false },{value:'Green_peppers' ,isChecked:false },{value:'Olives' ,isChecked:false }]});
  const handleChange = (event) => {
    state.list.forEach(element=>{
      if(element.value===event.target.name){
        element.isChecked = event.target.checked
    }
  })
    setState({list:state.list})
    props.getName(state.list,"veggies")
  };

  const mapped = state.list.map((val,k ) => 
      <FormControlLabel
        key={k}
        control={<Checkbox checked={val.isChecked} onChange={handleChange} name = {val.value}  />}
        label = {val.value}
      />
    )

  return (
    <div className={classes.root}>
      <FormControl required error component="fieldset" className={classes.formControl}>
        <FormLabel component="legend"><h2>You can Choose any 3 Veggies for Free</h2></FormLabel>
        <FormGroup >{mapped}</FormGroup>
        <FormHelperText><h3>More than 3 Veggie Costs as per pricing...</h3></FormHelperText>
      </FormControl>
    </div>
  );
}
