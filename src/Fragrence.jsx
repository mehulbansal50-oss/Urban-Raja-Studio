import { NavLink } from "react-router-dom"
import woody from "./assets/woody.jpg";
import fresh from "./assets/fresh.jpg";
import citrus from "./assets/citrus.jpg";

function Fragrence() {
    return(
        <>
        <div>
            <h1 className="trend-headline">🌿 Fragrance</h1>

             <div className="trend-ui">
             <div className="trendcard">
                            <NavLink className={"trendnav"}>
                            <img className="trendcardimg" src={fresh} alt="'fresh"/>
                            <h2 className="trendnow"> 💧 Fresh / Aquatic</h2>
                            <p className="paharagraph">Clean, cool and refreshing scents with a fresh aquatic feel.</p>
                            </NavLink>
            </div>

            <div className="trendcard">
                            <NavLink className={"trendnav"}>
                            <img className="trendcardimg" src={woody} alt="'woody"/>
                            <h2 className="trendnow">🧱 Woody</h2>
                            <p className="paharagraph">Warm, earthy fragrances with rich woody and masculine notes.</p>
                            </NavLink>
            </div>

            <div className="trendcard">
                            <NavLink className={"trendnav"}>
                            <img className="trendcardimg" src={citrus} alt="'citrus"/>
                            <h2 className="trendnow"> 🍋 Citrus</h2>
                            <p className="paharagraph">Bright and energetic scents with fresh lemon, orange or bergamot notes.</p>
                            </NavLink>
            </div>

    
             </div>
        </div>
        </>
    )
}

export default Fragrence