import React,{useState,useEffect} from 'react';
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
  const [state, setState] = useState({list : [{value:' Spinach' ,isChecked:false },{value:'Mushrooms' ,isChecked:false },{value:'Onions' ,isChecked:false },{value:'Fresh_tomatoes' ,isChecked:false },{value:'Zucchini' ,isChecked:false },{value:'Artichoke_hearts' ,isChecked:false },{value:'Garlic' ,isChecked:false }]});
  const [veglist,setveglist]=useState([])
  const handleChange = (event) => {
    state.list.forEach(element=>{
      if(element.value===event.target.name){
        element.isChecked = event.target.checked
        if(element.isChecked){
          setveglist(veglist=>[...veglist,(element.value)])
        }else{
          veglist.splice(veglist.indexOf(element.value),1)
        }
    }
  })
  setState({list:state.list})
  };

  useEffect(() => {
      props.getName(veglist,"veggies")
  }, [veglist])

  const mapped = state.list.map((val ) => 
  <FormControlLabel
  key={val.value}
  control={<Checkbox checked={val.isChecked} onChange={handleChange} name = {val.value}  />}
  label = {val.value}
  />)

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

