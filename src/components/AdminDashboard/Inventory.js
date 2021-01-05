import React from 'react'
import { makeStyles,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Button  } from '@material-ui/core'

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

const Inventory = () => {

    const show = async ()=>{
        let url='https://pizza-apps-backend.herokuapp.com'
        const res= await axios.get(`${url}/inventory`)
        console.log(res.data)
    }

    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Items</TableCell>
            <TableCell>Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {show.res.data.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell>{row.count}</TableCell>
              <TableCell><Button id={row.name}>Add</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default Inventory
