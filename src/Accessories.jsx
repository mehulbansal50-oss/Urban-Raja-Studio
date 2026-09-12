import { NavLink } from "react-router-dom"
import chain from "./assets/chain.jpg";
import rings from "./assets/rings.jpg";
import watch from "./assets/watch.jpg";

function Accessories(){
    return(
        <>
        <div>
            <h1 className="trend-headline">Accessories</h1>
        </div>

        <div className="clothingtrend">
            <NavLink className="boxnav" to='/MinimalChain'>
                <img className="clothingimg" src={chain} alt="'chain"/>
                <div className="cardtext">
                    <h3> Minimal Chain</h3>
                    <p>Subtle chains that add a clean edge to any everyday look.</p>
                </div>
            </NavLink>
        </div>

         <div className="clothingtrend">
            <NavLink className="boxnav" to='/MinimalRings'>
                <img className="clothingimg" src={rings} alt="'rings"/>
                <div className="cardtext">
                    <h3> Minimal Rings</h3>
                    <p>Subtle chains that add a clean edge to any everyday look.</p>
                </div>
            </NavLink>
        </div>

         <div className="clothingtrend">
            <NavLink className="boxnav" to='/MinimalWatch'>
                <img className="clothingimg" src={watch} alt="'watch"/>
                <div className="cardtext">
                    <h3> Minimal Watch</h3>
                    <p>Subtle chains that add a clean edge to any everyday look.</p>
                </div>
            </NavLink>
        </div>
        </>
    )
}

export default Accessories