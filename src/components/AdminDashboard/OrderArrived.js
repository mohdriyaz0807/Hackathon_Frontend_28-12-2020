import React from 'react'
import { makeStyles,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Alert  } from '@material-ui/core'

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    root: {
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
      },
  });
  

const OrderArrived = () => {

    const show = async ()=>{
        let url='https://pizza-apps-backend.herokuapp.com'
        const res= await axios.get(`${url}/OrderArrived`)
        console.log(res.data)
    }

    const classes = useStyles();

    if(show.res.data!==''){
    return (
        <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell >Name of Item</TableCell>
            <TableCell >Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {show.res.data.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row._id}</TableCell>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell><Button>{row.status}</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
    }else{
        return (
            <div className={classes.root}>
            <Alert severity="info">No orders found from your Id!</Alert>
          </div>
        )
          }
}

export default OrderArrived
