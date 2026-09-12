import { NavLink } from "react-router-dom"
import fashionblogs from "./assets/fashionblogs.png";
import course from "./assets/course.png";
import styling from "./assets/styling.png";
import store from "./assets/store.png";


function Offer() {
    return(
        <>
        <div>
            <h1 className='name'>What We Offer / Services</h1>

             <div className="trend-ui">
             <div className="trendcard">
                            <NavLink className={"trendnav"} >
                            <img className="trendcardimg" src={fashionblogs} alt="'fashionblogs"/>
                            <h2 className="trendnow">🔥 Trend & Fashion Blogs</h2>
                            <p className="paharagraph">Latest men’s fashion trends, outfit ideas, grooming tips aur style inspiration.</p>
                            </NavLink>
            </div>

            <div className="trendcard">
                            <NavLink className={"trendnav"} >
                            <img className="trendcardimg" src={course} alt="'course"/>
                            <h2 className="trendnow">🎓 Style Courses</h2>
                            <p className="paharagraph">Fashion aur personal styling ko better samajhne ke liye practical courses aur guides.</p>
                            </NavLink>
            </div>

            <div className="trendcard">
                            <NavLink className={"trendnav"} >
                            <img className="trendcardimg" src={styling} alt="'styling"/>
                            <h2 className="trendnow">👔 1:1 Personal Styling</h2>
                            <p className="paharagraph">Apni style ko lekar confused ho? Slot book karo aur hamare stylist se personally baat karke tailored style advice lo.

</p>
                            </NavLink>
            </div>

            <div className="trendcard">
                            <NavLink className={"trendnav"} >
                            <img className="trendcardimg" src={store} alt="'store"/>
                            <h2 className="trendnow">🛍️ Urban Raja Store</h2>
                            <p className="paharagraph">Apne style ko upgrade karo. Curated men’s fashion pieces ko discover karo aur directly shop karo.</p>
                            </NavLink>
            </div>
             </div>
        </div>
        </>
    )
}

export default Offer