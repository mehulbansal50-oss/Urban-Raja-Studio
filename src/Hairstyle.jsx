import { NavLink } from "react-router-dom";
import hair1 from "./assets/hair1.jpg";
import hair2 from "./assets/hair2.jpg";
import hair3 from "./assets/hair3.jpg";
import hair4 from "./assets/hair4.jpg";


function Hairstyle(){
    return(
        <>
        <div className='app'>
            <h1 className="trend-headline">Hairstyles</h1>
        </div>

        <div>

            <h2 className="trendrightnow">Discover the latest hairstyles that are trending right now — 
                from textured and messy looks to clean, classic cuts.</h2>

            <div className="trend-ui">
    
            <div className="trendcard">
                <NavLink className={"trendnav"}>
                <img className="trendcardimg" src={hair1} alt="'hair1"/>
                <h2 className="trendnow">Textured Crop</h2>
                <p className="paharagraph">Short haircut with layered, textured top that gives a natural, effortless and modern look.</p>
                </NavLink>
            </div>

             <div className="trendcard">
                <NavLink className={"trendnav"}>
                <img className="trendcardimg" src={hair2} alt="'hair2"/>
                <h2 className="trendnow">Messy Fringe</h2>
                <p className="paharagraph">A relaxed hairstyle with a slightly messy front fringe, perfect for a casual and youthful vibe.</p>
                </NavLink>
            </div>

             <div className="trendcard">
                <NavLink className={"trendnav"}>
                <img className="trendcardimg" src={hair3} alt="'hair3"/>
                <h2 className="trendnow">Low Taper</h2>
                <p className="paharagraph">Clean and subtle taper around the sides and neckline while keeping more length on top for a sharp, versatile look.</p>
                </NavLink>
            </div>

             <div className="trendcard">
                <NavLink className={"trendnav"}>
                <img className="trendcardimg" src={hair4} alt="'hair4"/>
                <h2 className="trendnow">Middle Part</h2>
                <p className="paharagraph">Hair is divided from the center with flowing sides, giving a classic yet modern and effortlessly stylish appearance.</p>
                </NavLink>
            </div>

            </div>
        </div>
        </>
    )
}

export default Hairstyle