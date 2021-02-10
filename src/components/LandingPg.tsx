import useWebAnimations, { shakeY } from '@wellyshen/use-web-animations';
import React from 'react'
import landing from '../images/landingstore.jpg'
import {Link} from 'react-router-dom'


export const LandingPg = () => {
    
    const { ref:landImg} = useWebAnimations<HTMLDivElement>({ ...shakeY ,
        timing:{
         duration:4000,
         iterations:Infinity,
         direction: "alternate",
         easing: "ease-in-out"
        }
        });
    
    return (
        <div className="container-landing">
        <div ref={landImg} className="landing-img-container">
            <img  className="landing-img" src={landing} alt="store"/>
            </div>
            <div className="landing-text">
                <h2 className="online-shopping">Online <br/>
                Shopping</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                   Sed illo, quaerat veritatis omnis at accusamus nulla 
                   doloremque soluta laboriosam placeat.</p>
        
            </div>
            <div className="shop-btn-box">
            <Link to="/products">
                    <button className="shop-btn">Shop Now</button>
                </Link>
            </div>
          
            </div>

        
    )
}
