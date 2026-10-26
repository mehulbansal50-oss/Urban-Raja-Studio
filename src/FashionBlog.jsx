import { NavLink } from "react-router-dom";
import Streetweartrendcard from "./assets/Streetweartrendcard.png";
import oldmoneycard from "./assets/oldmoneycard.png";
import Oversizedblogcard from "./assets/Oversizedblogcard.png";
import watchblogcard from "./assets/watchblogcard.png";
import wardrobeblogcard from "./assets/wardrobeblogcard.png";
import trendingcolourblogcard from "./assets/trendingcolourblogcard.png";


function FashionBlog(){
    return(
        <>
        <div>
            <h1 className="trend-headline">👕 Fashion Blog</h1>
        </div>

         <div className="trend-ui">
    
            <div className="trendcard">
                <NavLink className={"trendnav"} to='/StreetwearTrend'>
                <img className="trendcardimg" src={Streetweartrendcard} alt="'Streetweartrendcard"/>
                <h3 className="trendnow"> Fashion: Streetwear Trends</h3>
                <p className="paharagraph">Current streetwear pieces, silhouettes and outfit ideas.</p>
                <p className="paharagraph">Read More →   </p>
                </NavLink>
            </div>

             <div className="trendcard">
                <NavLink className={"trendnav"} to='/OldMoneyStyle'>
                <img className="trendcardimg" src={oldmoneycard} alt="'oldmoneycard"/>
                <h3 className="trendnow">Fashion: Old Money Style</h3>
                <p className="paharagraph">Timeless, polished outfits built around clean basics.</p>
                <p className="paharagraph">Read More →   </p>
                </NavLink>
            </div>

             <div className="trendcard">
                <NavLink className={"trendnav"} to="/OversizedFashion">
                <img className="trendcardimg" src={Oversizedblogcard} alt="'Oversizedblogcard"/>
                <h2 className="trendnow">Fashion: Oversized Fashion</h2>
                <p className="paharagraph">How relaxed and oversized fits are shaping modern fashion.</p>
                <p className="paharagraph">Read More →   </p>
                </NavLink>
            </div>

             <div className="trendcard">
                <NavLink className={"trendnav"} to="/TrendingColours">
                <img className="trendcardimg" src={trendingcolourblogcard} alt="'trendingcolourblogcard"/>
                <h2 className="trendnow">Fashion: Trending Colors</h2>
                <p className="paharagraph">Colors and combinations currently appearing across fashion.</p>
                <p className="paharagraph">Read More →   </p>
                </NavLink>
            </div>

             <div className="trendcard">
                <NavLink className={"trendnav"} to="/MustHaveWardrobe">
                <img className="trendcardimg" src={wardrobeblogcard} alt="'wardrobeblogcard"/>
                <h2 className="trendnow">Fashion: Must-Have Wardrobe Pieces</h2>
                <p className="paharagraph">Essential clothing every modern wardrobe can use.</p>
                <p className="paharagraph">Read More →   </p>
                </NavLink>
            </div>

             <div className="trendcard">
                <NavLink className={"trendnav"} to="/FashionTrendsToWatch">
                <img className="trendcardimg" src={watchblogcard} alt="'watchblogcard"/>
                <h2 className="trendnow"> Fashion: Fashion Trends to Watch</h2>
                <p className="paharagraph">Emerging styles and pieces gaining attention.</p>
                <p className="paharagraph">Read More →   </p>
                </NavLink>
            </div>

            </div>
        </>
    )
}

export default FashionBlog