import { NavLink } from "react-router-dom"
import hairstyle from "./assets/hairstyle.jpeg";
import beard from "./assets/beard.jpeg";
import fragrence from "./assets/fragrence.jpg";
import skincare from "./assets/skincare.jpg";

function GroomingTrend(){
    return(
        <>
        <div>
            <h1 className="trend-headline">Grooming Trends</h1>

              <div className="trend-ui">
             <div className="trendcard">
                            <NavLink className={"trendnav"} to='/Hairstyle'>
                            <img className="trendcardimg" src={hairstyle} alt="'hairstyle"/>
                            <h2 className="trendnow">Hairstyle</h2>
                            <p className="paharagraph">Trending cuts and hairstyles to match your face, vibe and personal style.</p>
                            </NavLink>
            </div>

            <div className="trendcard">
                            <NavLink className={"trendnav"} to='/Beard'>
                            <img className="trendcardimg" src={beard} alt="'beard"/>
                            <h2 className="trendnow">Bread</h2>
                            <p className="paharagraph">Find the right beard styles and grooming tips for a sharper look.</p>
                            </NavLink>
            </div>

            <div className="trendcard">
                            <NavLink className={"trendnav"} to='/Fragrence'>
                            <img className="trendcardimg" src={fragrence} alt="'fragrence"/>
                            <h2 className="trendnow">Fragrence</h2>
                            <p className="paharagraph">Discover signature scents that elevate your style and leave a lasting impression.</p>
                            </NavLink>
            </div>

            <div className="trendcard">
                            <NavLink className={"trendnav"} to='/Skincare'>
                            <img className="trendcardimg" src={skincare} alt="'skincare"/>
                            <h2 className="trendnow">Skincare</h2>
                            <p className="paharagraph">Simple skincare essentials and routines for healthy, fresh-looking skin.</p>
                            </NavLink>
            </div>
             </div>

        </div>
        </>
    )
}

export default GroomingTrend