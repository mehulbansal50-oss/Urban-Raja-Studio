import { NavLink } from "react-router-dom";
import accessories from "./assets/accessories.jpg";
import boxy from "./assets/boxy.jpg";
import baggy from "./assets/baggy.jpeg";
import oversized from "./assets/oversized.jpg";
import cargo from "./assets/cargo.jpg";
import trouser from "./assets/trouser.jpg";


function Clothes(){
    return(
        <>
        <div>
            <h1 className="trend-headline">Clothing</h1>
        </div>
           <div className="clothingtrend">
            <NavLink className="boxnav" to='/BoxyFit'>
                <img className="clothingimg" src={boxy} alt="'boxy"/>
                <div className="cardtext">
                <h3>Boxy T-shirt 🔥</h3>
                <p>
                    Relaxed fit, clean silhouette aur effortless streetwear vibe — 
                    comfort aur style ka perfect combination.
                    </p>
                </div>
            </NavLink>
            </div>

           <div className="clothingtrend">
            <NavLink className="boxnav" to='/BaggyJeans'>
                <img className="clothingimg" src={baggy} alt="'baggy"/>
                <div className="cardtext">
                <h3>Baggy Jeans 🔥</h3>
                <p>
                  Comfortable, bold aur effortlessly cool — 
                  baggy jeans modern streetwear ka major statement piece hain.
                    </p>
                </div>
            </NavLink>
            </div>

           <div className="clothingtrend">
            <NavLink className="boxnav" to='/OversizedShirts'>
                <img className="clothingimg" src={oversized} alt="'oversized"/>
                <div className="cardtext">
                <h3>Oversized Shirts 🔥</h3>
                <p>
                   Relaxed silhouettes made for effortless, modern street style.
                    </p>
                </div>
            </NavLink>
            </div>

             <div className="clothingtrend">
            <NavLink className="boxnav" to='/CargoPants'>
                <img className="clothingimg" src={cargo} alt="'cargo"/>
                <div className="cardtext">
                <h3>Cargo Pants 🔥</h3>
                <p>
                   Utility-inspired fits with a bold, functional edge.
                    </p>
                </div>
            </NavLink>
            </div>

             <div className="clothingtrend">
            <NavLink className="boxnav" to='/LinenTrousers'>
                <img className="clothingimg" src={trouser} alt="'trouser"/>
                <div className="cardtext">
                <h3>Linen Trouser 🔥</h3>
                <p>
                   Lightweight, breathable trousers for a clean and relaxed look.
                    </p>
                </div>
            </NavLink>
            </div>
           
        </>
    )
}

export default Clothes