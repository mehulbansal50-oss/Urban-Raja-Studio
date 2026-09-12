import { NavLink } from "react-router-dom";
import outfit from "./assets/outfit.png";

function HomePage(){
    return(
        <>
         <div>
      <h1 className='name'>Urban Raja Studio</h1>
      <img className='img' src={outfit} alt='outfit'/>

    </div>
    <div className="home-about">
      <NavLink className= 'about' to='/about'>About</NavLink>
      <NavLink className= 'about'  to='/Offer'>What We Offer / Services</NavLink>
      <NavLink className= 'about' to='/WhyUrbanRaja'>Why Choose Us</NavLink>
      </div>
        </>
    )
}

export default HomePage