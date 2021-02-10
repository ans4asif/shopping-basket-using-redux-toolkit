import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ProductItem } from '../interfaces/global'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';
import { add } from '../store/basketSlice';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export const Products = () => {
  const dispatch = useDispatch()
  const products = useSelector((state: ProductItem[]) => state)
  console.log(products)

  const classes = useStyles();
  return (
    <div className="product-container">
      <div className={classes.root}>
        <Grid container spacing={4} >
          {products.map((product) => (
            <Grid key={Number(product.id)} item xs={12} sm={12} md={6} lg={4} xl={4}>

              <div className="product-paper">
                <Paper elevation={4} className={classes.paper}>

                  <div className="product-img-container">
                    <img src={`/images/${product.imageUrl}`} alt="" className="product-image" />
                  </div>

                  <div className="product-details">

                    <div className="product-title">
                      <Typography variant="h6">{product.title}
                      </Typography>
                    </div>

                    <div className="product-price">
                      <Typography variant="h5">{product.price}<span className="dollar-symbol">$</span></Typography>
                    </div>
                    
                    </div>

                  <div className="cart-btn-box">
                    <button className="cart-btn" onClick={() => { dispatch(add(product)) }}><AddShoppingCartRoundedIcon /></button>
                  </div>

                </Paper>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>

  )
}
