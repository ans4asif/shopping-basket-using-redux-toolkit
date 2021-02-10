import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ProductItem } from '../interfaces/global'
import { remove, increment, decrement } from '../store/basketSlice'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import { Typography } from '@material-ui/core';
import { EmptyBasket } from './EmptyBasket';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const Basket = () => {
  const products = useSelector((state: ProductItem[]) => state)
  const dispatch = useDispatch()
  const classes = useStyles();
  const rows = products.filter((item) => item.added)
  console.log(rows.map(row => row.title))
  console.log(products);

  return (

    <div>
      {products.filter((item) => item.added).length > 0 ? (
        <div className="basket-table">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product Image</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Price&nbsp;($)</TableCell>
                  <TableCell align="right">Total Price&nbsp;($)</TableCell>
                  <TableCell align="right">Remove</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((product, i) => (
                  <TableRow key={i}>
                    <TableCell component="th" scope="row">
                      <img
                        src={`/images/${product.imageUrl}`}
                        alt={product.title}
                        width="250px"
                        height="200px" />
                    </TableCell>
                    <TableCell align="right">{product.title}</TableCell>
                    <TableCell align="right">
                      <button onClick={() => dispatch(decrement(product))}>-</button>
                      <span>{product.quantity}</span>
                      <button onClick={() => dispatch(increment(product))}>+</button>

                    </TableCell>
                    <TableCell align="right">{product.price}</TableCell>
                    <TableCell align="right">{product.quantity * Number(product.price)}</TableCell>
                    <TableCell align="right">
                      <button onClick={() => { dispatch(remove(product)) }}><RemoveShoppingCartIcon /></button>
                    </TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Typography variant="h4" className="total-price">
            Total Price :{rows.reduce((totalPrice, product) =>
            (Number(totalPrice) + (Number(product.price) * product.quantity)), 0)}<span className="dollar">$</span>
          </Typography>
        </div>
      ) : <EmptyBasket />}

    </div>

  )
}
