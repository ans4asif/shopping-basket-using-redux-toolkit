import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import levis from '../images/levis.png'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useSelector} from 'react-redux'
import { ProductItem } from '../interfaces/global';
import {Link} from 'react-router-dom'


export const Header = () => {
    const products=useSelector((state:ProductItem[])=>state)
    const productCounter=products.filter((item)=>item.added).length
   
    return (
        
      <AppBar className="AppBar" position="fixed">
        <Toolbar>
          <Link to="/">
          <IconButton edge="start" className="logo" color="inherit" aria-label="menu">
            <img width='140px' height="45px"src={levis} alt="splash-logo"/>
          </IconButton>
          </Link>

          <Link to='/' className="link">
          <Button className="home-btn">Home</Button>
          </Link>
          <Link to='/products' className="link">
          <Button className="home-btn">Products</Button>
          </Link>
            
          <Link to='/cart' className="link">
          <Button ><ShoppingCartIcon className="cart-icon"/><span className="cartCounter">{productCounter}</span></Button>
          </Link>
        </Toolbar>
      </AppBar>
    
    
    )
}
