import { NavLink } from "react-router-dom"
import skin from "./assets/skin.jpg";
import glow from "./assets/glow.jpg";
import sunscreem from "./assets/sunscreem.jpg";

function Skincare() {
    return(
        <>
        <div>
            <h1 className="trend-headline">✨ Skincare</h1>

             <div className="trend-ui">
             <div className="trendcard">
                            <NavLink className={"trendnav"}>
                            <img className="trendcardimg" src={skin} alt="'skin"/>
                            <h2 className="trendnow"> 💧 Glass Skin</h2>
                            <p className="paharagraph">Healthy, hydrated and naturally glowing-looking skin with a smooth finish.</p>
                            </NavLink>
            </div>

            <div className="trendcard">
                            <NavLink className={"trendnav"}>
                            <img className="trendcardimg" src={glow} alt="'glow"/>
                            <h2 className="trendnow">🧴 Lightweight Moisturizer</h2>
                            <p className="paharagraph">A light, non-greasy moisturizer that keeps skin soft and hydrated.</p>
                            </NavLink>
            </div>

            <div className="trendcard">
                            <NavLink className={"trendnav"}>
                            <img className="trendcardimg" src={sunscreem} alt="'sunscreem"/>
                            <h2 className="trendnow"> ☀️ Sunscreen</h2>
                            <p className="paharagraph">Daily sun protection that helps protect skin from harmful UV rays.</p>
                            </NavLink>
            </div>

    
             </div>
        </div>
        </>
    )
}

export default Skincare