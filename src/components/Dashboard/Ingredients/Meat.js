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

export default function Meat(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({list : [{value:' Pepperoni' ,isChecked:false },{value:'Hot Soppressata' ,isChecked:false },{value:'Sausage' ,isChecked:false },{value:'Bacon' ,isChecked:false },{value:'Prosciutto' ,isChecked:false },{value:'Meatballs' ,isChecked:false },{value:'Buffalo Chicken' ,isChecked:false }]});


  const handleChange = (event) => {
    state.list.forEach(element=>{
      if(element.value===event.target.name){
        element.isChecked = event.target.checked
    }
  })
    setState({list:state.list})
    props.getName(state.list,"meat")
  };

  const mapped = state.list.map((e ) => 
      <FormControlLabel
        key={e}
        control={<Checkbox checked={e.isChecked} onChange={handleChange} name = {e.value} />}
        label = {e.value}
      />
    )

  return (
    <div className={classes.root}>
      <FormControl required error component="fieldset" className={classes.formControl}>
        <FormLabel component="legend"><h2>You can Choose any 1 Meat for Free</h2></FormLabel>
        <FormGroup>{mapped}</FormGroup>
        <FormHelperText><h3>More than 1 Meat Costs as per pricing...</h3></FormHelperText>
      </FormControl>
    </div>
  );
}
