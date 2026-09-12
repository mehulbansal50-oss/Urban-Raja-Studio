import { NavLink } from "react-router-dom";
import beard1 from "./assets/beard1.jpg";
import beard2 from "./assets/beard2.jpg";
import beard3 from "./assets/beard3.jpg";


function Beard(){
    return(
        <>
        <div className='app'>
            <h1 className="trend-headline">Beard Styles</h1>
        </div>

        <div>

            <h2 className="trendrightnow">Explore modern beard styles that can instantly elevate your look —
                 from subtle stubble to sharp and well-defined beards. </h2>

            <div className="trend-ui">
    
            <div className="trendcard">
                <NavLink className={"trendnav"}>
                <img className="trendcardimg" src={beard1} alt="'beard1"/>
                <h2 className="trendnow">Light Stubble</h2>
                <p className="paharagraph">Short, subtle facial hair that adds a rugged touch while keeping your look clean and effortless.</p>
                </NavLink>
            </div>

             <div className="trendcard">
                <NavLink className={"trendnav"}>
                <img className="trendcardimg" src={beard2} alt="'beard2"/>
                <h2 className="trendnow">Short Boxed Beard</h2>
                <p className="paharagraph">A neatly trimmed beard with defined edges that gives a sharp, structured and masculine appearance.</p>
                </NavLink>
            </div>

             <div className="trendcard">
                <NavLink className={"trendnav"}>
                <img className="trendcardimg" src={beard3} alt="'beard3"/>
                <h2 className="trendnow">Clean Beard</h2>
                <p className="paharagraph">A well-groomed, evenly trimmed beard with a polished finish for a refined and sophisticated look.</p>
                </NavLink>
            </div>

            </div>
        </div>
        </>
    )
}

export default Beard