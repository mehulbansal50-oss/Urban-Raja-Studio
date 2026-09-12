import { NavLink } from "react-router-dom";
import accessories from "./assets/accessories.jpg";
import cloth from "./assets/cloth.jpg";
import foot from "./assets/foot.jpg";

function FashionTrends(){
    return(
        <>
        <div>
            <h1 className="trend-headline">Fashion Trends</h1>
            <div className="trend-ui">
                 <div className="trendcard">
                <NavLink className={"trendnav"} to='/Clothes'>
                <img className="trendcardimg" src={cloth} alt="'cloth"/>
                <h2 className="trendnow">Clothing</h2>
                <p className="paharagraph">Explore the latest silhouettes, from boxy fits to oversized layers and baggy denim.</p>
                </NavLink>
            </div>

             <div className="trendcard">
                <NavLink className={"trendnav"} to='/Footwear'>
                <img className="trendcardimg" src={foot} alt="'foot"/>
                <h2 className="trendnow">Footwear</h2>
                <p className="paharagraph">Step into the latest sneaker trends, from chunky soles to clean minimal kicks.</p>
                </NavLink>
            </div>

             <div className="trendcard">
                <NavLink className={"trendnav"} to='/Accessories'>
                <img className="trendcardimg" src={accessories} alt="'accessories"/>
                <h2 className="trendnow">Accessories</h2>
                <p className="paharagraph">Complete your look with trending watches, chains, rings and statement essentials.</p>
                </NavLink>
            </div>
            </div>
        </div>
        </>
    )
}

export default FashionTrends