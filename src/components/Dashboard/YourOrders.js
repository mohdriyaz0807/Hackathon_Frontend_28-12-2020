import React from 'react'
import axios from 'axios'
import {makeStyles,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@material-ui/core'
import  Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    }
  })

const useStyles1 = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    margin:'auto'
  },
}));

const YourOrders = (props) => {
  
  const classes = useStyles();
  const classes1 = useStyles1();

  let url='https://pizza-apps-backend.herokuapp.com'
    let show = async ()=>{
    let res = await axios.get(`${url}/yourorders/${props.id}`)
    console.log(res)

    if(res.result){
    return (
        <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell >Name of Item</TableCell>
            <TableCell >Status Of the Order</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {res.result.data.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row._id}</TableCell>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
    }else{
        return (
            <div className={classes1.root}>
            <Alert severity="info">No orders found from your Id!</Alert>
          </div> )
          }
        }
        show()
}

export default YourOrders
