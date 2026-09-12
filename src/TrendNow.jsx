import { NavLink } from "react-router-dom";
import boxy from "./assets/boxy.jpg";
import baggy from "./assets/baggy.jpeg";
import linen from "./assets/linen.jpg";
import accessories from "./assets/accessories.jpg";
import retro from "./assets/retro.jpg";
import relaxed from "./assets/relaxed.jpg";


function TrendNow(){
    return(
        <>
        <div className='app'>
            <h1 className="trend-headline">Trending Now</h1>
        </div>

        <div>

            <h2 className="trendrightnow">What's hot right now?</h2>

            <div className="trend-ui">
    
            <div className="trendcard">
                <NavLink className={"trendnav"}>
                <img className="trendcardimg" src={boxy} alt="'boxy"/>
                <h2 className="trendnow">Boxy Tshirt/Shirt</h2>
                <p className="paharagraph">Relaxed fit, clean silhouette aur effortless streetwear vibe — comfort aur style ka perfect combination.</p>
                </NavLink>
            </div>

             <div className="trendcard">
                <NavLink className={"trendnav"}>
                <img className="trendcardimg" src={baggy} alt="'baggy"/>
                <h2 className="trendnow">Baggy Jeans</h2>
                <p className="paharagraph">Comfortable, bold aur effortlessly cool — baggy jeans modern streetwear ka major statement piece hain.</p>
                </NavLink>
            </div>

             <div className="trendcard">
                <NavLink className={"trendnav"}>
                <img className="trendcardimg" src={linen} alt="'linen"/>
                <h2 className="trendnow">Linen Shirts</h2>
                <p className="paharagraph">Lightweight, breathable aur classy — warm weather ke liye linen shirts ek timeless style choice hain.</p>
                </NavLink>
            </div>

             <div className="trendcard">
                <NavLink className={"trendnav"}>
                <img className="trendcardimg" src={relaxed} alt="'relaxed"/>
                <h2 className="trendnow">Relaxed Fit Trousers</h2>
                <p className="paharagraph">Sharp look ke saath maximum comfort — relaxed trousers casual aur smart styling dono ke liye perfect hain.</p>
                </NavLink>
            </div>

             <div className="trendcard">
                <NavLink className={"trendnav"}>
                <img className="trendcardimg" src={retro} alt="'retro"/>
                <h2 className="trendnow">Retro Sneakers</h2>
                <p className="paharagraph">Vintage-inspired design with a modern edge — almost every casual outfit ko instantly elevate kar dete hain.</p>
                </NavLink>
            </div>

             <div className="trendcard">
                <NavLink className={"trendnav"}>
                <img className="trendcardimg" src={accessories} alt="'accessories"/>
                <h2 className="trendnow"> Minimal Accessories</h2>
                <p className="paharagraph">Watches, chains aur subtle details — simple accessories bina overdoing ke outfit ko premium finish dete hain.</p>
                </NavLink>
            </div>

            </div>
        </div>
        </>
    )
}

export default TrendNow