import { NavLink } from "react-router-dom"
import retro from "./assets/retro.jpg";
import loafer from "./assets/loafer.jpg";
import minimal from "./assets/minimal.jpg";

function Footwear(){
    return(
        <>
        <div>
            <h1 className="trend-headline">Footwear</h1>
        </div>

        <div className="clothingtrend">
            <NavLink className="boxnav" to='/RetroSneaker'>
                 <img className="clothingimg" src={retro} alt="'retro"/>
                <div className="cardtext">
                <h3>Retro Sneakers</h3>
                <p>Classic silhouettes with a modern edge for effortless everyday style.</p>
                </div>
            </NavLink>
        </div>

         <div className="clothingtrend">
            <NavLink className="boxnav" to='/loafers'>
                 <img className="clothingimg" src={loafer} alt="'loafer"/>
                <div className="cardtext">
                <h3>Loafers</h3>
                <p>Timeless, refined and versatile — perfect for smart & elevated looks.</p>
                </div>
            </NavLink>
        </div>

         <div className="clothingtrend">
            <NavLink className="boxnav" to='/MinimalSneaker'>
                 <img className="clothingimg" src={minimal} alt="'minimal"/>
                <div className="cardtext">
                <h3>Minimal Sneakers</h3>
                <p>Clean, sleek and easy to style with almost any outfit.</p>
                </div>
            </NavLink>
        </div>
        </>
    )
}

export default Footwear